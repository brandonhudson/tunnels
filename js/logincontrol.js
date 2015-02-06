// JavaScript Document
var version;
var welcome = document.getElementById("welcome");
var signin = document.getElementById("signin");
var signup = document.getElementById("signup");

function subb(){
 	document.getElementById("signup").style.visibility = "visible";
 	document.getElementById("welcome").style.visibility = "hidden";	
	document.getElementById("versNum2").innerHTML = "Version: " + "BETA " +version;

	
}
function sib(){
	document.getElementById("signin").style.visibility = "visible";
	document.getElementById("welcome").style.visibility = "hidden";	
	document.getElementById("versNum3").innerHTML = "Version: " + "BETA " +version;
	
}
function sibback(){
	document.getElementById("signin").style.visibility = "hidden";
	document.getElementById("welcome").style.visibility = "visible";
	document.getElementById("versNum").innerHTML = "Version: " + "BETA " +version;
	
}

function subback(){
	document.getElementById("signup").style.visibility = "hidden";
	document.getElementById("welcome").style.visibility = "visible";
	document.getElementById("versNum").innerHTML = "Version: " + "BETA " +version;
	
}