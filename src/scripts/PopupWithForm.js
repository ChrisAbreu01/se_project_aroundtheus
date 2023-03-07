import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(popUpSelector, handleFormSubmit) {
    super(popUpSelector);
    this._popUpForm = this._popUpElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }
  close() {
    this._popUpForm.reset();
    super.close();
  }
  setEventListeners() {
    super.setEventListeners();
    this._popUpForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
    });
  }
  _getInputValues() {
    const inputValues = {};
    const inputValueList = this._popUpForm.querySelectorAll(".modal__input");
    inputValueList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
}
