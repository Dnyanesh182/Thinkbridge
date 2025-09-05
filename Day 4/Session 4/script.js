let counter = 0;

const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

function updateCounter() {
  counterDisplay.textContent = counter;
  console.log("Counter updated:", counter);
}

incrementBtn.addEventListener("click", () => {
  counter++;
  updateCounter(); // breakpoint can be set here
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  updateCounter(); // breakpoint can be set here
});

// Extra function for debugging call stack
function doubleIncrement() {
  counter++;
  updateCounter();
}

incrementBtn.addEventListener("dblclick", () => {
  doubleIncrement(); // you can step into this function
});
