    
const chooseBots = document.querySelectorAll('.bot-option');

if (chooseBots.length > 0) {
    chooseBots.forEach(
        (button) => {
        button.addEventListener('click', () => {
                window.location.href = "botplayer.html"; 
          }); 
    });

}

