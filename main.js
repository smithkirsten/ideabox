var Idea = require('../ideabox/Idea');

// query selectors

var saveButton = document.querySelector('#save-button');
var titleInput = document.querySelector('#title-input');
var bodyInput = document.querySelector('#body-input');



// eventListners

saveButton.addEventListener('click',function(event){
    event.preventDefault()
    saveIdeaCard()
    clearInputs()
// display poster with innerHTML
})


// array for saved ideas

var savedIdeas = [];
var ideaCard;

// functions 


///this function creats a new instence of idea, and pushes it into savedIdeas array

///// this function should prevent duplicates
function saveIdeaCard() {
    ideaCard = new Idea(titleInput.value, bodyInput.value)
    if(bodyInput.value !== null && bodyInput.value === ""){
        return ' please wright somthing here'
    }
    else if(titleInput.value !== null && titleInput.value === ""){
        return ' please wright somthing here'
    }
    else if(!savedIdeas.includes(ideaCard)) {
      
    }
    else{
        savedIdeas.push(ideaCard)
    }
  }

function saveIdeaCard(){
    ideaCard = new Idea(titleInput.value, bodyInput.value)
    savedIdeas.push(ideaCard)
}

function clearInputs(){
    titleInput.value = ''
    bodyInput.value = ''
}

//Iteration 2
// disable save button until both input fields have content
    // css sudo class disabled can work like hidden 
        // might have to change cursser property sepretly

// we will need a save function to push new options in to the new saved array
// prevent default on save button



    //gather user input instantiate into class 
    //push new object into saved array
    //clear input fields

// we will need a function to create a new card that will be pushed into the saved grid
    //interpolate values from new object instance into inner HTML for .idea-card-grid

// Iteration 3

// we will need a delete function that uses event delegation
    // put listener on grid
    // if(event.target.classList.contains(delete button))
        // event.target.closest(.ideaCard).remove()
    // splice object instance from savedIdeas array 



// faverit function

