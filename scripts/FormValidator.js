export class FormValidator {
    constructor(formElement, settings) {
        this.formElement = formElement;
        this.inputSelector = settings.inputSelector;
        this.inactiveButtonClass = settings.inactiveButtonClass;
        this.inputErrorClass = settings.inputErrorClass;
        this.errorClass = settings.errorClass;
        this.submitButtonSelector = settings.submitButtonSelector;
        this.inputList = Array.from(
            this.formElement.querySelectorAll(this.inputSelector)
        );
        this.buttonElement = this.formElement.querySelector(
            this.submitButtonSelector
        );
    }
    _showInputError = (inputElement) => {
        const errorElement = this.formElement.querySelector(
            `.${inputElement.id}-error`
        );
        inputElement.classList.add(this.inputErrorClass);
        errorElement.classList.add(this.errorClass);
    };

    _hideInputError = (inputElement) => {
        const errorElement = this.formElement.querySelector(
            `.${inputElement.id}-error`
        );
        inputElement.classList.remove(this.inputErrorClass);
        errorElement.classList.remove(this.errorClass);
    };

    _toggleInputError = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    };
    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };
    _toggleButtonState = () => {
        if (this._hasInvalidInput(this.inputList)) {
            this.buttonElement.classList.add(this.inactiveButtonClass);
            this.buttonElement.disabled = true;
        } else {
            this.buttonElement.classList.remove(this.inactiveButtonClass);
            this.buttonElement.disabled = false;
        }
    };
    setEventListeners = () => {
        this._toggleButtonState();
        this.inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._toggleInputError(inputElement);
                this._toggleButtonState(inputElement);
            });
        });
    };
    enableValidation = () => {
        this.formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this.setEventListeners();
    };
}