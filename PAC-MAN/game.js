const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const pacmanFrame = document.getElementById("animation");
const ghostFrame = document.getElementById("ghost");

let createRect = (x , y, Width, height, color) => {
    canvasContext.FillStyle = color;
    canvasContext.FillRect(x , y, Width, height);
};

let map = [
    [1,1,1,1,1 ,1,1,1,1,1 ,1,1,1,1,1 ,1,1,1,1,1, 1],
    [1,2,2,2,2 ,2,2,2,2,2 ,1,2,2,2,2 ,2,2,2,2,2, 1],
    [1,2,1,1,1 ,2,1,1,1,2 ,1,2,1,1,1 ,2,1,1,1,2, 1],
    [1,2,1,1,1 ,2,1,1,1,2 ,1,2,1,1,1 ,2,1,1,1,2, 1],
    [1,2,2,2,2 ,2,2,2,2,2 ,2,2,2,2,2 ,2,2,2,2,2, 1],
    [1,2,1,1,1 ,2,1,2,1,1 ,1,1,1,2,1 ,2,1,1,1,2, 1],
    [1,2,2,2,2 ,2,1,2,2,2 ,1,2,2,2,1 ,2,2,2,2,2, 1],
    [1,1,1,1,1 ,2,1,1,1,2 ,1,2,1,1,1 ,2,1,1,1,1, 1],
    [0,0,0,0,1 ,2,1,2,2,2 ,2,2,2,2,1 ,2,1,0,0,0, 0],
    [1,1,1,1,1 ,2,1,2,1,1 ,2,1,1,2,1 ,2,1,1,1,1, 1],
    [2,2,2,2,2 ,2,2,2,1,2 ,2,2,2,1,2 ,2,2,2,2,2, 1],
    [1,1,1,1,1 ,2,1,2,1,2 ,2,2,1,2,1 ,2,1,1,1,1, 1],
    [0,0,0,0,1 ,1,1,1,1,1 ,1,1,1,1,1 ,1,1,0,0,0, 0],
    [0,0,0,0,1 ,2,2,2,1,1 ,1,1,1,2,2 ,1,1,0,0,0, 0],
    [1,2,2,2,2 ,2,2,2,2,2 ,1,2,2,2,2 ,2,2,2,2,2, 1],
    [1,2,1,1,1 ,2,1,1,1,2 ,1,2,1,1,1 ,2,1,1,1,2, 1],
    [1,2,2,2,1 ,2,2,2,2,2 ,2,2,2,2,2 ,2,1,2,2,2, 1],
    [1,1,2,2,1 ,2,1,2,1,1 ,1,1,1,2,1 ,2,1,2,2,1, 1],
    [1,2,2,2,2 ,2,1,2,2,2 ,1,2,2,2,1 ,2,2,2,2,2, 1],
    [1,2,1,1,1 ,1,1,1,1,2 ,1,2,1,1,1 ,1,1,1,1,2, 1],
    [1,2,2,2,2 ,2,2,2,2,2 ,1,2,2,2,2 ,2,2,2,2,2, 1],
    [1,1,1,1,1 ,1,1,1,1,1 ,1,1,1,1,1 ,1,1,1,1,1, 1],

]
