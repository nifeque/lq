function imgOnclick ()
{
	if (!document.getElementById || 
		!document.getElementsByTagName) return false;
	if (!document.getElementById("gallery")) return false;
	var imgs = document.getElementsByTagName("img");
	for (var i=0; i<imgs.length; i++) {
		imgs[i].index = i;
		imgs[i].onclick = function ()
		{
			changeBlur(this.src);
			imgsSize (this);
			blurNum(this.index, imgs.length);
		};
	}
};
function changeBlur (imgSrc)
{
	var sub = parent.window.document.getElementById("sub");	
	var subInput =  sub.getElementsByTagName("input");
	var blur = parent.window.document.getElementById("blur");
	var blurImg = parent.window.document.getElementById("blurImg");
	reviseClass(blur, "visiOff", "visiOn");
	blurImg.setAttribute("src", imgSrc);
	reviseClass(subInput[0], "visiOff", "visiOn");
	reviseClass(subInput[2], "visiOff", "visiOn");
};
function blurNum(imgIndex, imgLength) 
{
	var blurImg = parent.window.document.getElementById("blurImg");	
	blurImg.picIndex = imgIndex;
	blurImg.picLength = imgLength;
	var subInput = parent.window.document.getElementsByTagName("input");
	subInput[1].value = (blurImg.picIndex + 1) + " / " + blurImg.picLength;
	if (blurImg.picIndex == blurImg.picLength - 1) {
			reviseClass(subInput[2], "visiOn", "visiOff");
			reviseClass(subInput[0], "visiOff", "visiOn");
	}
	if (blurImg.picIndex == 0) {
			reviseClass(subInput[0], "visiOn", "visiOff");
			reviseClass(subInput[2], "visiOff", "visiOn");
	}	
};
function imgsSize (img)
{
	var blurImg = parent.window.document.getElementById("blurImg");
	var posImg = parent.window.document.getElementById("posImg");
	if (img.width > img.height) {
		blurImg.width  = posImg.offsetWidth * 0.98;
		blurImg.height = posImg.offsetWidth * img.height / img.width * 0.98;
		blurImg.style.position = "absolute";
		blurImg.style.bottom = (posImg.offsetHeight - blurImg.height) * 0.5 + "px";
		blurImg.style.left = 0;
	}
	else {
		blurImg.height  = posImg.offsetHeight * 0.98;
		blurImg.width = posImg.offsetHeight * img.width / img.height * 0.98;
		blurImg.style.position = "absolute";
		blurImg.style.left = (posImg.offsetWidth - blurImg.width) * 0.5 + "px";
		blurImg.style.bottom = 0;
	}
};

addLoadEvent(imgOnclick);