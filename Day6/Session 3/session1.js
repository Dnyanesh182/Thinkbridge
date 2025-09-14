// Optional: simple hover alert for cards (future interactivity)
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    alert(
      `${card.querySelector("h3").textContent}: ${
        card.querySelector("p").textContent
      }`
    );
  });
});
