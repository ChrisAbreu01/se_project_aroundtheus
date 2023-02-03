import {closeModal} from "./index.js"
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
  _handlePreviewPicture(data) {
    const imageElement = document.querySelector(".modal__image");
    const imageCaption = document.querySelector(".modal__caption");
    imageElement.src = data.link;
    imageElement.alt = data.name;
    imageCaption.textContent = data.name;
    openModal(imageView);
  }


  _generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".elements__img").src = this._image;
    this._element.querySelector(".elements__title").textContent = this._text;
    const _cardFormElement = document.querySelector("#card__modal-form");
    const cardLikeButton = this._element.querySelector(
      ".elements__like-button"
    );
    const _deleteCardButton = this._element.querySelector(
      ".element__delete-button"
    );
    const _cardImage = this._element.querySelector(".elements__img");

    _cardImage.addEventListener("click", () => {
      console.log(this);
      this._handlePreviewPicture(data);
    });
    cardLikeButton.addEventListener("click", () =>
      cardLikeButton.classList.toggle("elements__like-button-black")
    );
    _deleteCardButton.addEventListener("click", function () {
      const listItem = _deleteCardButton.closest(".elements__element");
      listItem.remove();
    });
    _cardFormElement.addEventListener("submit", this.handleCardFormSubmit);
    return this._element;
  }
  
  handleCardFormSubmit(evt) {
    evt.preventDefault();
    const _cardTitleInput = document.querySelector("#modal-input-title");
    const _cardUrlInput = document.querySelector("#modal-input-url");
    const _buttonElement = evt.target.querySelector(".form__submit");
    const _cardFormElement = document.querySelector("#card__modal-form");
    const _cardsContainer = document.querySelector(".elements");
    const _cardModalDisplay = document.querySelector("#card");
    const newCard = new Card(_cardTitleInput.value, _cardUrlInput.value);
    const _newCardElement = newCard._generateCard();
    _cardsContainer.prepend(_newCardElement);
    _cardFormElement.reset();
    closeModal(_cardModalDisplay);
    toggleButtonState(
      [_cardTitleInput, _cardUrlInput],
      _buttonElement,
      validationConfig.inactiveButtonClass
    );
  }
}
initialCards.forEach((cardData) => {
  const cardsContainer = document.querySelector(".elements");
  const card = new Card(cardData.name, cardData.link);
  const cardElement = card._generateCard();
  cardsContainer.prepend(cardElement);
});
