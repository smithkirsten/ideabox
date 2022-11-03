//var Idea = require('../ideabox/Idea');

// querySelectors
var saveButton = document.querySelector('#save-button');
var grid = document.querySelector('#grid-container');
var titleInput = document.querySelector('#title-input');
var bodyInput = document.querySelector('#body-input');


// eventListeners
//event listener for page load that sets save button to disabled?

saveButton.addEventListener('click', function(event) {
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
    console.log("clicked")
    var titleValue = titleInput.value;
    var bodyValue = bodyInput.value;
    console.log(titleValue);
    console.log(bodyValue);

    ideaCard = new Idea(titleValue, bodyValue);
    console.log(ideaCard);

    savedIdeas.push(ideaCard);
    console.log(savedIdeas);
    // create conditional to check for duplicates
    //     if(savedIdeas.includes(ideaCard))
    }

  //display card

function displayNewCard(){

    grid.innerHTML += `<article id="${ideaCard.id}" class="idea-card"> 
    <header class="card-header">
        <img class="icons star-icon" src="./assets/star.svg" alt="star icon">
        <img class="icons x-icon" src="./assets/delete.svg" alt="x icon">
    </header>
    <div class="input-content">
    <h2 class="idea-card-title">${ideaCard.title}</h2>
    <p class="idea-card-body">${ideaCard.body}</p>
    </div>
    <footer class="card-footer">
        <img class="icons comment-icon" src="./assets/comment.svg" alt="plus icon"><span>Comment</span>
    </footer>
    </article>`;
}

function clearInputs(){
    titleInput.value = ''
    bodyInput.value = ''
}

//Iteration 2
//style card

// disable save button until both input fields have content
    // css pseudo-class disabled can work like hidden 
        // might have to change cursor property separately
        //[https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled](https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled)
        //[https://css-tricks.com/almanac/selectors/d/disabled/](https://css-tricks.com/almanac/selectors/d/disabled/)


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
    //.contains() (add hidden class to cards that don't contain ALL letters (&&)... or concat? to search ordered letters?)

//other possible resources: change event listener

//DONE:
    //-save new idea card & clear input fields
    //

