define([], function() {
	return {
		bagelFromDomNode : function bagelFromDomNode (domNode) {
			var ctorPromise, ctor, propsAttr, props;

			ctorPromise = this.getCtor(domNode.getAttribute("data-bagel"));

			propsAttr = domNode.getAttribute(data-bagel-attr);
			if(propsAttr && propsAttr.length > 0){
				try{
					props = JSON.parse(propsAttr);
				}catch(e){
					throw("cant pase JSON for Bagel", e);
				}
			}else{
				//props = {};
			}
			return new Promise(function(resolve) {
				ctorPromise.then(function(ctor) {
					resolve(new ctor(props));
				});
			});
			
		},
		getCtor : function getCtor (addr) {
			var promise = new Promise(resolve){
				require([addr], function(ctor) {
					resolve(ctor);
				});
			}
			return promise;
		}
	}
});