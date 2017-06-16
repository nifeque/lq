function imgLarge()
{
	var blurImg = document.getElementById("blurImg");
	blurImg.onclick = function ()
	{
		blurOff ();
	};
};
function blurOff ()
{
	var sub = document.getElementById("sub");
	var subInput = sub.getElementsByTagName("input");
	var blur = document.getElementById("blur");
	reviseClass(blur, "visiOn", "visiOff");
	reviseClass(subInput[0], "visiOn", "visiOff");
	reviseClass(subInput[2], "visiOn", "visiOff");
};
function PNOnclick()
{
	var sub = document.getElementById("sub");
	var subInput = sub.getElementsByTagName("input");
	var blurImg = document.getElementById("blurImg");
	subInput[0].onclick = function () 
	{
		var imgs = document.getElementById("fram").contentWindow.document.getElementsByTagName("img");
		blurImg.src = imgs[blurImg.picIndex - 1].src;
		blurImg.picIndex = blurImg.picIndex - 1;
		subInput[1].value = blurImg.picIndex + 1 + " / " + blurImg.picLength;
		if (blurImg.picIndex == 0) {
			reviseClass(subInput[0], "visiOn", "visiOff");
		}
		if (blurImg.picIndex == blurImg.picLength - 2) {
			reviseClass(subInput[2], "visiOff", "visiOn");
		}		
	};
	subInput[2].onclick = function () 
	{
		var imgs = document.getElementById("fram").contentWindow.document.getElementsByTagName("img");
		blurImg.src = imgs[blurImg.picIndex + 1].src;
		blurImg.picIndex = blurImg.picIndex + 1;
		subInput[1].value = blurImg.picIndex + 1 +" / " + blurImg.picLength;
		if (blurImg.picIndex == blurImg.picLength - 1) {
			reviseClass(subInput[2], "visiOn", "visiOff");
		}
		if (blurImg.picIndex == 1) {
			reviseClass(subInput[0], "visiOff", "visiOn");
		}		
	};	
};
function imgSize()
{
	var posImg = document.getElementById("posImg");
	var blurImg = document.getElementById("blurImg");
	if (blurImg.width > blurImg.height) {
		var a = blurImg.width;
		blurImg.width = posImg.offsetWidth * 0.98;
		blurImg.height = posImg.offsetWidth * blurImg.height / a * 0.98;
		blurImg.style.position = "absolute";
		blurImg.style.bottom = (posImg.offsetHeight - blurImg.height) * 0.5 + "px";
		blurImg.style.left = 0;
	}
	else {
		var a = blurImg.height;
		blurImg.height  = posImg.offsetHeight * 0.98;
		blurImg.width = posImg.offsetHeight * blurImg.width / a * 0.98;
		blurImg.style.position = "absolute";
		blurImg.style.left = (posImg.offsetWidth - blurImg.width) * 0.5 + "px";
		blurImg.style.bottom = 0;
	}
};

addOnResize(imgSize)
addLoadEvent(imgLarge);
addLoadEvent(PNOnclick);