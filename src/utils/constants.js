export const profileModalBoxOpen = document.querySelector(
  ".profile__edit-space"
);
export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
export const cardModalBoxOpen = document.querySelector(".profile__edit-button");
export const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};
export const profileFormElement = document.querySelector("#modal__form");
export const nameInput = document.querySelector("#modal-name-input");
export const jobInput = document.querySelector("#modal-description-input");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__subtitle");
export const cardFormElement = document.querySelector("#card__modal-form");
export const cardsContainer = ".elements";
export const cardSelector = "#elements-template";
export const formList = Array.from(
  document.querySelectorAll(validationConfig.formSelector)
);
