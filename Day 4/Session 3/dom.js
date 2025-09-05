// ===== 1. Select Elements =====
const form = document.querySelector(".signup-form");
const fullName = document.getElementById("fullname");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const role = document.getElementById("role");

// Create a feedback message element
const message = document.createElement("p");
message.style.marginTop = "10px";
form.appendChild(message);

// ===== 2. Listen to Events =====

// (I) Check password match while typing
confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value) {
    message.textContent = "❌ Passwords do not match";
    message.style.color = "red";
    form.classList.remove("success");
    form.classList.add("error");
  } else {
    message.textContent = "✅ Passwords match";
    message.style.color = "green";
    form.classList.remove("error");
    form.classList.add("success");
  }
});

// (II) Show selected role when user picks from dropdown
role.addEventListener("change", () => {
  if (role.value) {
    message.textContent = `🎯 You selected: ${role.value}`;
    message.style.color = "#333";
    form.classList.remove("error");
  }
});

// (III) Validate form on submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop actual submission

  if (
    password.value === confirmPassword.value &&
    role.value &&
    fullName.value
  ) {
    message.textContent = `🎉 Signup Successful! Welcome, ${fullName.value}`;
    message.style.color = "green";
    form.classList.remove("error");
    form.classList.add("success");
  } else {
    message.textContent = "⚠️ Please complete all fields correctly!";
    message.style.color = "red";
    form.classList.remove("success");
    form.classList.add("error");
  }
});
