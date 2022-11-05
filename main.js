// querySelectors
var saveButton = document.querySelector('#save-button');
var grid = document.querySelector('#grid-container');
var titleInput = document.querySelector('#title-input');
var bodyInput = document.querySelector('#body-input');
var searchIdeasInput = document.getElementById('search-bar');

// eventListeners

saveButton.addEventListener('click', function(event) {
    event.preventDefault();
    saveIdeaCard();
    clearInputs();
    displayCards();
    disableSavedButton();
});

window.addEventListener('load', function() {
    clearInputs();
    disableSavedButton();
})
grid.addEventListener('click',function(event){
    event.preventDefault();
    whatClicked(event);
});

titleInput.addEventListener("keyup", disableSavedButton);
bodyInput.addEventListener("keyup", disableSavedButton);
searchIdeasInput.addEventListener('keyup', searchIdeas)

//global variables for cards
var savedIdeas = [];
var ideaCard;

// functions 
function saveIdeaCard() {
    var titleValue = titleInput.value;
    var bodyValue = bodyInput.value;
    ideaCard = new Idea(titleValue, bodyValue);
    savedIdeas.push(ideaCard);
    }
function checkStarValue(card) {
    if(card.star){
        return './assets/star-active.svg';
    }
    return './assets/star.svg';
}
function displayCards(){
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
}
function clearInputs(){
    titleInput.value = ''
    bodyInput.value = ''
    searchIdeasInput.value = ''
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
function deleteIdea(event){
    for(var i = 0; i < savedIdeas.length; i++) {
        if(savedIdeas[i].id.toString() === event.target.closest('.idea-card').id) {
            savedIdeas.splice(i, 1);
        }
    }
    displayCards();
}




    function searchIdeas() {
        for (var i = 0; i < savedIdeas.length; i++) {
            if (savedIdeas[i].title.includes(searchIdeasInput.value) || savedIdeas[i].body.includes(searchIdeasInput.value)) {
        }
        }
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
        function disableSavedButton(){
            if (titleInput.value == '' || bodyInput.value == '') {
                saveButton.disabled = true;
                saveButton.classList.add("disabled-button");
            } else {
                saveButton.disabled = false;
                saveButton.classList.remove("disabled-button");
            }
        }


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
