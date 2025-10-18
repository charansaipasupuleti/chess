
const black = '#81b64c';
const white = 'white';

for (let i = 0; i < 64; i++) {
    const square = document.getElementsByClassName('square')[i];
    const row = Math.floor(i / 8);
    const col = i % 8;
    const isDark = (row + col) % 2 !== 0;
    square.style.backgroundColor = isDark ? black : white;
}

const playonlineButton = document.querySelector('.playonline');
if(playonlineButton){
playonlineButton.addEventListener('click',()=>{
    window.location.href="chess.html";
     alert("playing online");
})}

const playBotsButton = document.querySelector('.playbots');
if(playBotsButton){
playBotsButton.addEventListener('click',()=>{
    window.location.href="playingbots.html";
    alert("playing bots");
})}
const getStartedButton = document.querySelector('.getstarted');
if(getStartedButton){
getStartedButton.addEventListener('click',()=>{
    window.location.href="chess.html";
    alert("getting started");
})}