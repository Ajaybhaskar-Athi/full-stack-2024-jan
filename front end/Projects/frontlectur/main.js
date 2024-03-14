let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

let para = document.querySelector('.para');
let intervalId;
let timer = 0;
console.log(1);
function startTimer() {
    intervalId = setInterval(() => {
        console.log(2);
        timer++;
        updateTimer();
    }, 1000);
}

function stopTimer() {
    console.log(3);
    clearInterval(intervalId);
}

function resetTimer() {
    clearInterval(intervalId);
    console.log(4);
    timer = 0;
    updateTimer();
}


function updateTimer() {
    console.log(5);
    let hours = Math.floor(timer / 3600);
    let minutes = Math.floor((timer % 3600) / 60);
    let seconds = timer % 60;
    let displayHours = hours < 10 ? '0' + hours : hours;
    let displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    let displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    
    para.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;
}
console.log(6);

btn1.addEventListener('click', startTimer);
btn2.addEventListener('click', stopTimer);
btn3.addEventListener('click', resetTimer);