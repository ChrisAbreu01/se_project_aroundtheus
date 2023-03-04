import * as selector from "./Constants.js";
export class Popup {
  constructor(popUpSelector) {
    this._popUpElement = document.querySelector(popUpSelector);
  }
  open() {
    this._popUpElement.classList.add("modal_box_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this._popUpElement.classList.remove("modal_box_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      const openedModal = document.querySelector("modal_box_opened");
      closeModal(openedModal);
    }; 
    if (evt.target === evt.currentTarget) {
      const modalOpen = document.querySelector(".modal_open");
      closeModal(modalOpen);
    };
  }
  setEventListeners() {
    this._popUpElement
      .querySelector(".modal__close-button")
      .addEventListener("click", () => {
        this.close(this._popUpElement);
      });

    this._popUpElement.addEventListener("click", ()=>{this._handleEscClose();});
  }
}
