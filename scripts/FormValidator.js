import { validationConfig } from "./constants.js";
export class FormValidator {
  constructor(formElement, inputSelector) {
    this.formElement = formElement;
    this.inputSelector = inputSelector;
  }
  _showInputError = (
    formElement,
    inputElement,
    inputErrorClass,
    errorClass
  ) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
  };

  _hideInputError = (
    formElement,
    inputElement,
    inputErrorClass,
    errorClass
  ) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
  };

  _toggleInputError = (formElement, inputElement) => {
    this.formElement = formElement;
    this.inputElement = inputElement;
    if (!inputElement.validity.valid) {
      this._showInputError(
        this.formElement,
        this.inputElement,
        validationConfig.inputErrorClass,
        validationConfig.errorClass
      );
    } else {
      this._hideInputError(
        this.formElement,
        this.inputElement,
        validationConfig.inputErrorClass,
        validationConfig.errorClass
      );
    }
  };
  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  _toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };
  setEventListeners = (formElement, inputSelector) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(
      validationConfig.submitButtonSelector
    );
    this._toggleButtonState(
      inputList,
      buttonElement,
      validationConfig.inactiveButtonClass
    );
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._toggleInputError(formElement, inputElement);
        this._toggleButtonState(
          inputList,
          buttonElement,
          validationConfig.inactiveButtonClass
        );
      });
    });
  };
  enableValidation = (inputSelector, formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    const newValidation = new FormValidator(formElement, inputSelector);
    newValidation.setEventListeners(formElement, inputSelector);
  };
}
