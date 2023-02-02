

const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};
const profileModalBoxOpen = document.querySelector(".profile__edit-space");
const profileModalBoxClose = document.querySelector("#modal__close-button");
const cardModalBoxOpen = document.querySelector(".profile__edit-button");

const cardModalBoxClose = document.querySelector("#modal__card-close-button");

const cardModalDisplay = document.querySelector("#card");
const profileModalDisplay = document.querySelector("#profile__modal");


const profileFormElement = document.querySelector("#modal__form");
const cardFormElement = document.querySelector("#card__modal-form");
const nameInput = document.querySelector("#modal-name-input");
const jobInput = document.querySelector("#modal-description-input");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__subtitle");
const cardTitleInput = document.querySelector("#modal-input-title");
const cardUrlInput = document.querySelector("#modal-input-url");
const imageModalClose = document.querySelector("#image__popup-close");
const imageView = document.querySelector("#modal__image-popup");

function openModal(modal) {
  modal.classList.add("modal_box_opened");
  modal.classList.add("popup_open");
  document.addEventListener("keydown", closeModalByEscape);
}
function closeModal(modal) {
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
profileModalBoxOpen.addEventListener("click", () => {
  openModal(profileModalDisplay);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
profileModalBoxClose.addEventListener("click", () => {
  closeModal(profileModalDisplay);
});
cardModalBoxOpen.addEventListener("click", () => {
  openModal(cardModalDisplay);
});
cardModalBoxClose.addEventListener("click", () => {
  closeModal(cardModalDisplay);
});
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closeModal(profileModalDisplay);
}


const imageElement = document.querySelector(".modal__image");
const imageCaption = document.querySelector(".modal__caption");


imageModalClose.addEventListener("click", () => {
  closeModal(imageView);
});
//cardFormElement.addEventListener("submit", handleCardFormSubmit);

const profileModalDisplayShade =
  profileModalDisplay.querySelector(".modal__box-shade");
const cardModalDisplayShade = cardModalDisplay.querySelector(
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
imageView.addEventListener("click", closeModalOnRemoteClick);
