var a = document.getElementById("Naruto");
var b = document.getElementById("Sasuke");
var c = document.getElementById("img1");
var d = document.getElementById("img2");
var e = document.getElementById("img3");
var f = document.getElementById("img4");
var g = document.getElementById("img5");
var h = document.getElementById("img6");
var i = document.getElementById("img7");
var j = document.getElementById("img8");
var y = document.getElementById("friend");
var z = document.getElementById("music");
var w = document.getElementById("music2");


function pageRedirect() {
	window.location.href="peace.html";
}

function changeImg () {
c.classList.remove("disappear");
z.play()
}
function changeImg0 (){
 g.classList.remove("disappear");
}
function changeImg1 () {
d.classList.remove("disappear");
}
function changeImg2 () {
e.classList.remove("disappear");
}
function changeImg3 () {
f.classList.remove("disappear");
}

function changeImg5 () {
h.classList.remove("disappear");
}
function changeImg6 () {
i.classList.remove("disappear");
}
function changeImg7 () {
j.classList.remove("disappear");
}

function addText () {
	document.getElementById("text").innerHTML = "FRIENDSHIP!";
	y.classList.add("photo");
	w.play()
	
}

function reSet(){
	c.classList.add("disappear");
	g.classList.add("disappear");
	d.classList.add("disappear");
	e.classList.add("disappear");
	f.classList.add("disappear");
	h.classList.add("disappear");
	i.classList.add("disappear");
	j.classList.add("disappear");
}
					