define([],function(){
	var hash = {},
		count=0;
	function generateId (obj) {
		return (obj.declaredClass ? obj.declaredClass.split(".").join("_") : "Obj" ) + "_" + count;
	}
	return {
		add : function(obj){
			count++;
			if (! obj.hasOwnProperty("id")) {
				obj.id = generateId(obj);
			};
			if (hash[obj.id]) {
				throw("Obj with id: " + obj.id + " already exists!");
			};
			hash[obj.id] = obj;
		},
		remove : function remove (obj) {
			delete hash[obj.id];
		},
		byId : function byId (id) {
			return hash[id];
		},
		byNode : function byNode (node) {
			return this.byId(node.id);
		}

	}
});