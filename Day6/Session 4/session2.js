// Show description when a card is clicked
const cards = document.querySelectorAll(".card");
const desc = document.getElementById("keyword-description");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    desc.textContent = `${card.querySelector("h3").textContent}: ${
      card.dataset.desc
    }`;
  });
});
