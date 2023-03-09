const tagBody = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

let isActive = false;
let timerId = null;

buttonStart.addEventListener('click', onButtonStart);
buttonStop.addEventListener('click', onButtonStop)


function onButtonStart() {
    if (isActive){
        return;
    }

   
     
    isActive = true;
    // tagBody.style.backgroundColor = setInterval(getRandomHexColor, 1000); 
    timerId = setInterval(() => {
        tagBody.style.backgroundColor = getRandomHexColor();
    }, 1000);

    return timerId;

}

function onButtonStop (){
     if(!isActive) {
        return;
     }

     isActive = false;
     clearTimeout(timerId);
}

// const timerId = setInterval(getRandomHexColor, 1000)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
