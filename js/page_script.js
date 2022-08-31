var allImages= document.getElementsByTagName('img');

function bigImg(x) {
	var already = x.style.height
	var len = allImages.length
	for(var i = len-1; i >= 0 ; i--) {
	  if(x.src!=allImages[i].src){
	  	allImages[i].parentNode.removeChild(allImages[i]);
	  }
	}
  if(already == "540px"){
	location.reload();
  }
  else{
  	x.style.height = "540px"
  	x.style.top = "0px"
  	x.style.left = "0px"
  	var filename = x.src.match("[^.]+$")[0].toUpperCase()
  	var title = x.src.match("([^\/]+$)")[0].match("^[^.]*")[0]
  	var size = getFileSize(x.naturalWidth*x.naturalHeight)
  	var back = document.createElement('button')
  	back.innerHTML = " ☆back☆"
  	// back.style.marginTop = (x.clientHeight-back.style.height)+"px"
  	back.style.float = "center"
  	document.getElementById('main').appendChild(back);
  	back.addEventListener ("click", function() {
	  location.reload()
	});
}
}

function getFileSize(input) {
	if(Math.floor(input*8/1000000)==0){
		return Math.floor(input*8/10)/1000 + "K"
	} else{
		return Math.floor(input*8/100000)/100 + "M"
	}
}