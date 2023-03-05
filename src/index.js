import "./styles/index.css";
import * as selector from "../scripts/Constants.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { FormValidator } from "../scripts/FormValidator.js";
import { validationConfig } from "../scripts/Constants.js";
import { Card, initialCards } from "../scripts/Card.js";
import { Section } from "../scripts/Section.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { UserInfo } from "../scripts/UserInfo.js";

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const newUserInfo = new UserInfo(
    selector.nameInput.value,
    selector.jobInput.value
  );
  newUserInfo.getUserInfo();
  newUserInfo.setUserInfo();
  selector.profileFormElement.reset();
  profileFormValidation.toggleButtonState();
  newProfilePopup.close();
}

function handleCardFormSubmit(inputValues) {
  const newCard = createCard(inputValues);
  document.querySelector(selector.cardsContainer).prepend(newCard);
  selector.cardFormElement.reset();
  cardFormValidation.toggleButtonState();
  newCardPopup.close();
}

const profileFormValidation = new FormValidator(
  selector.profileFormElement,
  validationConfig
);
profileFormValidation.toggleButtonState();
profileFormValidation.enableValidation();
const cardFormValidation = new FormValidator(
  selector.cardFormElement,
  validationConfig
);
cardFormValidation.toggleButtonState();
cardFormValidation.enableValidation();

const cardList = new Section(
  {
    items: initialCards,
    renderer: createCard,
  },
  selector.cardsContainer
);

cardList.renderItems();
function createCard(cardData) {
  // const newPopupWithImage = new PopupWithImage(".modal__image-popup");
  const newCard = new Card(
    cardData.name,
    cardData.link,
    selector.cardSelector,
    {
      handleCardClick: () => {
        const newPopupWithImage = new PopupWithImage(".modal__image-popup");
        newPopupWithImage.open(cardData.name, cardData.link);
      },
    }
  );
  newCard._setEventListeners();
  const newCardElement = newCard.generateCard();
  return newCardElement;
}

const newCardPopup = new PopupWithForm("#card", handleCardFormSubmit);
selector.cardModalBoxOpen.addEventListener("click", () => {
  newCardPopup.open();
  newCardPopup.setEventListeners();
});

const newProfilePopup = new PopupWithForm(
  "#profile__modal",
  handleProfileFormSubmit
);
selector.profileModalBoxOpen.addEventListener("click", () => {
  newProfilePopup.open();
  selector.nameInput.value = selector.profileName.textContent;
  selector.jobInput.value = selector.profileJob.textContent;
});
newProfilePopup.setEventListeners();
