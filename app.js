const qwerty = document.getElementById(`qwerty`);
const phrase = document.getElementById(`phrase`);
const missed = 0;
const startButton = document.getElementById(`reset`);
let button = document.querySelectorAll(`button`);

const phrases = [
    `javascript is one hot mess`,
    `i would rather be coding`,
    `you probably forgot a semicolon`,
    `learn another language`,
    `do not quit before the miracle happens`,
    `coding is a lifetime of learning`
]  

startButton.addEventListener('click', () => {
    const overlay = document.getElementById(`overlay`);
    overlay.style.display = `none`;
});

function getRandomPhrasesAsArray() {
    const getPhrase = Math.floor(Math.random() * 6);
    const currentPhrase = phrases[getPhrase].split(``);
    return currentPhrase;
}

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        const place = document.getElementById(`phrase`);
        const li = document.createElement(`li`)
            if (arr[i] !== ` `) {
            li.className = `letter`;
            li.textContent = arr[i];
            }    else {
            li.className = `space`;
            li.textContent = arr[i];  
            }
            place.appendChild(li); 
            console.log(li);
            } 
}

function checkLetter(x) {
    let checkLi = document.getElementsByClassName(`letter`);
    for (let i = 0; i < checkLi.length; i++) {
    if (x === checkLi[i].textContent) {
    checkLi[i].className = `show`;
    }
    else {
    null;
    }
}
} 

addPhraseToDisplay(getRandomPhrasesAsArray());

qwerty.addEventListener(`click`, (e) => {
for (let i = 0; i < button.length; i++ ) {
if (e.target === button[i])    {
checkLetter(button[i].textContent);
}
}
});

document.addEventListener(`keyup`, (e) => {
let letter = e.key;
checkLetter(letter);
});



 