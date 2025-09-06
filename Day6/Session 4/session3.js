const cards = document.querySelectorAll(".card");
const desc = document.getElementById("keyword-description");
const preview = document.getElementById("preview");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    desc.textContent = `${card.querySelector("h3").textContent}: ${
      card.dataset.desc
    }`;
    preview.style.cssText = card.dataset.style;
  });
});
