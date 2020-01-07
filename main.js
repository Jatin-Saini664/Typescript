// const TypeWriter = function(txtElement, words, wait = 3000) {
//   //constructor function typewriter takes in three function txtElement the span data words attribute which has an array of the free words we put // last the wait time the amount of time it waits after typing(before it starts deleting).
//   this.txtElement = txtElement; // we can assign properties to constructor function using this keyword
//   this.words = words;
//   this.txt = ''; //txt property is responsible for typing each letter
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10); // second parameter is base //it is base 10 number
//   this.type();
//   this.isDeleting = false;
// };

// // Type Method
// TypeWriter.prototype.type = function() {
//   // Current index of words
//   const current = this.wordIndex % this.words.length;
//   // Get full text of current word
//   const fullText = this.words[current];
//   console.log(fullText);

//   // Check if deleting
//   if (this.isDeleting) {
//     //Remove char
//     this.txt = fullText.substring(0, this.txt.length - 1);
//   } else {
//     // Add a char
//     this.txt = fullText.substring(0, this.txt.length + 1);
//   }

//   //Insert txt into element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   // Initial Type speed
//   let typeSpeed = 400;

//   if (this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   // If word is complete
//   if (!this.isDeleting && this.txt === fullText) {
//     // Make a pause at the end
//     typeSpeed = this.wait;

//     // Set delete to true
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     // Move to the next word
//     this.wordIndex++;
//     // Pause before start typing
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// };

// // Init on Dom  Load
// document.addEventListener('DOMContentLoaded', init);

// // Init App
// function init() {
//   const txtElement = document.querySelector('.txt-type');
//   const words = JSON.parse(txtElement.getAttribute('data-words'));
//   const wait = txtElement.getAttribute('data-wait');
//   // Init the typewriter
//   new TypeWriter(txtElement, words, wait);
// }

// Another Method
// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of words
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullText = this.words[current];
    console.log(fullText);

    // Check if deleting
    if (this.isDeleting) {
      //Remove char
      this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
      // Add a char
      this.txt = fullText.substring(0, this.txt.length + 1);
    }

    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type speed
    let typeSpeed = 400;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullText) {
      // Make a pause at the end
      typeSpeed = this.wait;

      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to the next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init on Dom  Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init the typewriter
  new TypeWriter(txtElement, words, wait);
}
