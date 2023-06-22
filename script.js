// adding variables to store our data

const userInput = document.querySelector('.field-input');
const userLetterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');

// count letters function
function countLetters(some_data){

const optName = some_data.replaceAll(' ', '')
const price = optName.length * 5


userLetterPreview.textContent = some_data;
userPricePreview.textContent = '$' + price;

  // console.log('optimised>>>>>: ',optName.length * 5);
  // console.log('Raw>>>>: ', some_data.length * 5);

  // console.log('optimised>>>>: ', optName);
  // console.log('Raw>>>>: ', some_data);

}

// countLetters('Jacinta ')
// countLetters('Ruth    ')
// countLetters('Angela  ')
// countLetters('Theresa')




// Event for input
// and the 'h' is my parameter 
userInput.addEventListener('input', function(h){
  console.log(h.target.value);
  countLetters(h.target.value)


})


// using the arrow function



  
//   const countLetters = (some_data) =>{
//     const optName = some_data.replaceAll(' ', '')
// const price = optName.length * 5


// userLetterPreview.textContent = some_data;
// userPricePreview.textContent = '$' + price;

//   }
//   userInput.oninput = (h) =>{
//    countLetters(h.target.value)
//   }



