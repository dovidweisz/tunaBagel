define([
	'tuna/utils/mixin',
	'tuna/utils/Private'
], function(
	mixin,
	Private

) {
	var protectedPart = new Private();
	delete protectedPart.addMethod;
	protectedPart.callMethod = function(context, methodName, args){
		return protectedPart(context)[methodName].apply(context, args);
	}

	return function declare(proto, mixins){
		var isBase = !proto;
		function Base(){};
	    proto = new (proto ? proto : Base)(protectedPart);
	    mixin.apply(mixin, arguments);

	    function Obj(props){
	    	mixin(protectedPart(this), protectedPart(proto), props || {});
	    	if(! isBase){
	        	protectedPart(this).proto = proto;
	        }
	    	if(protectedPart(this).bagelInit){
	    		protectedPart.callMethod(this, "bagelInit", [protectedPart]);
	    	}
        	/*if(proto && proto.constructor){
        		proto.constructor.call(this ,protectedPart);
        	}*/
	    }
	    Obj.prototype = proto;

	    return Obj;
	}
});