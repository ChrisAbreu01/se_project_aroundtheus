import * as selector from "./Constants.js";
import { Card } from "./Card.js";
import { PopupWithImage } from "./PopupWithImage.js";
export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems() {
    this._initialArray.forEach((cardData) => {
      this.addItem(this._renderer(cardData));
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}
