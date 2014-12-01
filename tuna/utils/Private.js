define( [
	'./functions'
], function (
	functions
) {
	return function Private(){
		var id = functions.uuid();
		function _(obj) {
			var rv;
			if(obj.hasOwnProperty(id)){
				return obj[id];
			}
			rv = {};
			Object.defineProperty(obj, id, {
				value: rv
			});
			return rv;
		}
		_.addMethod = function addMethod(context, methodName, method) {
			_(context)[methodName] = method.bind(context);
		}
		return _;
	}
} );
