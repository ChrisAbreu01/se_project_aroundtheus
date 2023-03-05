import * as selector from "./Constants.js";
export class Popup {
  constructor(popUpSelector) {
    this._popUpElement = document.querySelector(popUpSelector);
  }
  open() {
    this._popUpElement.classList.add("modal_box_opened");
    document.addEventListener("keydown", (evt) => {this._handleEscClose(evt)});
  }
  close() {
    this._popUpElement.classList.remove("modal_box_opened");
    document.removeEventListener("keydown", (evt) => {this._handleEscClose(evt)});
  }
  _handleEscClose(evt) {
    if (evt.keyCode == 27) {
      const openedModal = document.querySelector("modal_box_opened");
      this.close(openedModal);
    } else if (evt.target === evt.currentTarget) {
      const modalOpen = document.querySelector(".modal_open");
    this.close(modalOpen);
     };
  }
  setEventListeners() {
    this._popUpElement
      .querySelector(".modal__close-button")
      .addEventListener("click", () => {
        this.close(this._popUpElement);
      });
    this._popUpElement.addEventListener("click", (evt) => {this._handleEscClose(evt)});
  }
}
