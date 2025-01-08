
const thumbsSlider = new Swiper(".thumbsSlider", {
  // Optional parameters
  loop: true,

  speed: 1000,
  // Navigation arrows
  navigation: {
    nextEl: ".nextThumb",
    prevEl: ".prevThumb",
  },
  slidesPerView: "auto",
  spaceBetween: 20,
});

const imgsSlider = new Swiper(".imgsSlider", {
  speed: 1000,
  loop: true,
  thumbs: {
    swiper: thumbsSlider,
  },
});
let openModal = document.querySelector(".openModal"),
  modalContainer = document.querySelector(".modal-Container"),
  closeModal = document.querySelector(".modal-Container .close");
openModal.addEventListener("click", function (e) {
  modalContainer.classList.add("openModal");
}),
  closeModal.addEventListener("click", function (e) {
    modalContainer.classList.remove("openModal");
  });
