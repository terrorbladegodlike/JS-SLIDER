const sliderImage = document.querySelector(".slider-image");
const sliderButtons = document.querySelector(".slider_buttons-container");
const sliderDots = document.querySelector(".slider-dots");

let sliderImagesArray = [
    {
        text: "Rostov-on-Don, Admiral",
        file: "images/parrots0.jpg"
    },
    {
        text: "Sochi Thieves",
        file: "images/parrots1.jpg"
    },
    {
        text: "Rostov-on-Don Patriotic",
        file: "images/parrots2.jpg"
    }
];

let currentImageIndex = 0;

function paintElements() {
    for (let i = 0; i < sliderImagesArray.length; i++) {
        sliderButtons.innerHTML += `<button class="slider-button" id="slider-button${i}">${sliderImagesArray[i].text}</button>`;
        sliderDots.innerHTML += `<img class="dot" id="dot${i}" src="svg/circle-full.svg" alt="dot"></img>`;
    }
}

function addListenersToElements() {
    for (let i = 0; i < sliderImagesArray.length; i++) {
        document.getElementById(`slider-button${i}`).addEventListener('click', () => {
            currentImageIndex = i;
            setImage();
        });

        document.getElementById(`dot${i}`).addEventListener('click', () => {
            currentImageIndex = i;
            setImage();
        });
    }
}

paintElements();
addListenersToElements();
selectButton(0);
selectDot(0);

const leftArrow = document.getElementById("left-arrow-button");
leftArrow.addEventListener('click', () => {
    currentImageIndex--;
    setImage();
});

const rightArrow = document.getElementById("right-arrow-button");
rightArrow.addEventListener('click', () => {
    currentImageIndex++;
    setImage();
});

function setImage() {
    if (currentImageIndex > sliderImagesArray.length - 1)
        currentImageIndex = 0;
    if (currentImageIndex < 0)
        currentImageIndex = sliderImagesArray.length - 1;

    sliderImage.style.backgroundImage = "url(\"" + sliderImagesArray[currentImageIndex]['file'] + "\")";

    reduceButtons();
    selectButton(currentImageIndex);

    reduceDots();
    selectDot(currentImageIndex);
}

function selectButton(index) {
    let circle = sliderButtons.childNodes[index];
    circle.classList.add("slider-image__selected");
}

function reduceButtons() {
    sliderButtons.childNodes.forEach((item) => {
        item.classList.remove("slider-image__selected");
    });
}

function selectDot(index) {
    let circle = sliderDots.childNodes[index];
    circle.style.transform = "scale(1.2)";
    circle.src = "svg/circle-empty.svg";
}

function reduceDots() {
    sliderDots.childNodes.forEach((item) => {
        item.style.transform = "scale(1)";
        item.src = "svg/circle-full.svg";
    });
}
