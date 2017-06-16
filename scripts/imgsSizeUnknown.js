function imgsSizeUnknown ()
{
	var imgs = document.getElementsByTagName("img");
	var body = document.getElementsByTagName("body")[0];
	var content = parent.window.document.getElementById("content");
	var sum = 0;
	var con_h = content.offsetHeight; 
	for (var i = 0; i < 10; i++) {
		removeClass(imgs[i], "noScr");
		imgs[i].height = con_h *0.7;
		imgs[i].width = 1.5 * con_h *0.7;
		sum =sum + 100 +imgs[i].width;		
	}
	for (var i = 10; i < imgs.length; i++) {
		removeClass(imgs[i], "cols_img");
		imgs[i].height = con_h *0.75;
		imgs[i].width = 0.63 * con_h *0.75;
		sum =sum + 100 +imgs[i].width;		
	}	
	body.style.width = sum+300+'px';
};

addLoadEvent(imgsSizeUnknown);
addOnResize(imgsSizeUnknown);