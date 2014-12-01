define([
	"./declare", 
	'tuna/utils/Private', 
	'tuna/utils/_registered', 
	'tuna/utils/_emptyLCMethods'
	], function(
		declare, 
		Private, 
		_registered,
		_emptyLCMethods){
	var _i = new Private();
	function Bagel(pr){
			pr(this).bagelInit = bagelInit;

	}
	function index (bagel) {
		var i, prop;
		for(i in bagel){
			prop = bagel[i];
			if(typeof prop === "function"){
				_i(prop).name = i;
			}
		}
	}
	function getInherited (context, args) {
		var caller = args.callee,
			callerName = getFuncName(context, caller),
			privateObj = _i(context);
			protoChain = privateObj.protoChain;
		if(! _i(caller).inherited){
			protoChain.some(function(element, i){
				if(element.hasOwnProperty(callerName) && element[callerName] === caller){
					_i(element).protoChain.some(function(e2, i2){
						if(i2 > 0 && e2.hasOwnProperty(callerName)){
							_i(caller).inherited = e2[callerName];
							return true;
						}
						return false;
					});
					return true;
				}
				return false;
			});

		}
		return _i(caller).inherited;
	}
	function getFuncName (context, caller) {
		var name = _i(caller).name;
		if(!name){
			throw("Can't find name to call inherited ", this.declaredClass);
		}
		return name;
	}
	function bagelInit(pr) {
		var protoChain = getProtoChain(this, pr);
		for (var i = protoChain.length - 1; i >= 0; i--) {
			if(protoChain[i].hasOwnProperty("constructor")){
				protoChain[i].constructor.call(this, pr);
			}
		};
		this.postMixinProperties(pr);
		this.buildRendering(pr);
		this.postCreate(pr);
	}
	function getProtoChain (obj, pr) {
		var protectecObj = pr(obj),
			privateObj = _i(obj);
		if(!privateObj.protoChain){
			if(protectecObj.proto){
				privateObj.protoChain = getProtoChain(protectecObj.proto, pr);
			}else{
				privateObj.protoChain = [];
			}
			privateObj.protoChain = [obj].concat(privateObj.protoChain);
		}
		return privateObj.protoChain;
	}
	return declare(Bagel,[_emptyLCMethods, _registered], {
		"declaredClass" : "tuna.base.BagelBase",
		constructor : function (pr) {
			index(this);
		},
		inherited : function(args){
			return getInherited(this, args).apply(this, args);
		}
		
	});
	
amd});