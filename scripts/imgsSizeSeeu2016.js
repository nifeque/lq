function imgsSizeSeeu2016 ()
{
	var imgs = document.getElementsByTagName("img");
	var body = document.getElementsByTagName("body")[0];
	var content = parent.window.document.getElementById("content");
	var sum = 0;
	var con_h = content.offsetHeight; 
	for (var i = 0; i < imgs.length; i++) {
		removeClass(imgs[i], "noScr");
		imgs[i].height = con_h *0.9;
		imgs[i].width = 1.45 * con_h *0.9;
		sum =sum + 100 +imgs[i].width;
	}
	body.style.width = sum +100+ "px";
};

addLoadEvent(imgsSizeSeeu2016);
addOnResize(imgsSizeSeeu2016);