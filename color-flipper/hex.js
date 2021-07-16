const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexLen = hex.length; // total number of all possible hex code characters

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const container = document.querySelector('.f')

btn.addEventListener('click', function () {
   
   let hexColor = "#";

   // Add a character to hex color code each iteration
   for (let i = 0; i < 6; i++) {
      hexColor +=  hex[getRandomNumber()]
   }

   // Update HTML display
   document.body.style.backgroundColor = hexColor;
   color.textContent = " " + hexColor;
   color.style.color = hexColor;

   contrastColor = checkContrastYIQ(hexColor);
   container.style.backgroundColor = contrastColor;
   btn.style.backgroundColor = contrastColor;
   btn.style.color = hexColor;
   btn.style.borderColor = contrastColor;
});

// Generate random number
function getRandomNumber() {
   let rand = Math.random() * hexLen;
   
   return Math.floor(rand);
}

// Thanks to the answers from https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area
function checkContrastYIQ(hexClr) {

   hexClr = hexClr.replace("#", "");

   var r = parseInt(hexClr.substr(0, 2), 16);
   var g = parseInt(hexClr.substr(2, 2), 16);
   var b = parseInt(hexClr.substr(4, 2), 16);
   var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

   return (yiq >= 128) ? '#222' : 'hsl(210, 6%, 93%)';
}
