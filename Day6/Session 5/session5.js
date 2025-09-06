const htmlCards = document.querySelectorAll("#session2 .card");
const htmlDesc = document.getElementById("html-description");

htmlCards.forEach((card) => {
  card.addEventListener("click", () => {
    htmlDesc.textContent = `${card.querySelector("h3").textContent}: ${
      card.dataset.desc
    }`;
  });
});

const cssCards = document.querySelectorAll("#session3 .card");
const cssDesc = document.getElementById("css-description");
const cssPreview = document.getElementById("css-preview");

cssCards.forEach((card) => {
  card.addEventListener("click", () => {
    cssDesc.textContent = `${card.querySelector("h3").textContent}: ${
      card.dataset.desc
    }`;
    cssPreview.style.cssText = card.dataset.style;
  });
});

const jsCards = document.querySelectorAll("#session4 .card");
const jsDesc = document.getElementById("js-description");
const jsButton = document.getElementById("js-demo-button");
let currentDemo = "";

jsCards.forEach((card) => {
  card.addEventListener("click", () => {
    jsDesc.textContent = `${card.querySelector("h3").textContent}: ${
      card.dataset.desc
    }`;
    currentDemo = card.dataset.demo;
  });
});

jsButton.addEventListener("click", () => {
  if (currentDemo) {
    try {
      eval(currentDemo);
    } catch (e) {
      alert("Error in demo: " + e.message);
    }
  } else {
    alert("Select a JS card first!");
  }
});

const form = document.getElementById("contact-form");
const response = document.getElementById("form-response");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  document
    .querySelectorAll(".error-msg")
    .forEach((el) => (el.textContent = ""));
  document
    .querySelectorAll("input, textarea")
    .forEach((el) => el.classList.remove("invalid"));

  let valid = true;

  const name = form.name.value.trim();
  if (name === "" || name.length < 3) {
    showError("name", "Name must be at least 3 characters");
    valid = false;
  }

  const email = form.email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showError("email", "Enter a valid email");
    valid = false;
  }

  const message = form.message.value.trim();
  if (message === "" || message.length < 5) {
    showError("message", "Message must be at least 5 characters");
    valid = false;
  }

  if (valid) {
    response.textContent = `Thank you, ${name}! Your message has been received.`;
    response.style.color = "green";
    form.reset();
  } else {
    response.textContent = "Please fix the errors above.";
    response.style.color = "red";
  }
});

function showError(fieldId, msg) {
  const field = document.getElementById(fieldId);
  field.classList.add("invalid");
  field.nextElementSibling.textContent = msg;
}

form.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("invalid");
    input.nextElementSibling.textContent = "";
    response.textContent = "";
  });
});
