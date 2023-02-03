import * as selector from "./constants.js";

export const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};
export function openModal(modal) {
  modal.classList.add("modal_box_opened");
  modal.classList.add("popup_open");
  document.addEventListener("keydown", closeModalByEscape);
}
export function closeModal(modal) {
  modal.classList.remove("modal_box_opened");
  modal.classList.remove("popup_open");
  document.removeEventListener("keydown", closeModalByEscape);
}
function closeModalByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".popup_open");
    closeModal(openedModal);
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
selector.profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  selector.profileName.textContent = selector.nameInput.value;
  selector.profileJob.textContent = selector.jobInput.value;

  closeModal(selector.profileModalDisplay);
}
selector.imageModalClose.addEventListener("click", () => {
  closeModal(selector.imageView);
});
//

const profileModalDisplayShade =
selector.profileModalDisplay.querySelector(".modal__box-shade");
const cardModalDisplayShade = selector.cardModalDisplay.querySelector(
  "#card__modal-box-shade"
);

function closeModalOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) {
    const openModal = document.querySelector(".popup_open");
    closeModal(openModal);
  }
}

profileModalDisplayShade.addEventListener("click", closeModalOnRemoteClick);
cardModalDisplayShade.addEventListener("click", closeModalOnRemoteClick);
selector.imageView.addEventListener("click", closeModalOnRemoteClick);
