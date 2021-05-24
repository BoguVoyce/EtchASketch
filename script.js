const clearButton = document.querySelector(".clear")
const grid = document.querySelector(".grid");
const setDefaultGrid = () => { 
    setGridSize(16);
    gridAdd(16);
}
const setGridSize = (size) => {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}
const gridAdd = (size) => {
    for(let i=0; i<size*size; i++){
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-element"
        gridElement.addEventListener("mouseover", changeColor);
        grid.appendChild(gridElement);
    }
}
const changeColor = (x) => {
    const randomR = Math.floor(Math.random()*256);
    const randomG = Math.floor(Math.random()*256);
    const randomB = Math.floor(Math.random()*256);
    x.target.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`
}
const clear = () => {
    const clearArr = Array.from(grid.childNodes);
    clearArr.forEach((elem) =>{
        grid.removeChild(elem);
    });
}
const changeSize = () => {
    let newSize = prompt("Enter new size");

    if(newSize !== null){
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
            alert("Enter a number from 1-64 range");
            changeSize();
          } else {
            clear();
            setGridSize(newSize);
            gridAdd(newSize);
          }
    }
}
window.addEventListener("load", setDefaultGrid);
clearButton.addEventListener("click", changeSize);