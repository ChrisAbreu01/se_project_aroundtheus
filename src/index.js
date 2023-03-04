
import * as selector from "../scripts/Constants.js";
import * as modalFunctions from "../scripts/Utils.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { FormValidator } from "../scripts/FormValidator.js";
import { validationConfig } from "../scripts/Constants.js";
import { Card, initialCards } from "../scripts/Card.js";
import { Section } from "../scripts/Section.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { UserInfo } from "../scripts/UserInfo.js";

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const newUserInfo = new UserInfo(selector.nameInput.value, selector.jobInput.value);
  newUserInfo.getUserInfo();
  newUserInfo.setUserInfo();
  selector.profileFormElement.reset();
  profileFormValidation.toggleButtonState();
  newProfilePopup.close();
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const newPopupWithImage= new PopupWithImage ('.modal__image-popup');
  const newCard = new Card(
    selector.cardTitleInput.value,
    selector.cardUrlInput.value,
    selector.cardSelector,
    () => {
      newPopupWithImage.open();
    }
  );

  const newCardElement = newCard.generateCard();
  document.querySelector(selector.cardsContainer).prepend(newCardElement);
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
  },
  selector.cardsContainer
);

cardList.renderItems();

const newCardPopup = new PopupWithForm("#card", handleCardFormSubmit);
selector.cardModalBoxOpen.addEventListener("click", () => {
  newCardPopup.open();
});
newCardPopup.setEventListeners();
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
