export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
export class Card {
  constructor(text, image, cardSelector, { handleCardClick }) {
    this.image = image;
    this.text = text;
    this._handleCardClick = handleCardClick;
    this.element = document
      .querySelector(cardSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true);
    this.cardImage = this.element.querySelector(".elements__img");
    this.cardFormElement = document.querySelector("#card__modal-form");
    this.cardLikeButton = this.element.querySelector(".elements__like-button");
    this.deleteCardButton = this.element.querySelector(
      ".element__delete-button"
    );
  }
  _setEventListeners() {
    this.cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });
    this.cardLikeButton.addEventListener("click", () =>
      this.cardLikeButton.classList.toggle("elements__like-button-black")
    );
    this.deleteCardButton.addEventListener("click", function () {
      const listItem = this.closest(".elements__element");
      listItem.remove();
    });
  }
  generateCard() {
    this.cardImage.src = this.image;
    this.cardImage.alt = this.text;
    this.element.querySelector(".elements__title").textContent = this.text;
    this._setEventListeners();
    return this.element;
  }
}
