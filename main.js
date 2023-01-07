// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector("#modal")
modal.classList.add("hidden")

let hearts = document.querySelectorAll(".like-glyph")
hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    mimicServerCall()
    .then(resolve => {
          redHeart();
          console.log(resolve);
         
      })
    wrong();
    // .then(success => {console.log(success)})
    
    // heart.classList.toggle("like-glyph-active")
  })
  function redHeart(){
    heart.innerHTML = FULL_HEART;
    heart.classList.add("activated-heart")
    let activatedHeart = document.querySelector(".activated-heart")
    whiteHeart(activatedHeart)
          
  }

  function whiteHeart(activated) {
    activated.addEventListener("click", () => {
      heart.innerHTML = EMPTY_HEART
      heart.classList.remove("activated-heart")
    })
  }

  function wrong(){
    mimicServerCall()
    .catch ((error) => {
        if (modal.classList.contains("hidden")) {
          document.querySelector("#modal-message").innerHTML = error;
          modal.classList.remove("hidden");
          setTimeout(() => {
            modal.classList.add("hidden")
          }, 3000);
        }
    })
  }
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
