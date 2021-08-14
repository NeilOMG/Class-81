canvas=document.getElementById("myCanvas");

ctx= canvas.getContext("2d");

color="blue" 

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= 10;
ctx.arc(100, 100, 40, 0, 2*Math.PI)
ctx.stroke();

canvas.addEventListener("mousedown", mymouse);

function mymouse(e)
{
mouseX = e.clientX-canvas.offsetLeft
mouseY = e.clientY-canvas.offsetTop
circle(mouseX,mouseY)
}

function circle(x,y)
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= 10;
ctx.arc(x, y, 40, 0, 2*Math.PI)
ctx.stroke()
}