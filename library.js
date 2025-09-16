const theLibrary = [];


function Book(title, author, pages, readYet) {
   // Book Constructor
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.readYet = readYet == true ? "read" : "not read";
   this.id = crypto.randomUUID();
   this.info = function(){
            console.log(`${this.title} by ${this.author}, ${this.pages} pages & ${this.read}`)
         }
}

function addBookToLibrary(title, author, pages, readYet){
   // Take params, create a book and store in array
   const bookToAdd = new Book(title, author, pages, readYet);
   theLibrary.push(bookToAdd);
}

addBookToLibrary("Game of Thrones", "George R. Martin", 795, 1)
addBookToLibrary("Lord of the Rings", "J.R.R. Tolkien", 1216, 0)
addBookToLibrary("East of Eden", "John Steinbeck", 640, 0)
addBookToLibrary("Why We Sleep", "Matthew Walker", 368, 1)
addBookToLibrary("Still Life", "Sarah Winman", 448, 1)
console.log(theLibrary)

for (let i = 0; i < theLibrary.length; i++){
   console.log(theLibrary[i], `I am the ${i+1}th book`);
}

// Build function to display a grid of all the book elements within the container

function showBooks() {
   // Clear display before building grid
   const container = document.getElementById("bookshelf");
   if (container.hasChildNodes()){
      container.replaceChildren();
   }
   // Iterate through array, accessing metadata of book
   // If a book exists, read the metadata and call function to display the book
   theLibrary.forEach( book => {
      const bookSlot = document.createElement("div");
      bookSlot.classList.add("aBook")
      
      const title = document.createElement("div");
      title.classList.add("title")
      title.textContent = book.title;

      const author = document.createElement("div");
      author.classList.add("author")
      author.textContent = book.author;

      const pages = document.createElement("div");
      pages.classList.add("pages")
      pages.textContent = book.pages;
      
      bookSlot.appendChild(title);
      bookSlot.appendChild(author);
      bookSlot.appendChild(pages);

      container.appendChild(bookSlot);
   })
      
}

function placeholder() {
   console.log("i am a placeholder!");
}

// Referencing close button
const bookBtn = document.getElementById("addBook");
const modal  = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const newBtn = document.getElementById("new");

bookBtn.addEventListener("click", (event) => {
   modal.showModal()
})

closeBtn.addEventListener("click", (event) => {
   modal.close();
})

newBtn.addEventListener("click", placeholder);

showBooks();

// create listener function to adjust display if sidebar tabs are clicked, i.e. read/unread