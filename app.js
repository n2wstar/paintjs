const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMousedown(event){
    painting = true;
}

function onMouseUp(event){
    painting = false;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onmousedown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave",stopPainting);
}