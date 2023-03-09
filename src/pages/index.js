import "../pages/index.css";
import * as constants from "../utils/constants.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { FormValidator } from "../components/FormValidator.js";
import { validationConfig } from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
const userInfo = new UserInfo({
  nameSelector: "#modal-name-input",
  jobSelector: "#modal-description-input",
});
function handleProfileFormSubmit(inputValues) {
  userInfo.setUserInfo(inputValues.name, inputValues.description);
  profilePopup.close();
  constants.nameInput.placeholder = inputValues.name;
  constants.jobInput.placeholder = inputValues.description;
}

function handleCardFormSubmit(inputValues) {
  const newCard = createCard(inputValues);
  cardsSection.addItem(newCard);
  cardsPopup.close();
}

const profileFormValidation = new FormValidator(
  constants.profileFormElement,
  validationConfig
);

profileFormValidation.enableValidation();
const cardFormValidation = new FormValidator(
  constants.cardFormElement,
  validationConfig
);

cardFormValidation.enableValidation();

const cardsSection = new Section(
  {
    items: constants.initialCards,
    renderer: createCard,
  },
  constants.cardsContainer
);
const newPopupWithImage = new PopupWithImage("#modal__image-popup");
newPopupWithImage.setEventListeners();
cardsSection.renderItems();
function createCard(cardData) {
  const newCard = new Card(
    cardData.name,
    cardData.link,
    constants.cardSelector,
    {
      handleCardClick: () => {
        newPopupWithImage.open(cardData.name, cardData.link);
      },
    }
  );
  const newCardElement = newCard.generateCard();
  return newCardElement;
}

const cardsPopup = new PopupWithForm("#card", handleCardFormSubmit);
cardsPopup.setEventListeners();
constants.cardModalBoxOpen.addEventListener("click", () => {
  cardFormValidation.toggleButtonState();
  cardsPopup.open();
});

const profilePopup = new PopupWithForm(
  "#profile__modal",
  handleProfileFormSubmit
);
constants.profileModalBoxOpen.addEventListener("click", () => {
  profilePopup.open();
  profileFormValidation.toggleButtonState();
});
profilePopup.setEventListeners();
