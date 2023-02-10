import * as selector from "./constants.js";
export function openModal(modal) {
  modal.classList.add("modal_box_opened");
  modal.classList.add("modal_open");
  document.addEventListener("keydown", closeModalByEscape);
}
export function closeModal(modal) {
  modal.classList.remove("modal_box_opened");
  modal.classList.remove("modal_open");
  document.removeEventListener("keydown", closeModalByEscape);
}
export function closeModalByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_open");
    closeModal(openedModal);
  }
}
export function closeModalOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) {
    const modalOpen = document.querySelector(".modal_open");
    closeModal(modalOpen);
  }
}
selector.profileModalBoxOpen.addEventListener("click", () => {
  openModal(selector.profileModalDisplay);
  selector.nameInput.value = selector.profileName.textContent;
  selector.jobInput.value = selector.profileJob.textContent;
});
selector.profileModalBoxClose.addEventListener("click", () => {
  closeModal(selector.profileModalDisplay);
});
selector.cardModalBoxOpen.addEventListener("click", () => {
  openModal(selector.cardModalDisplay);
});
selector.cardModalBoxClose.addEventListener("click", () => {
  closeModal(selector.cardModalDisplay);
});
selector.profileModalDisplayShade.addEventListener(
  "click",
  closeModalOnRemoteClick
);
selector.cardModalDisplayShade.addEventListener(
  "click",
  closeModalOnRemoteClick
);
selector.imageView.addEventListener("click", closeModalOnRemoteClick);
selector.imageModalClose.addEventListener("click", () => {
  closeModal(selector.imageView);
});
