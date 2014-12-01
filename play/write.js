define([], function(){
	var paper = document.createElement("div");
	document.body.appendChild(paper);
	function write(msg){
		paper.innerHTML += msg + "<br />";
	}
	write.clear = function clear(){
		paper.innerHTML = "";
	}
	return write;
});