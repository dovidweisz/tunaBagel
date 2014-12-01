define(["tuna/base/declare", "./One", "play/write"], function(declare,One, write){
	return declare(One, {
		"declaredClass" : "Two",
		"constructor" : function Two (p) {
			// body...
			write("Hey! I'm a two! and my secret is: " + p(this).secret);
			//p(this).secret = "I HAVE NO SECRETS!"
		}/*,
		shmigegi : function shmigegi () {
			write("i am shmigegi 2");
			this.inherited(arguments);
		}*/
		
	}) ;
});