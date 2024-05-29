const moreInfoButtons = document.querySelectorAll(".more-info-button");

for (const moreInfoButton of moreInfoButtons) {
  moreInfoButton.addEventListener("click", (event) => {
    const popupSection = event.currentTarget.parentElement.nextElementSibling;
    popupSection.style.display = "block";
    document.body.classList.add("no-scroll");
  });
}

const closePopupButtons = document.querySelectorAll(".close-popup-button");

for (const closePopupButton of closePopupButtons) {
  closePopupButton.addEventListener("click", (event) => {
    const popupSection = event.currentTarget.closest('.popup-section-container');
    popupSection.style.display = "none";
    document.body.classList.remove("no-scroll");
  });
}
