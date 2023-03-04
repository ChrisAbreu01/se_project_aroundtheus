import * as selector from "./Constants.js";
import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popUpSelector) {
    super(popUpSelector);
    this.popUpImage = this._popUpElement.querySelector(".modal__image");
    this.popUpCaption = this._popUpElement.querySelector(".modal__caption");
  }
  open() {
    this.popUpImage.src = this.image;
    this.popUpImage.alt = this.text;
    this.popUpCaption.textContent = this.text;
    super.open();
  }
}
