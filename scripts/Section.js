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
      const newPopupWithImage= new PopupWithImage ('.modal__image-popup');
      const card = new Card(
        cardData.name,
        cardData.link,
        selector.cardSelector,
        newPopupWithImage.handleCardClick
      );
      card._setEventListeners();
      const cardElement = card.generateCard();
      this.addItem(cardElement);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}
