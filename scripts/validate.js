const showInputError = (formElement, inputElement, errorMessage , inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement,inputErrorClass,errorClass ) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};
const isValid = (formElement, inputElement, validationConfig ) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig.inputErrorClass, validationConfig.errorClass );
  } else {
    hideInputError(formElement, inputElement, validationConfig.inputErrorClass, validationConfig.errorClass);
  }
};

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

const setEventListeners = (formElement, validationConfig ) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    validationConfig.submitButtonSelector
  );
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement,validationConfig);
      toggleButtonState(inputList, buttonElement, validationConfig.inactiveButtonClass);
    });
  });
};
const enableValidation = (validation) => {
  const formList = Array.from(
    document.querySelectorAll(validation.formSelector)
  );

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement,validation);
  });
};
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
const toggleButtonState = (inputList, buttonElement,inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true; 
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false; 
  }
};
enableValidation(validationConfig);
