const canvas = document.getElementById("jsCanvas");
const ctx= canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

let painting = false;

ctx.strokeStyle = "#2c2c2c"
ctx.lineWidth = 2.5;

function startPaintg(){
    painting = true;
}


function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function clearCanvas(event){
    
}

function onMousedown(event){
    painting = true;
}

function onMouseUp(event){
    painting = false;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPaintg);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
}