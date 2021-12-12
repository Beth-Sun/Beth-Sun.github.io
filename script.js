function initialize() {
  console.log("Welcome to Beth's Website");
  document
    .querySelectorAll(".close")
    .forEach((button) => button.addEventListener("click", closeContactForm));
  document
    .querySelectorAll(".open-contact")
    .forEach((button) => button.addEventListener("click", openContactForm));
  document
    .querySelectorAll("input[name='options']")
    .forEach((radio) => radio.addEventListener("change", handleHiringChange));
}

function openContactForm() {
  document.querySelector("#contact").classList.remove("hidden");
}

function closeContactForm(event) {
  event.preventDefault();
  document.querySelector("#contact").classList.add("hidden");
}

function handleHiringChange(event) {
  if (event.currentTarget.checked) {
    if (event.currentTarget.value === "Hiring") {
      document.querySelector(".hourlyRate").classList.remove("hidden");
    } else {
      document.querySelector(".hourlyRate").classList.add("hidden");
    }
  }
}

window.addEventListener("load", initialize);
