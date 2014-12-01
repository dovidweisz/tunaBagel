define(['tuna/base/declare', './registry'], function(declare, registry) {
	return  {
		postMixinProperties : function() {
			registry.add(this);
		}
	}
});