import * as selector from "./Constants.js";
import { Popup } from "./Popup.js";
class PopupWithImage extends Popup{
    open(){
        selector.imageElement.src = this.image;
        selector.imageElement.alt = this.text;
        selector.imageCaption.textContent = this.text;
        super.open(selector.imageView);
    }
}