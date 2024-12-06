const container = document.querySelector(".container");

//reusable function to create the grid so we can adjust its size dynamically
function createGrid(size) {
    //clear container to prevent overlapping of grids
    // container.innerHTML = '';

    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width= '960px';
    container.style.height= '960px';
    container.style.border= '2px solid black';
    container.style.justifyContent = 'center';

    //calculate the sice of each square
    const squareSize = 960/(size + 1);

    //loop for creating the squares
    for (i= 0; i < size*size; i++) {
        //creating new div
        const square = document.createElement("div");

        //putting div inside container
        container.append(square);

        //adding class for styling
        square.classList.add("square");

        square.style.border = "1px solid black";
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;

    }
};

//function that adds hovering effect
function hoverEffect(){
 const squares = document.querySelectorAll('.square');
 squares.forEach(square =>{
    square.addEventListener('mouseover', ()=>{
        square.classList.toggle("red");
    });
 });
}


createGrid(16);
hoverEffect();