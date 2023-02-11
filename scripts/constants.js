import * as selector from "./constants.js";
export const profileModalBoxOpen = document.querySelector(
  ".profile__edit-space"
);
export const profileModalBoxClose = document.querySelector(
  "#modal__close-button"
);
export const cardModalBoxOpen = document.querySelector(".profile__edit-button");
export const cardModalBoxClose = document.querySelector(
  "#modal__card-close-button"
);
export const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};
export const cardModalDisplay = document.querySelector("#card");
export const profileModalDisplay = document.querySelector("#profile__modal");
export const profileFormElement = document.querySelector("#modal__form");
export const nameInput = document.querySelector("#modal-name-input");
export const jobInput = document.querySelector("#modal-description-input");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__subtitle");
export const imageModalClose = document.querySelector("#image__popup-close");
export const imageView = document.querySelector("#modal__image-popup");
export const imageElement = document.querySelector(".modal__image");
export const imageCaption = document.querySelector(".modal__caption");
export const cardTitleInput = document.querySelector("#modal-input-title");
export const cardUrlInput = document.querySelector("#modal-input-url");
export const cardFormElement = document.querySelector("#card__modal-form");
export const cardsContainer = document.querySelector(".elements");
export const profileModalDisplayShade =
  selector.profileModalDisplay.querySelector(".modal__box-shade");
export const cardModalDisplayShade = selector.cardModalDisplay.querySelector(
  "#card__modal-box-shade"
);
export const formList = Array.from(
  document.querySelectorAll(validationConfig.formSelector)
);
