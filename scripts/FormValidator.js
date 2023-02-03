import { validationConfig } from "./index.js";
class Validation {
    constructor (formElement, inputSelector){
        this.formElement = formElement; 
        this.inputSelector = inputSelector;

    }
  showInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
  };

  hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
  };

  toggleInputError = (formElement, inputElement) => {
    this.formElement = formElement;
    this.inputElement = inputElement;
    if (!inputElement.validity.valid) {
      this.showInputError(
        this.formElement,
        this.inputElement,
        validationConfig.inputErrorClass,
        validationConfig.errorClass
      );
    } else {
      this.hideInputError(
        this.formElement,
        this.inputElement,
        validationConfig.inputErrorClass,
        validationConfig.errorClass
      );
    }
  };
  hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (this.hasInvalidInput(inputList)) {
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
    this.toggleButtonState(
      inputList,
      buttonElement,
      validationConfig.inactiveButtonClass
    );
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.toggleInputError(formElement, inputElement);
        this.toggleButtonState(
          inputList,
          buttonElement,
          validationConfig.inactiveButtonClass
        );
      });
    });
  };
  
  
}


const enableValidation = (formSelector, inputSelector) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    const newValidation = new Validation(formElement, inputSelector);
    newValidation.setEventListeners(formElement, inputSelector);
  });
};

enableValidation(validationConfig.formSelector, validationConfig.inputSelector);
