let initialCards = [{
        name: "Yosemite valley",
        link: src = "./images/yosemity.jpg"
    },
    {
        name: "Lake Louise",
        link: src = "./images/lakelois.jpg"
    },
    {
        name: "Bald Mountains",
        link: src = "./images/baldmountains.jpg"
    },
    {
        name: "Latemar",
        link: src = "./images/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: src = "./images/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: src = "./images/lagodeibraes.jpg"
    }
];

let modalBoxOpen = document.querySelector('.edit_button');
let modalDisplay = document.querySelector(".modal_box")

function Opener() {
    modalDisplay.setAttribute("style", "display:flex");
}
modalBoxOpen.addEventListener("click", Opener);