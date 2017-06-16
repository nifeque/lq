function addLoadEvent (func)
{
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	}
	else {
		window.onload = function ()
		{			
			oldonload();
			func();
		};
	}
};

function removeBlank (str)
{
	if (str.indexOf("  ") != -1) {
		str = str.replace("  ", " ");
		str = removeBlank(str);
	}
	return str;
};

function addOnResize(func)
{
	var oldonresize = window.onresize;
	if (typeof window.onrize != "function") {
		window.onresize = func;
	}
	else {
		window.onresize = function ()
		{
			oldonresize();
			func();
		};
	}
};

function insertAfter (newElement, targetElement)
{
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	}
	else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
};

function addClass (element, value)
{
	if (element.className.indexOf(value) != -1) return false;
	element.className = removeBlank(element.className);
	if (!element.className) {
		element.className = value;
	}
	else {
		element.className +=" " + value; 
	}
};

function removeClass (element, value)
{
	if (element.className.indexOf(value) < 0 ) return false;
	var oldClassName = element.className;
	element.className = removeBlank(element.className);
	if (oldClassName.indexOf(" ") < 0) {
		element.className = " ";
	}
	else {
		oldClassName = oldClassName.replace(value, "");
		element.className = oldClassName.replace(/(^\s*)|(\s*$)/g, "");
	}
};

function reviseClass(element, oldClass, newClass)
{
	removeClass (element, oldClass)
	addClass (element, newClass);
};

function highlightPage ()
{
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	var navs = document.getElementsByTagName("nav");
	if (navs.length == 0) return false;

	var links = navs[0].getElementsByTagName("a");
	addClass(links[4], "here");
	for (var i=0; i<links.length; i++) {
		links[i].index = i;
		links[i].onclick = function ()
		{
			addClass(this, "here");
			for (var i=0; i<links.length; i++) {
				if (links[i].index != this.index) {
					removeClass(links[i], "here");
				}
			}			
		};
	}
};



addLoadEvent(highlightPage);