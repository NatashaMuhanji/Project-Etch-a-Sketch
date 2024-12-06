// Select the container and reset button from the DOM
const container = document.getElementById('container');
const resetButton = document.getElementById('reset-button');

// Function to create a grid of 'size x size'
function createGrid(size) {
  // Clear any existing grid
  container.innerHTML = '';

  // Calculate the size of each square
  const squareSize = 960 / size; // Assuming the container is 960px wide and high

  // Create the grid squares
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
}

// Function to add a hover effect to the grid squares
function addHoverEffect() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black'; // Change color on hover
    });
  });
}

// Add event listener to the reset button
resetButton.addEventListener('click', () => {
  let size = prompt('Enter grid size (maximum 100):');
  size = parseInt(size);

  // Validate user input
  if (isNaN(size) || size < 1 || size > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  // Create a new grid with the specified size and reapply hover effects
  createGrid(size);
  addHoverEffect();
});

// Initial setup: Create a default 16x16 grid and add hover effects
createGrid(16);
addHoverEffect();
