export class Card {
  constructor(text, image, cardSelector, { handleCardClick }) {
    this._image = image;
    this._text = text;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }
  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });
    this._cardLikeButton.addEventListener("click", () => {
      this.toggleLikeButton();
    });
    this._deleteCardButton.addEventListener("click", () => {
      this.removeCard();
    });
  }
  toggleLikeButton() {
    this._cardLikeButton.classList.toggle("elements__like-button-black");
  }
  generateCard() {
    this._element = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true);
    this._cardImage = this._element.querySelector(".elements__img");
    this._cardLikeButton = this._element.querySelector(
      ".elements__like-button"
    );
    this._deleteCardButton = this._element.querySelector(
      ".element__delete-button"
    );
    this._element.querySelector(".elements__title").textContent = this._text;
    this._cardImage.src = this._image;
    this._cardImage.alt = this._text;
    this._setEventListeners();
    return this._element;
  }
  removeCard() {
    this._element.remove();
    this._element = null;
  }
}
