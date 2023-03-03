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
    this.popUpForm.addEventListener("submit", this._handleFormSubmit);
    this._popUpElement
      .querySelector(".modal__close-button")
      .addEventListener("click", () => {
        this.close(this._popUpElement);
      });
  }
  _getInputValues() {
    const inputValues = {};
    const inputValueList = this._popUpElement.querySelectorAll("modal__input");
    inputValueList.forEach((input) => {
      inputValues.push(input.value);
    });
    return inputValues;
  }
}
