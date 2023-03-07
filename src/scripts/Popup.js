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
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
  _handleOutsideClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  };
  setEventListeners() {
    this._popUpElement
      .querySelector(".modal__close-button")
      .addEventListener("click", () => {
        this.close();
      });
    this._popUpElement.addEventListener("click", this._handleOutsideClick);
  }
}
