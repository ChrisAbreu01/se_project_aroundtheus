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

const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active"
}
const profileModalBoxOpen = document.querySelector(".profile__edit-space");
const profileModalBoxClose = document.querySelector(".modal__close-button");
const cardModalBoxOpen = document.querySelector(".profile__edit-button");
const cardModalBoxClose = document.querySelector(".card__modal-close-button");
const cardModalDisplay = document.querySelector(".card");
const profileModalDisplay = document.querySelector(".modal");
const cardsContainer = document.querySelector(".elements");
const cardTemplate = document
  .querySelector("#elements-template")
  .content.querySelector(".elements__element");
const profileFormElement = document.querySelector(".modal__form");
const cardFormElement = document.querySelector(".card__modal-form");
const nameInput = document.querySelector(".modal__input-1");
const jobInput = document.querySelector(".modal__input-2");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__subtitle");
const cardTitleInput = document.querySelector(".card__modal-input-1");
const cardUrlInput = document.querySelector(".card__modal-input-2");
const imageModalClose = document.querySelector(".popup__close");
const imageView = document.querySelector(".popup");

function openModal(modal) {
  modal.classList.add("modal_box_opened");
  modal.classList.add("popup_open");
  document.addEventListener("keydown", closeModalByEscape);
}
function closeModal(modal) {
  modal.classList.remove("modal_box_opened");
  modal.classList.remove("popup_open");
  document.removeEventListener("keydown", closeModalByEscape);
}
function closeModalByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector('.popup_open');
     closeModal(openedModal);
  }
} 
profileModalBoxOpen.addEventListener("click", () => {
  openModal(profileModalDisplay);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
profileModalBoxClose.addEventListener("click", () => {
  closeModal(profileModalDisplay);
});
cardModalBoxOpen.addEventListener("click", () => {
  openModal(cardModalDisplay);
});
cardModalBoxClose.addEventListener("click", () => {
  closeModal(cardModalDisplay);
});
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closeModal(profileModalDisplay);
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".elements__img");
  const cardTitle = cardElement.querySelector(".elements__title");
  const cardLikeButton = cardElement.querySelector(".elements__like-button");
  const deleteCardButton = cardElement.querySelector(".element__delete-button");
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  cardImage.addEventListener("click", () => {
    handlePreviewPicture(data);
  });
  cardLikeButton.addEventListener("click", () =>
    cardLikeButton.classList.toggle("elements__like-button-black")
  );
  deleteCardButton.addEventListener("click", function () {
    const listItem = deleteCardButton.closest(".elements__element");
    listItem.remove();
  });
  return cardElement;
}
const imageElement = document.querySelector(".popup__image");
const imageCaption = document.querySelector(".popup__caption");

function handlePreviewPicture(data) {
  imageElement.src = data.link;
  imageElement.alt = data.name;
  imageCaption.textContent = data.name;
  openModal(imageView);
}
imageModalClose.addEventListener("click", () => {
  closeModal(imageView);
});
function generateCards() {
  initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
    cardsContainer.prepend(cardElement);
  });
}
generateCards();

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const inputList = Array.from(document.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = evt.target.querySelector(".form__submit");
  const cardElement = getCardElement({
    name: cardTitleInput.value,
    link: cardUrlInput.value,
  });
  cardsContainer.prepend(cardElement);
  cardFormElement.reset();
  closeModal(cardModalDisplay);
  toggleButtonState(inputList, buttonElement, validationConfig.inactiveButtonClass);
}

cardFormElement.addEventListener("submit", handleCardFormSubmit);

const profileModalDisplayShade = profileModalDisplay.querySelector(".modal__box-shade");
const cardModalDisplayShade = cardModalDisplay.querySelector(".card__modal-box-shade");

function closeModalOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) { 
    closeModal(imageView);
    closeModal(profileModalDisplay);
    closeModal(cardModalDisplay);
  }
}

profileModalDisplayShade.addEventListener("click",closeModalOnRemoteClick);
cardModalDisplayShade.addEventListener("click", closeModalOnRemoteClick);
imageView.addEventListener("click", closeModalOnRemoteClick);
