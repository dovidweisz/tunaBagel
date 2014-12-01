define(["tuna/base/declare", "tuna/base/BagelBase", "play/write"], function(declare, BagelBase, write){
	return declare(BagelBase, [], {
		declaredClass : "play.One",
		"constructor" : function One(p){
			write("Hey! I'm a One!!!!");
			p(this).secret = "I am super smart"
		},
		shmigegi : function () {
			write("I am shmigegi 1");
		}
	});
});