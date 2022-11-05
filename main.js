// querySelectors
var saveButton = document.querySelector('#save-button');
var grid = document.querySelector('#grid-container');
var titleInput = document.querySelector('#title-input');
var bodyInput = document.querySelector('#body-input');

// eventListeners

saveButton.addEventListener('click', function(event) {
    event.preventDefault();
    saveIdeaCard();
    clearInputs();
    displayCards();
}) 
grid.addEventListener('click',function(event){
    event.preventDefault();
    whatClicked(event);
});


//global variables for cards
var savedIdeas = [];
var ideaCard;

// functions 

//this function creats a new instence of idea, and pushes it into savedIdeas array
//this function should prevent duplicates
function saveIdeaCard() {
    var titleValue = titleInput.value;
    var bodyValue = bodyInput.value;
    ideaCard = new Idea(titleValue, bodyValue);
    savedIdeas.push(ideaCard);
    //we don't need to prevent doubleclicking here if we disable the button upon saving idea
    }
    //ceased use if global variable to place this in the beginning of the display cards loop instead of passing in a single value to individual cards
function checkStarValue(card) {
    if(card.star){
        return './assets/star-active.svg';
    }
    return './assets/star.svg';
}
function displayCards(){
    //read value of ideaCard and interpolate red star if true and white star if false
    //we moved grid clearing and loop to display cards so it is condensed in 1 function and will always display a reflection of the data model
    var starImage;
    grid.innerHTML = '';
    for(var i = 0; i < savedIdeas.length; i++) {
        starImage = checkStarValue(savedIdeas[i]);
        grid.innerHTML += `<article id="${savedIdeas[i].id}" class="idea-card"> 
        <header class="card-header">
            <img class="icons star-icon not-favorite" src="${starImage}" alt="star icon">
            <img class="icons x-icon" src="./assets/delete.svg" alt="x icon">
        </header>
        <div class="input-content">
        <h2 class="idea-card-title">${savedIdeas[i].title}</h2>
        <p class="idea-card-body">${savedIdeas[i].body}</p>
        </div>
        <footer class="card-footer">
            <img class="icons comment-icon" src="./assets/comment.svg" alt="plus icon"><span>Comment</span>
        </footer>
        </article>`;
    }
    //!!!!!!!!!hey put the disable button function here! that way it wont save a repeat!!!!!!!!!!!!!!!!!!
}
function clearInputs(){
    titleInput.value = ''
    bodyInput.value = ''
}
function whatClicked(event) {
    if(event.target.classList.contains('x-icon')) {
        deleteIdea(event);
    } else if (event.target.classList.contains('star-icon')) {
        for(var i = 0; i < savedIdeas.length; i++) {
            if(savedIdeas[i].id.toString() === event.target.closest('.idea-card').id) {
                savedIdeas[i].updateIdea();
            }
        }
        displayCards();
    }
}
//function that reads value of star and interpolates image src based on that value
//remove way of deleting single card from dom. instead, update data model and then redisplay cards accordingly
function deleteIdea(event){
    for(var i = 0; i < savedIdeas.length; i++) {
        if(savedIdeas[i].id.toString() === event.target.closest('.idea-card').id) {
            savedIdeas.splice(i, 1);
        }
    }
    displayCards();
}
























//hover to change img for star
//hover to change img for x

//when star clicked
    //event.target.someParentSomethingIdea.updateIdea
        //this.star = true;
         //img toggles to red
            //if event.target


//Iteration 2
//style card

// disable save button until both input fields have content
    //css pseudo-class disabled can work like hidden 
    //listen for key down in either field. Fires: if both .values === true; THEN remove disabled
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
