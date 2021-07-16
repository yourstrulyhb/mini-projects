const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue", "grey", "forestgreen"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
   // get random num between 0-3
   const randomNumber = getRandomNumber(); 

   // Update display
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = " " + colors[randomNumber];
   color.style.color = colors[randomNumber];
});

// Generate random number
function getRandomNumber() {

   let colorsLen = colors.length;
   let rand = Math.random() * colorsLen;

   return Math.floor(rand);
}