var Idea = require('../ideabox/Idea');

// querySelectors
var saveButton = document.querySelector('#save-button');
var titleInput = document.querySelector('#title-input');
var bodyInput = document.querySelector('#body-input');
var grid = document.querySelector('#grid-container');



// eventListeners
saveButton.addEventListener('click',function(event){
    event.preventDefault();
    saveIdeaCard();
    clearInputs();
    displayNewCard();
})


//global variables for cards
var savedIdeas = [];
var ideaCard;

// functions 


//this function creats a new instence of idea, and pushes it into savedIdeas array
//this function should prevent duplicates
function saveIdeaCard() {
    ideaCard = new Idea(titleInput.value, bodyInput.value)
    if(!savedIdeas.includes(ideaCard)) {
      //don't save duplicates
    }
    else{
        savedIdeas.push(ideaCard)
    }
  }

  //display card

function displayNewCard(){
    grid.innerHTML +=
    
    
    
    `<article id="${ideaCard.id}" class="idea-card"> 
    <header class="card-header">
        <img class="star-icon" src="/star.svg" alt="star icon">
        <img class="x-icon" src="/delete.svg" alt="x icon">
    </header>
    <div class="input-content">
    <h2 class="idea-card-title">${ideaCard.title}</h2>
    <p class="idea-card-body">${ideaCard.body}</p>
    </div>
    <footer>
        <img class="comment-icon" src="/comment.svg" alt="plus icon"><span>Comment</span>
    </footer>
    </article>`
}

function clearInputs(){
    titleInput.value = ''
    bodyInput.value = ''
}

//Iteration 2
// disable save button until both input fields have content
    // css pseudo-class disabled can work like hidden 
        // might have to change cursor property separately
        //[https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled](https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled)
        //[https://css-tricks.com/almanac/selectors/d/disabled/](https://css-tricks.com/almanac/selectors/d/disabled/)

// we will need a function to create a new card that will be pushed into the saved grid
    //interpolate values from new object instance into inner HTML for .idea-card-grid

// Iteration 3

// we will need a delete function that uses event delegation
    // put listener on grid
    // if(event.target.classList.contains(delete button))
        // event.target.closest(.ideaCard).remove()
    // splice object instance from savedIdeas array 



// favorite function
    //toggle class for star button (when on: star = true, icon changes to red, in favorites array// when off: star = false, icon changes to white, remove from favorites array)

//search function
    //’key down’ event listener to listen for typing
    //.contains() (add hidden class to cards that don't contain ALL letters (&&))

//DONE:
    //-save new idea card & clear input fields
    //

