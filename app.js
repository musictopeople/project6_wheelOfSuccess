const qwerty = document.getElementById(`qwerty`);
const phrase = document.getElementById(`phrase`);
let missed = 0;
const startButton = document.getElementById(`reset`);
let button = document.querySelectorAll(`button`);
const heartPoints = document.querySelector(`ol`);
const overlay = document.getElementById(`overlay`);
const place = document.getElementById(`phrase`);
const phraseUl = document.getElementById(`phraseUl`);
const message = document.createElement(`h3`);

const phrases = [
    `javascript is one hot mess`,
    `i would rather be coding`,
    `you probably forgot a semicolon`,
    `learn another language`,
    `do not quit before the miracle happens`,
    `coding is a lifetime of learning`
]  

function getRandomPhrasesAsArray() {
    const getPhrase = Math.floor(Math.random() * 6);
    const currentPhrase = phrases[getPhrase].split(``);
    return currentPhrase;
}

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        const li = document.createElement(`li`);
            if (arr[i] !== ` `) {
            li.className = `letter`;
            li.textContent = arr[i];
            }    else {
            li.className = `space`;
            li.textContent = arr[i];  
            }
            phraseUl.appendChild(li); 
            console.log(li);
            } 
}

function checkLetter(x) {
    let letterFound = document.getElementsByClassName(`letter`);
    let amountOfLettersFound = 0;
    for (let i = 0; i < letterFound.length; i++) {
    if (x === letterFound[i].textContent) {
    letterFound[i].classList.add(`show`);
    amountOfLettersFound += 1;
    console.log(x);
    }
}
    if (amountOfLettersFound === 0) {
    heartPoints.removeChild(heartPoints.lastElementChild);
    missed += 1;
    console.log(missed);
    }
} 

function checkWin() {
if (missed > 4) {
    let letter = document.getElementsByClassName(`letter`); 
    let space = document.getElementsByClassName(`space`);
    let phraseLength = letter.length + space.length;
    for (let i = 0; i < phraseLength; i++) {
    phraseUl.removeChild(phraseUl.children[i]);
    }
    // ^^ what am I doing wrong here???  ^^ Thanks for any insight you have! : )
    overlay.classList.remove(`start`);
    overlay.classList.add(`lose`);
    overlay.appendChild(message);
    message.textContent = `Sorry, you lose!`;
    overlay.style.display = `block`;
}
}

startButton.addEventListener('click', () => {
    missed = 0;
    if (message.textContent === `Sorry, you lose!`) {
    overlay.removeChild(message);
    } else {
    null;
    }
    addPhraseToDisplay(getRandomPhrasesAsArray());
    overlay.style.display = `none`;
    for (let i = 0; i < 5; i++) {
    let addHearts = document.createElement(`li`);
    let img = document.createElement(`img`);
    heartPoints.appendChild(addHearts);
    addHearts.classList.add(`tries`);
    addHearts.appendChild(img);
    img.src = "images/liveHeart.png";
    img.style.height = `35px`;
    img.style.width = `30px`;
    }
});

qwerty.addEventListener(`click`, (e) => {
for (let i = 0; i < button.length; i++ ) {
if (e.target === button[i])    {
    checkLetter(button[i].textContent);
    checkWin();
} 
}
});

document.addEventListener(`keyup`, (e) => {
let letter = e.key;
    checkLetter(letter);
    checkWin();
});



 