let initialCards = [{
        name: "Yosemite valley",
        link: "./images/yosemity.jpg"
    },
    {
        name: "Lake Louise",
        link: "./images/lakelois.jpg"
    },
    {
        name: "Bald Mountains",
        link: "./images/baldmountains.jpg"
    },
    {
        name: "Latemar",
        link: "./images/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: "./images/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "./images/lagodeibraes.jpg"
    }
];

const profileModalBoxOpen = document.querySelector('.profile__edit-space');
const profileModalBoxClose = document.querySelector('.modal_close-button');
const cardModalBoxOpen = document.querySelector(".profile__edit-button");
const cardModalBoxClose = document.querySelector('.card__modal-close-button');
const cardModalDisplay = document.querySelector(".card__modal-box");
const profileModalDisplay = document.querySelector(".modal_box");
const cardsContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector("#elements-template").content.querySelector('.elements__element');
const profileFormElement = document.querySelector(".modal_form");
const cardFormElement = document.querySelector(".card__modal-form");
const nameInput = document.querySelector(".modal_input-1");
const jobInput = document.querySelector(".modal_input-2");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__subtitle");
const cardTitleInput = document.querySelector(".card__modal-input-1");
const cardUrlInput = document.querySelector(".card__modal-input-2");
const imageModalClose = document.querySelector(".popup__close");
const imageView = document.querySelector(".popup");

function openProfileModal() {
    profileModalDisplay.classList.add("modal_box_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

}

function closeProfileModal() {
    profileModalDisplay.classList.remove("modal_box_opened");
}
function openCardModal() {
    cardModalDisplay.classList.add("card__modal-box-opened");

}

function closeCardModal() {
    cardModalDisplay.classList.remove("card__modal-box-opened");
}
profileModalBoxOpen.addEventListener("click", openProfileModal);
profileModalBoxClose.addEventListener("click", closeProfileModal);
cardModalBoxOpen.addEventListener("click", openCardModal);
cardModalBoxClose.addEventListener("click", closeCardModal);



function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = (nameInput.value);
    profileJob.textContent = (jobInput.value);

    closeProfileModal()
}


profileFormElement.addEventListener('submit',handleProfileFormSubmit );
function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector(".elements__img");
    const cardTitle = cardElement.querySelector(".elements__title");
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;
    cardImage.addEventListener('click', () => {
        handlePreviewPicture(data);
    })

    return cardElement;
}
const imageElement = document.querySelector(".popup__image");
const imageCaption = document.querySelector(".popup__caption");

function handlePreviewPicture(data) {
    imageElement.src = data.link;
    imageElement.alt = data.name;
    imageCaption.textContent = data.name;
    openModal();
}
function openModal () {
    imageView.classList.add("popup_is-opened");
    
}
function closeModal (){
    imageView.classList.remove("popup_is-opened");
}
imageModalClose.addEventListener("click", closeModal);
function generateCards (){
    initialCards.forEach(cardData => {
        const cardElement = getCardElement(cardData);
        cardsContainer.prepend(cardElement);
        
    })
}
generateCards ();

function addEventToCards (data){
    const cardLikeButtom = document.querySelectorAll(".elements__like-buttom");    
    cardLikeButtom.forEach(data =>{
        data.addEventListener("click",() => data.classList.toggle("elements__like-buttom-black"));
    })    
}
addEventToCards ();
function handleCardFormSubmit(evt) {
    evt.preventDefault();

    initialCards.unshift({name:cardTitleInput.value , link:cardUrlInput.value});
    const cardElement = getCardElement(initialCards[0]);
    cardsContainer.prepend(cardElement);
    const newCardLikeButtom = document.querySelector(".elements__like-buttom");
    newCardLikeButtom.addEventListener("click",() => newCardLikeButtom.classList.toggle("elements__like-buttom-black"));
    deleteCardHandler();
    closeCardModal();
}
function deleteCardHandler(){
const deleteCard = document.querySelectorAll(".element__delete-buttom");
deleteCard.forEach(data => {
    data.addEventListener("click", function() {
        const listItem = data.closest(".elements__element");
        listItem.remove();
    });
})
}
deleteCardHandler();

cardFormElement.addEventListener('submit',handleCardFormSubmit );

