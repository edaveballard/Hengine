
var canvas = document.getElementById("EngineCanvas");


var ctx = canvas.getContext("2d");




function drawPiston(x,y,size,angle) {
	var CHAMBER_WIDTH = 5;
	var HEAD_WIDTH = 10;
	var RATIO = 1.618
	var PIST_RATIO = 2
	
	var offset = CHAMBER_WIDTH/2+HEAD_WIDTH/2
	
	ctx.clearRect(x, y, size, size*RATIO);
	
	//chamber
	ctx.strokeStyle = "#000";
	ctx.lineWidth = CHAMBER_WIDTH;
	ctx.strokeRect(x, y, size, size*RATIO);
	
	ctx.strokeStyle = "#888888";
	ctx.lineWidth = HEAD_WIDTH;
	
	var disp = (1+Math.sin(angle))*(size*RATIO-size*RATIO/PIST_RATIO)/2
	
	ctx.strokeRect(x+offset, y+disp+offset, size-offset*2, size*RATIO/PIST_RATIO-offset*2);
	
}


var theta = 0;

setInterval(function(){ 
	drawPiston(100,100,100,theta*6.28/360); 
	drawPiston(300,100,100,(theta+90)*6.28/360); 
	theta+= 10;
	
	
}, 10);