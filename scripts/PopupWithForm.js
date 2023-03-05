import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(popUpSelector, handleFormSubmit) {
    super(popUpSelector);
    this._popUpSelector = popUpSelector;
    this.popUpForm = this._popUpElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }
  close() {
    this.popUpForm.reset();
    super.close();
  }
  setEventListeners() {
    super.setEventListeners();
    this.popUpForm.addEventListener("submit", (evt) =>{ 
      evt.preventDefault();
      this._getInputValues();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues); 
    });
    this._popUpElement
      .querySelector(".modal__close-button")
      .addEventListener("click", () => {
        this.close(this._popUpElement);
      });
  }
  _getInputValues() {
    const inputValues = {};
    const inputValueList = this.popUpForm.querySelectorAll(".modal__input");
    inputValueList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
}
