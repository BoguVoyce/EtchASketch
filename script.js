const grid = document.querySelector(".grid");
const container = document.querySelector(".container");

window.addEventListener("load", setDefaultGrid)

function setDefaultGrid(){
    setGridSize(16);
    gridAdd(16);
}

function setGridSize(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function gridAdd(size){
    for (let i = 0; i<size*size; i++){
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-element";
        gridElement.addEventListener("mouseover", changeColor);
        grid.appendChild(gridElement);
    }
}
function changeColor(x){

}