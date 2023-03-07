import "../pages/index.css";
import * as constants from "../utils/constants.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { FormValidator } from "../scripts/FormValidator.js";
import { validationConfig } from "../utils/constants.js";
import { Card } from "../scripts/Card.js";
import { Section } from "../scripts/Section.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { UserInfo } from "../scripts/UserInfo.js";
const newUserInfo = new UserInfo({
  nameSelector: "#modal-name-input",
  jobSelector: "#modal-description-input",
});
function handleProfileFormSubmit(inputValues) {
  newUserInfo.setUserInfo(inputValues.name, inputValues.description);
  profilePopup.close();
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
  profileFormValidation.toggleButtonState();
  profilePopup.open();
  const { name, description } = newUserInfo.getUserInfo();
  constants.profileName.value = name;
  constants.jobInput.value = description;
});
profilePopup.setEventListeners();
