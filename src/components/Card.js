export class Card {
  constructor(
    text,
    image,
    likeCount,
    userId,
    cardOwnerId,
    cardSelector,
    { handleCardClick, deleteLikes, addLikeCount, handleDelete }
  ) {
    this._image = image;
    this._likeCount = likeCount;
    this._addLikeCount = addLikeCount;
    this._deleteLikes = deleteLikes;
    this._handleDelete = handleDelete;
    this._userId = userId;
    this._cardOwnerId = cardOwnerId;
    this._text = text;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }
  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });
    this._cardLikeButton.addEventListener("click", () => {
      if (this.isLiked()) {
        this._deleteLikes();
        this.toggleLikeButton();
      } else {
        this.toggleLikeButton();
        this._addLikeCount();
      }
    });
    this._deleteCardButton.addEventListener("click", () => {
      this._handleDelete();
    });
  }
  setLikeCount(likeCount) {
    this._cardLikeCount = this._element.querySelector(".elements__like-count");
    this._cardLikeCount.textContent = likeCount.length;
  }
  isLiked() {
    return this._likeCount.some((like) => {
      return this._userId === like._id;
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
    this.showDeleteIcon();
    this.setLikeCount(this._likeCount);

    if (this.isLiked() === true) {
      this._cardLikeButton.classList.add("elements__like-button-black");
    } else {
      this._cardLikeButton.classList.remove("elements__like-button-black");
    }

    this._setEventListeners();
    return this._element;
  }
  removeCard() {
    this._element.remove();
    this._element = null;
  }

  showDeleteIcon() {
    if (this._userId === this._cardOwnerId) {
      const deleteButton = this._element.querySelector(
        ".element__delete-button"
      );
      deleteButton.classList.add("element__delete-button-visible");
    }
  }
}
