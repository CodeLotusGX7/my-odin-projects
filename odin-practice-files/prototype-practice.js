// write a contructor for making book objects
/*
1. title
2. author
3. number of pages
4. reading status
5. info function - reports the books info like:
theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"


*/
console.log("hello world");

function MyBook(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.bookInfo = function(){
        return this.title + " by: " + this.author;
    }
}

const fallOfReach = new MyBook("Fall of Reach","Eric Nylund", "416", "Finished");
console.log(fallOfReach);
console.log(fallOfReach.bookInfo());

