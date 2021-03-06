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
    let heartChild = 5;
    let newLi = document.createElement(`li`);
    let newImg = document.createElement(`img`);
    let letterFound = document.getElementsByClassName(`letter`);    
    let chosen = document.getElementsByClassName(`chosen`);
    let phraseLength = 0;
    let amountOfLettersFound = 0;

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
    // `` or ` `
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
     
    phraseLength = letterFound.length;
    } 


function checkLetter(x) {
    let searchSuccess = false;
for (let i = 0; i < letterFound.length; i++) {
if (x === letterFound[i].textContent) {
    letterFound[i].classList.add(`show`);
    amountOfLettersFound += 1;
    searchSuccess = true;
    console.log(x);
} 
} if ( searchSuccess == false) {
    heartChild -= 1;
    let liReplacement = heartPoints.children[heartChild];
    const imgReplacement = document.createElement(`img`);
    imgReplacement.src = "images/lostHeart.png";
    imgReplacement.style.height = `35px`;
    imgReplacement.style.width = `30px`;
    imgReplacement.classList.add(`tries`);
    liReplacement.replaceChild(imgReplacement, liReplacement.children[0]);
    console.log(heartChild);
    missed += 1;
    console.log(missed);
}  
} 

function reStartGame() {
    phraseUl.innerHTML = ``;
    heartPoints.innerHTML = ``;
    for (let i = 0; i < button.length; i++ ) {
        console.log(chosen[i]);
        if (button[i].className === `chosen`) {
        button[i].classList.remove(`chosen`);
        }
        } 
}

function checkWin() {
if (missed > 4) {
    reStartGame();
    if (overlay.className === `start`) {
    overlay.classList.replace(`start`, `lose`);
    }
    if (overlay.className === `win`) {
    overlay.classList.replace(`win`, `lose`);    
    }
    overlay.appendChild(message);
    message.textContent = `Sorry, you lose!`;
    overlay.style.display = `flex`;

} if (amountOfLettersFound === phraseLength) {
    reStartGame();
    if (overlay.className === `start`) {
        overlay.classList.replace(`start`, `win`);
        }
    if (overlay.className === `lose`) {
        overlay.classList.replace(`lose`, `win`);    
        }

    overlay.appendChild(message);
    message.textContent = `You win!!!`;
    overlay.style.display = `flex`;
    console.log(`You Win!!!!`); 
}
}

function addHearts(numberOfHearts) {
for (let i = 0; i < numberOfHearts; i++) {
    let addHearts = document.createElement(`li`);
    let img = document.createElement(`img`);
    heartPoints.appendChild(addHearts);
    addHearts.classList.add(`tries`);
    addHearts.appendChild(img);
    img.src = "images/liveHeart.png";
    img.style.height = `35px`;
    img.style.width = `30px`;
    } 
}

startButton.addEventListener('click', () => {
    missed = 0;
    heartChild = 5;
    phraseLength = 0;
    amountOfLettersFound = 0;
    if (message.textContent === `Sorry, you lose!`) {
    overlay.removeChild(message);
    } else {
    null;
    }
    addPhraseToDisplay(getRandomPhrasesAsArray());
    overlay.style.display = `none`;
    addHearts(5);
});

qwerty.addEventListener(`click`, (e) => {
for (let i = 0; i < button.length; i++ ) {
if (e.target.className === `chosen`) {
    return null;
}
else if (e.target === button[i])    {
    e.target.classList.add(`chosen`);
    checkLetter(button[i].textContent);
    checkWin();
} 
}
});

document.addEventListener(`keyup`, (e) => {
    let letter = e.key;
    for (let i = 0; i < button.length; i++) {
    if (letter === button[i].textContent && button[i].className !== `chosen`) {
    checkLetter(letter);
    button[i].classList.add(`chosen`);
    checkWin();
    } 
    }
});