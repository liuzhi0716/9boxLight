
var begin;
var id;

function stayColor(){
	for(var i = 1;i<10;i++){
		var numbox ="block"+i;
		var staybox = document.getElementById(numbox);
		staybox.style.backgroundColor="#FFA500";
	}
}

function stopColor(){
	begin=false;
	clearInterval(id);
	for(var i = 1;i<10;i++){
		var numbox ="block"+i;
		var staybox = document.getElementById(numbox);
		staybox.style.backgroundColor="#FFA500";
	}
}

function startColor(){
	begin = true;

	/*防止多次点击造成多次效果，故将之前的效果清楚（如果有）*/
	clearInterval(id);

	 id=setInterval(function(){
		if(begin){
	stayColor();
	var numbox ="block"+Math.ceil(Math.random()*9);
	var numbox1 = "block"+Math.ceil(Math.random()*9);
	var numbox2 = "block"+Math.ceil(Math.random()*9);

	while(numbox==numbox1){
		numbox1 = "block"+Math.ceil(Math.random()*9);
	}
	while(numbox==numbox2||numbox1==numbox2){
		numbox2 = "block"+Math.ceil(Math.random()*9);
	}
	var lightbox = document.getElementById(numbox);
	var lightbox1 = document.getElementById(numbox1);
	var lightbox2 = document.getElementById(numbox2);


	/*这些只能设置在html中，css中无法改变
	lightbox.setAttribute("background-color",getRandomColor());
	alert(lightbox.getAttribute("background-color"));*/

	lightbox.style.backgroundColor=getRandomColor();
	lightbox1.style.backgroundColor=getRandomColor();
	lightbox2.style.backgroundColor=getRandomColor();
	
	}
	else{
		return;
	}
	},1000);

}

function getRandomColor(){ 
 return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); 
 } 
/* 1、16777215为16进制的颜色ffffff转成10进制的数字 
2、>>数字取整 
3、转成16进制不足6位的以0来补充 */