function screenMin ()
{
	var body = document.getElementsByTagName("body")[0];

 	var bodyWidth = window.screen.availWidth;
    var bodyHeight = window.screen.availHeight; 

    body.style.minWidth = bodyWidth * 0.55 + 'px';
    body.style.minHeight = bodyHeight * 0.52 + 'px'; 	
};

addLoadEvent(screenMin);