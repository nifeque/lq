function createBlur()
{
	if (!document.createElement) return false;
	var blur = document.createElement("div");
	blur.id = "blur";	
	addClass(blur, "visiOff");

	var posImg = document.createElement("div");
	posImg.id = "posImg";
	blur.appendChild(posImg);

	var blurImg = document.createElement("img");
	blurImg.id = "blurImg";
	posImg.appendChild(blurImg);

	var sub = document.createElement("div");
	sub.id = "sub";	
	insertAfter(sub, posImg);
	var input0 = document.createElement("input");
	input0.type = "button";
	input0.value = "prev";
	addClass(input0, "prev");	
	sub.appendChild(input0);

	var input1 = document.createElement("input");
	input1.type = "button";
	input1.value = "";	
	addClass(input1, "subNum");	
	insertAfter(input1, input0);
	var input2 = document.createElement("input");
	input2.type = "button";
	input2.value = "next";	
	addClass(input2, "next");	
	insertAfter(input2, input1);
	var content = document.getElementById("content");
	insertAfter(blur, content);
};

addLoadEvent(createBlur);