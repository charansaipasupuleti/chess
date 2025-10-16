
const black = '#81b64c';
const white = 'white';

for (let i = 0; i < 64; i++) {
    const square = document.getElementsByClassName('square')[i];
    const row = Math.floor(i / 8);
    const col = i % 8;
    const isDark = (row + col) % 2 !== 0;
    square.style.backgroundColor = isDark ? black : white;
}