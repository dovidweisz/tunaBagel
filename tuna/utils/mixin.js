define([], function(){
	function mixin(target, mixins){
		var arr = [], i = 1, mixee;	

		while(i < arguments.length){
			arr = arr.concat( arguments[i]);
			i++;
		}
		while(mixee = arr.shift()){
			_mixin(target, mixee);
		}
		
		
		return target;
	}
	function _mixin(target, mixee){
		for(var i in mixee){
			target[i] = mixee[i];
		}
		return target;
	}
	return mixin;
});