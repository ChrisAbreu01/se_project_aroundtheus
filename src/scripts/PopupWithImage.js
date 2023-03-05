import * as selector from "./Constants.js";
import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popUpSelector) {
    super(popUpSelector);
    this.popUpImage = this._popUpElement.querySelector(".modal__image");
    this.popUpCaption = this._popUpElement.querySelector(".modal__caption");
  }
  open(inputValueName, inputValueLink) {
    this.popUpImage.src = inputValueLink;
    this.popUpImage.alt = inputValueName;
    this.popUpCaption.textContent = inputValueName;
    super.setEventListeners();
    super.open();
  }
}
