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
  _generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".elements__img").src = this._image;
    this._element.querySelector(".elements__title").textContent = this._text;
    //const cardLikeButton = _cardElement.querySelector(".elements__like-button");
    //const deleteCardButton = _cardElement.querySelector(".element__delete-button");
    //const _cardImage = _cardElement.querySelector(".elements__img");
    //const cardTitle = _cardElement.querySelector(".elements__title");
    //_cardImage.src = this._image;
    //_cardImage.alt = this._text;
    //cardTitle.textContent = this._text

    // _cardImage.addEventListener("click", () => {
    //  handlePreviewPicture(data);
    //});
    //cardLikeButton.addEventListener("click", () =>
    //cardLikeButton.classList.toggle("elements__like-button-black")
    //);
    //deleteCardButton.addEventListener("click", function () {
    //const listItem = deleteCardButton.closest(".elements__element");
    //listItem.remove();
    //});
    return this._element;
  }

  //handlePreviewPicture(data) {
  //  imageElement.src = data.link;
  // imageElement.alt = data.name;
  //imageCaption.textContent = data.name;
  //openModal(imageView);
  // }

  //handleCardFormSubmit(evt) {
  //  evt.preventDefault();
  //  const buttonElement = evt.target.querySelector(".form__submit");
  //  const _cardElement = _generateCard({
  //   name: cardTitleInput.value,
  //   link: cardUrlInput.value,
  //  });
  //   cardsContainer.prepend(_cardElement);
  //   cardFormElement.reset();
  // closeModal(cardModalDisplay);
  // toggleButtonState(
  //  [cardTitleInput, cardUrlInput],
  //  buttonElement,
  //  validationConfig.inactiveButtonClass
  // );
  // }
}
initialCards.forEach((cardData) => {
  const cardsContainer = document.querySelector(".elements");
  const card = new Card(cardData.name, cardData.link);
  const cardElement = card._generateCard();
  cardsContainer.prepend(cardElement);
});
