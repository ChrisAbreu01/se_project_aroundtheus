export const profileModalBoxOpen = document.querySelector(
  ".profile__edit-space"
);
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
