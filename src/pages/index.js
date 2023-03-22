import "../pages/index.css";
import * as constants from "../utils/constants.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { FormValidator } from "../components/FormValidator.js";
import { validationConfig } from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api";
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "a7b74888-7cb6-4394-a239-a2104670092a",
    "Content-Type": "application/json",
  },
});

let cardsSection;
let userInfo;
let userId;

const initialCards = api.getInitialCards().then((data) => {
  cardsSection = new Section(
    {
      items: data,
      renderer: createCard,
    },
    constants.cardsContainer
  );

  cardsSection.renderItems();
});
api.fetchProfile().then((data) => {
  console.log(data);
  userId = data._id;
  userInfo = new UserInfo({
    nameSelector: ".profile__name",
    jobSelector: ".profile__subtitle",
  });
  userInfo.setUserInfo(data.name, data.about);
});
function handleProfileFormSubmit(inputValues) {
  api.editProfile(inputValues.name, inputValues.description);
  userInfo.setUserInfo(inputValues.name, inputValues.description);
  profilePopup.close();
}

function handleCardFormSubmit(inputValues) {
  api.addCard(inputValues.name, inputValues.link);
  const newCard = createCard(inputValues);
  cardsSection.addItem(newCard);
  cardsPopup.close();
}
// function handleDeleteCardSubmit() {
//   newCard.removeCard();
// }

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

const newPopupWithImage = new PopupWithImage("#modal__image-popup");
newPopupWithImage.setEventListeners();
const deletePopUp = new PopupWithForm("#modal__delete-card");
deletePopUp.setEventListeners();
function createCard(cardData) {
  const newCard = new Card(
    cardData.name,
    cardData.link,
    cardData.likes,
    constants.cardSelector,
    {
      handleCardClick: () => {
        newPopupWithImage.open(cardData.name, cardData.link);
      },
      addLikeCount: () => {
        api.addLike(cardData._id);
      },
      handleDelete: () => {
        deletePopUp.open();
        console.log(cardData);
        deletePopUp.setSubmitAction(() => {
          api.deleteCard(cardData._id).then((res) => {
            if (res.ok) {
              newCard.removeCard();
            }
          });
        });
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
  const currentUserInfo = userInfo.getUserInfo();
  constants.nameInput.value = currentUserInfo.name;
  constants.jobInput.value = currentUserInfo.description;
  profilePopup.open();
});
profilePopup.setEventListeners();
