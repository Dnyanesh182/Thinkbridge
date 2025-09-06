const cards = document.querySelectorAll(".card");
const desc = document.getElementById("keyword-description");
const demoButton = document.getElementById("demo-button");
let currentDemo = "";

cards.forEach((card) => {
  card.addEventListener("click", () => {
    desc.textContent = `${card.querySelector("h3").textContent}: ${
      card.dataset.desc
    }`;
    currentDemo = card.dataset.demo;
  });
});

demoButton.addEventListener("click", () => {
  if (currentDemo) {
    try {
      eval(currentDemo);
    } catch (e) {
      alert("Error in demo: " + e.message);
    }
  } else {
    alert("Select a card first to run the demo!");
  }
});
