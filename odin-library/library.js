console.log("hello friend");


const myLibrary = [
    "Fall of Reach",
    "Of Mice and Men",
    "Hummingbird",
];

function Book(){
    // add constructor here

}

function addBookToLibrary(){

}

function displayBooks(){
    // loops through array and displays each book on page
    for (let index = 0; index < myLibrary.length; index++) {
        let newIndex = myLibrary[index];
        console.log(newIndex);
        
    }

}
myLibrary.forEach(function(myLibrary) {
    console.log(myLibrary);
}
    )

console.log("array length: " + myLibrary.length);
