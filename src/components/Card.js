export class Card {
  constructor(
    text,
    image,
    likeCount,
    cardSelector,
    { handleCardClick, addLikeCount, handleDelete }
  ) {
    this._image = image;
    this._likeCount = likeCount;
    this._addLikeCount = addLikeCount;
    this._text = text;
    this._handleCardClick = handleCardClick;
    this._handleDelete = handleDelete;
    this._cardSelector = cardSelector;
  }
  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });
    this._cardLikeButton.addEventListener("click", () => {
      console.log(this._likeCount);
      this.toggleLikeButton();
      this.setLikeCount();
    });
    this._deleteCardButton.addEventListener("click", () => {
      this._handleDelete();
    });
  }
  setLikeCount() {
    this._cardLikeCount = this._element.querySelector(".elements__like-count");
    this._addLikeCount(this._likeCount);
    this._cardLikeCount.textContent = this._likeCount.length;
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
