define(["tuna/base/declare", "./Two", "play/write"], function(declare,Two, write){
	var Three, pt;
	return declare(Two, {
		"declaredClass" : "Three",
		"constructor" : function Three (p) {
			write(p(this).secret);
			p(this).secret = "I'm actualy an idiot!";

			write(p(this).secret);
		},
		shmigegi : function () {
			write("I am shmigegi 3");
			write("calling inherited");
			write(this.inherited(arguments));
			write("inherited done.")
		}
		
	}, function Three (argument) {
		// body...
	});
});