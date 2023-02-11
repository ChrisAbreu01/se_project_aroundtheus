import { closeModal, openModal } from "./utils.js";
import { FormValidator } from "./FormValidator.js";
import * as selector from "./constants.js";
import { validationConfig } from "./constants.js";
const initialCards = [
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
class Card {
  constructor(text, image) {
    this._image = image;
    this._text = text;
  }

  _getTemplate() {
    const _cardElement = document
      .querySelector("#elements-template")
      .content.querySelector(".elements__element")
      .cloneNode(true);
    return _cardElement;
  }
  _handlePreviewPicture(link, name) {
    selector.imageElement.src = link;
    selector.imageElement.alt = name;
    selector.imageCaption.textContent = name;
    openModal(selector.imageView);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".elements__img").src = this._image;
    this._element.querySelector(".elements__title").textContent = this._text;
    const cardFormElement = document.querySelector("#card__modal-form");
    const cardLikeButton = this._element.querySelector(
      ".elements__like-button"
    );
    const deleteCardButton = this._element.querySelector(
      ".element__delete-button"
    );
    const cardImage = this._element.querySelector(".elements__img");

    cardImage.addEventListener("click", () => {
      this._handlePreviewPicture(this._image, this._text);
    });
    cardLikeButton.addEventListener("click", () =>
      cardLikeButton.classList.toggle("elements__like-button-black")
    );
    deleteCardButton.addEventListener("click", function () {
      const listItem = deleteCardButton.closest(".elements__element");
      listItem.remove();
    });
    cardFormElement.addEventListener("submit", this.handleCardFormSubmit);
    return this._element;
  }

  handleCardFormSubmit(evt) {
    evt.preventDefault();
    const _buttonElement = evt.target.querySelector(".form__submit");
    const newCard = new Card(
      selector.cardTitleInput.value,
      selector.cardUrlInput.value
    );
    const newValidation = new FormValidator();
    const _newCardElement = newCard.generateCard();
    selector._cardsContainer.prepend(_newCardElement);
    selector._cardFormElement.reset();
    closeModal(selector.cardModalDisplay);
    newValidation._toggleButtonState(
      [selector.cardTitleInput, selector.cardUrlInput],
      _buttonElement,
      validationConfig.inactiveButtonClass
    );
  }
}
initialCards.forEach((cardData) => {
  const card = new Card(cardData.name, cardData.link);
  const cardElement = card.generateCard();
  selector.cardsContainer.prepend(cardElement);
});
