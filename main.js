// querySelectors
var saveButton = document.querySelector('#save-button');
var grid = document.querySelector('#grid-container');
var titleInput = document.querySelector('#title-input');
var bodyInput = document.querySelector('#body-input');
var searchIdeasInput = document.getElementById('search-bar');
var showStarredButton = document.getElementById('show-starred-ideas-button');

// eventListeners

saveButton.addEventListener('click', function(event) {
    event.preventDefault();
    saveIdeaCard();
    clearInputs();
    displayCards(savedIdeas);
    disableSavedButton();
});

showStarredButton.addEventListener('click', flipButton)

window.addEventListener('load', function() {
    clearInputs();
    disableSavedButton();
    disableFavoritesButton();
})
grid.addEventListener('click',function(event){
    event.preventDefault();
    whatClicked(event);
});

titleInput.addEventListener("keyup", disableSavedButton);
bodyInput.addEventListener("keyup", disableSavedButton);
// searchIdeasInput.addEventListener('keyup', searchIdeas)

//global variables for cards
var savedIdeas = [];
var favoritedIdeas = [];
var searchListIdeas = [];
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
function displayCards(array){
    var starImage;
    grid.innerHTML = '';
    for(var i = 0; i < array.length; i++) {
        starImage = checkStarValue(array[i]);
        grid.innerHTML += `<article id="${array[i].id}" class="idea-card"> 
        <header class="card-header">
            <img class="icons star-icon not-favorite" src="${starImage}" alt="star icon">
            <img class="icons x-icon" src="./assets/delete.svg" alt="x icon">
        </header>
        <div class="input-content">
        <h2 class="idea-card-title">${array[i].title}</h2>
        <p class="idea-card-body">${array[i].body}</p>
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
function disableSavedButton(){
    if (titleInput.value == '' || bodyInput.value == '') {
        saveButton.disabled = true;
        saveButton.classList.add("disabled-button");
    } else {
        saveButton.disabled = false;
        saveButton.classList.remove("disabled-button");
    }
}
function whatClicked(event) {
    if(event.target.classList.contains('x-icon')) {
        deleteIdea(event);
        for(var i = 0; i < favoritedIdeas.length; i++) {
            if(favoritedIdeas[i].id.toString() === event.target.closest('.idea-card').id) {
                removeFavorite();
            }
        }
    } else if (event.target.classList.contains('star-icon')) {
        for(var i = 0; i < savedIdeas.length; i++) {
            console.log("Iteration: ", i)
            if(savedIdeas[i].id.toString() === event.target.closest('.idea-card').id) {
                console.log("saved Ideas: ", savedIdeas[i].id)
                console.log("Event Target: ", event.target.closest('.idea-card').id)
                savedIdeas[i].updateIdea();
            }
        }    
    }
    updateFavoritesArray();
    displayCards(savedIdeas);
}

//add splice from favorites array
function deleteIdea(event){
    for(var i = 0; i < savedIdeas.length; i++) {
        if(savedIdeas[i].id.toString() === event.target.closest('.idea-card').id) {
            savedIdeas.splice(i, 1);
        }
    }
    displayCards(savedIdeas);
}
function removeFavorite() {
    for(var i = 0; i < favoritedIdeas.length; i++){
        if(!favoritedIdeas[i].star) {
            favoritedIdeas.splice(i, 1);
        }
    }
}
//function to display starred ideas
function displayStarred() {
    displayCards(favoritedIdeas);
    //change button innerText here?
}
function updateFavoritesArray() {
    favoritedIdeas = [];
    for(var i = 0; i < savedIdeas.length; i++) {
        if(savedIdeas[i].star) {
            console.log("inside star true conditional (push)")
            favoritedIdeas.push(savedIdeas[i]);
            console.log(favoritedIdeas);
        }
    }
    disableFavoritesButton();
}
function disableFavoritesButton(){
    if(favoritedIdeas.length === 0) {
        showStarredButton.disabled = true;
        showStarredButton.classList.add("disabled-button")
    } else {
        showStarredButton.disabled = false;
        showStarredButton.classList.remove("disabled-button");
    }

}
function flipButton() {
    if(showStarredButton.innerText === 'Show Starred Ideas') {
        showStarredButton.innerText = 'Show All Ideas';
        displayStarred();
    } else {
        showStarredButton.innerText = 'Show Starred Ideas';
        displayCards(savedIdeas);
    }
}



//key up listener
//search function
    //local array search matches = [];
    //for loop saved array
        //if index position includes input value
            //push to local array
    //display(searched)
    











// }
//upon each key up, deploy:
// function searchIdeas() {
    //copy all of saved ideas into search array
//     for (var i = 0; i < savedIdeas.length; i++) {
//         if (!savedIdeas[i].title.includes(searchIdeasInput.value) || !savedIdeas[i].body.includes(searchIdeasInput.value)) {
//             //splice any card that does not include that value of the search bar
//         } 
//     }
    // displayCard(favorites)
// }

//keep savedIdeas array
//make more arrays (one for favorites, one for stuff in the search bar)


/*if (body && body.trim().length > 0){
    body = body.trim().toLowerCase()
}
if (title && title.trim().length > 0){
    title = title.trim().toLowerCase()
} */










//hover to change img for star
//hover to change img for x


// favorite function
    //toggle class for star button (when on: star = true, icon changes to red, in favorites array// when off: star = false, icon changes to white, remove from favorites array)

//search function
    //’key down’ event listener to listen for typing
    //.contains() (add hidden class to cards that don't contain ALL letters (&&)... or concat? to search ordered letters?)

//other possible resources: change event listener
