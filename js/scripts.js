var allLinks = document.getElementsByTagName('a');
for(var i = allLinks.length-1; i >=0  ; i--) {
	 (function () {
		var modal = allLinks[i].id + "_modal"
		allLinks[i].addEventListener("mouseenter", function() { 
			document.getElementById(modal).style.display = "block"; }, false)
		allLinks[i].addEventListener("mouseleave", function() { 
			document.getElementById(modal).style.display = "none"; }, false)
	}()); // immediate invocation
	}
