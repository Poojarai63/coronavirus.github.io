const doorLeft = document.querySelector('.door-left');
const doorRight = document.querySelector('.door-right');
const floorButtonsContainer = document.querySelector('.floor-buttons');
const floorsInput = prompt('Enter the number of floor:');
function generateFloorButtons() {
  floorButtonsContainer.innerHTML = '';
  for (let floor = 1; floor <= floorsInput; floor++) {
    const button = document.createElement('button');
    button.className = 'floor-button';
    button.textContent = floor;
    button.addEventListener('click', () => {
      moveElevator(floor);
    });
    floorButtonsContainer.appendChild(button);
  }
}

generateFloorButtons();

doorLeft.addEventListener('click', () => {
  doorLeft.style.transform = 'translateX(-50%)';
  doorRight.style.transform = 'translateX(50%)';
});

doorRight.addEventListener('click', () => {
  doorLeft.style.transform = 'translateX(0)';
  doorRight.style.transform = 'translateX(0)';
});

function moveElevator(targetFloor) {
  const elevator = document.querySelector('.elevator');
  const floorHeight = 120; 
  const targetPosition = floorHeight * (targetFloor - 1);
  elevator.style.transform = `translateY(-${targetPosition}px)`;
}
