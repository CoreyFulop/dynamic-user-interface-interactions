const menuButtons = Array.from(document.querySelectorAll(".dropdown-button"));
menuButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const menuContent = button.nextElementSibling;
    menuContent.classList.toggle("hidden");
  }),
);
