const topterminal = document.getElementById("top-terminal");
const bottomterminal = document.getElementById("bottom-terminal");
const inputFrame = document.getElementById("input_frame");

const flipScreenCount = 15;

const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ-'

function TopTerminal(count) {
    for (let i = 0; i < count; i++) {
        let TerminalImg = document.createElement("div");
        TerminalImg.className = "topterminal_img";
        topterminal.appendChild(TerminalImg);
    }
}

function BottomTerminal(count) {
    for (let i = 0; i < count; i++) {
        let TerminalImg = document.createElement("div");
        TerminalImg.className = "bottomterminal_img";
        bottomterminal.appendChild(TerminalImg);
    }
}

function handleInput(terminalClass, displayFunction) {
    addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            let inputFrameValue = inputFrame.value;
            if (inputFrameValue) {
                let signArr = inputFrameValue.split('');
                let getTerminalImg = document.getElementsByClassName(terminalClass);
                for (let i = 0; i < flipScreenCount; i++) {
                    if (signArr[i] !== undefined && /^[A-Za-zА-Яа-яЁё-]$/.test(signArr[i])) {
                        displayFunction(getTerminalImg[i], signArr[i]);
                    } else {
                        getTerminalImg[i].innerHTML = "";
                    }
                }
            }
        }
    });
}

function displayTopLetter(divElement, targetLetter) {
    const svgFiles = ['/assets/1-.svg', '/assets/2-.svg', '/assets/3-.svg', '/assets/4-.svg', '/assets/5-.svg', '/assets/6-.svg', '/assets/7-.svg', 
        '/assets/8-.svg', '/assets/9-.svg', '/assets/10-.svg', '/assets/11-.svg', '/assets/12-.svg', '/assets/13-.svg', '/assets/14-.svg', 
        '/assets/15-.svg', '/assets/16-.svg', '/assets/17-.svg', '/assets/18-.svg', '/assets/19-.svg', '/assets/20-.svg', '/assets/21-.svg', 
        '/assets/22-.svg', '/assets/23-.svg', '/assets/24-.svg', '/assets/25-.svg', '/assets/26-.svg', '/assets/27-.svg', '/assets/28-.svg', 
        '/assets/29-.svg', '/assets/30-.svg', '/assets/31-.svg', '/assets/32-.svg', '/assets/33-.svg'];

    let index = 0;
    const interval = setInterval(() => {
        divElement.innerHTML = `<img class = "term-svg" src="${svgFiles[index % svgFiles.length]}"/>`;
        alphabetLetter = alphabet[index % alphabet.length]
        index++;


        if (alphabetLetter === targetLetter.toUpperCase()) {
            clearInterval(interval)
        }
    }, 100);
}

function displayBottomLetter(divElement, targetLetter) {
    const svgFiles = ['/assets/1_.svg', '/assets/2_.svg', '/assets/3_.svg', '/assets/4_.svg', '/assets/5_.svg', '/assets/6_.svg', '/assets/7_.svg', 
        '/assets/8_.svg', '/assets/9_.svg', '/assets/10_.svg', '/assets/11_.svg', '/assets/12_.svg', '/assets/13_.svg', '/assets/14_.svg', 
        '/assets/15_.svg', '/assets/16_.svg', '/assets/17_.svg', '/assets/18_.svg', '/assets/19_.svg', '/assets/20_.svg', '/assets/21_.svg', 
        '/assets/22_.svg', '/assets/23_.svg', '/assets/24_.svg', '/assets/25_.svg', '/assets/26_.svg', '/assets/27_.svg', '/assets/28_.svg', 
        '/assets/29_.svg', '/assets/30_.svg', '/assets/31_.svg', '/assets/32_.svg', '/assets/33_.svg'];
    
    let index = 0;
    const interval = setInterval(() => {
        divElement.innerHTML = `<img class = "term-svg" src="${svgFiles[index % svgFiles.length]}"/>`;
        alphabetLetter = alphabet[index % alphabet.length]
        index++;


        if (alphabetLetter === targetLetter.toUpperCase()) {
            clearInterval(interval)
        }
    }, 100);
}

    TopTerminal(flipScreenCount);
    BottomTerminal(flipScreenCount);
    handleInput("topterminal_img", displayTopLetter);
    handleInput("bottomterminal_img", displayBottomLetter);