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
let cardInfoUpdated;
let userInfo;
let userId;

Promise.all([api.fetchProfile(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    cardInfoUpdated = cards;
    userInfo = new UserInfo({
      nameSelector: ".profile__name",
      jobSelector: ".profile__subtitle",
    });
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.updateUserAvatar(userData.avatar);

    cardsSection = new Section(
      {
        items: cards,
        renderer: createCard,
      },
      constants.cardsContainer
    );

    cardsSection.renderItems();
    // set all the data
  })
  .catch((err) => {
    return Promise.reject(`Error ${err.status}`);
  });

function handleProfileFormSubmit(inputValues) {
  constants.modalEditProfileSubmit.textContent = "Saving...";
  api.editProfile(inputValues.name, inputValues.description).then((data) => {
    console.log(data);
    userInfo.setUserInfo(data.name, data.about);
    profilePopup.close();
    constants.modalEditProfileSubmit.textContent = "Save";
  });
}

function handleCardFormSubmit(inputValues) {
  constants.modalCardSubmit.textContent = "Saving...";
  api.addCard(inputValues.name, inputValues.link).then((data) => {
    const newCard = createCard(data);
    cardsSection.addItem(newCard);
    cardsPopup.close();
    constants.modalCardSubmit.textContent = "Save";
  });
}

function handleAvatarUpdate(inputvalues) {
  constants.modalEditAvatarSubmit.textContent = "Saving...";
  api.updateProfilePicture(inputvalues.link).then((data) => {
    console.log(data);
    userInfo.updateUserAvatar(data.avatar);
    editProfilePopUp.close();
    constants.modalEditAvatarSubmit.textContent = "Save";
  });
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
const editAvatarValidator = new FormValidator(
  constants.profileEditForm,
  validationConfig
);
editAvatarValidator.enableValidation();

const newPopupWithImage = new PopupWithImage("#modal__image-popup");
newPopupWithImage.setEventListeners();

const deletePopUp = new PopupWithForm("#modal__delete-card");
deletePopUp.setEventListeners();

const editProfilePopUp = new PopupWithForm(
  "#modal__edit-avatar",
  handleAvatarUpdate
);
editProfilePopUp.setEventListeners();

function createCard(cardData) {
  const newCard = new Card(
    cardData.name,
    cardData.link,
    cardData.likes,
    userId,
    cardData.owner._id,
    constants.cardSelector,
    {
      handleCardClick: () => {
        newPopupWithImage.open(cardData.name, cardData.link);
      },
      deleteLikes: () => {
        api.removeLike(cardData._id).then((res) => {
          newCard.setLikeCount(res.likes);
        });
      },
      addLikeCount: () => {
        api.addLike(cardData._id).then((res) => {
          newCard.setLikeCount(res.likes);
        });
      },
      handleDelete: () => {
        deletePopUp.open();
        deletePopUp.setSubmitAction(() => {
          api.deleteCard(cardData._id).then((res) => {
            if (res.ok) {
              newCard.removeCard();
              deletePopUp.close();
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
constants.profileEdit.addEventListener("click", () => {
  constants.modalEditAvatarSubmit.textContent = "Save";
  editProfilePopUp.open();
});
constants.profileModalBoxOpen.addEventListener("click", () => {
  profileFormValidation.toggleButtonState();
  const currentUserInfo = userInfo.getUserInfo();
  constants.nameInput.value = currentUserInfo.name;
  constants.jobInput.value = currentUserInfo.description;
  profilePopup.open();
});
profilePopup.setEventListeners();
