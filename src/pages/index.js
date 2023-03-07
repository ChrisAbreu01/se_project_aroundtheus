import "../pages/index.css";
import * as constants from "../utils/constants.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { FormValidator } from "../scripts/FormValidator.js";
import { validationConfig } from "../utils/constants.js";
import { Card, initialCards } from "../scripts/Card.js";
import { Section } from "../scripts/Section.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { UserInfo } from "../scripts/UserInfo.js";
const newUserInfo = new UserInfo({
  nameSelector: "#modal-name-input",
  jobSelector: "#modal-description-input",
});
function handleProfileFormSubmit() {
  newUserInfo.setUserInfo(constants.nameInput.value, constants.jobInput.value);
  constants.profileFormElement.reset();
  profileFormValidation.toggleButtonState();
  newProfilePopup.close();
}

function handleCardFormSubmit(inputValues) {
  const newCard = createCard(inputValues);
  newSection.addItem(newCard);
  constants.cardFormElement.reset();
  cardFormValidation.toggleButtonState();
  newCardPopup.close();
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

const newSection = new Section(
  {
    items: initialCards,
    renderer: createCard,
  },
  constants.cardsContainer
);

newSection.renderItems();
function createCard(cardData) {
  const newCard = new Card(
    cardData.name,
    cardData.link,
    constants.cardSelector,
    {
      handleCardClick: () => {
        const newPopupWithImage = new PopupWithImage("#modal__image-popup");
        newPopupWithImage.open(cardData.name, cardData.link);
      },
    }
  );
  const newCardElement = newCard.generateCard();
  return newCardElement;
}

const newCardPopup = new PopupWithForm("#card", handleCardFormSubmit);
constants.cardModalBoxOpen.addEventListener("click", () => {
  cardFormValidation.toggleButtonState();
  newCardPopup.open();
  newCardPopup.setEventListeners();
});

const newProfilePopup = new PopupWithForm(
  "#profile__modal",
  handleProfileFormSubmit
);
constants.profileModalBoxOpen.addEventListener("click", () => {
  profileFormValidation.toggleButtonState();
  newProfilePopup.open();
  const userInfo = new UserInfo({
    nameSelector: "#modal-name-input",
    jobSelector: "#modal-description-input",
  });
  const { name, description } = userInfo.getUserInfo();
  constants.profileName.value = name;
  constants.jobInput.value = description;

  userInfo.setUserInfo(
    constants.profileName.value,
    constants.jobInput.value.value
  );
});
newProfilePopup.setEventListeners();
