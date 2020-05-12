let addBtn = document.getElementById("add");
let delBtn = document.querySelectorAll(".del");
let table = document.getElementById("bookListing");

// This is the class set up, which creates individual books with the title, author and link passed into it.
class Book {
    constructor(title, author, link){
        this.title = title;
        this.author = author;
        this.link = link;
    }
    // Static methods below that are called on the entire Book class.
    static DisplayBooks(){
        let booksArray = [
            {
                title: "Gone",
                author: "MG",
                link: "",
            },
            {
                title: "HP",
                author: "HKR",
                link: "",
            }
        ];
        booksArray.forEach((book) => {Book.AddBookToList(book)});
    }
    static AddBookToList(book){
        let table = document.getElementById("bookListing");

        // To add in the book a row was created with the innerHTML To set up the table data correctly.
        let row = document.createElement("tr");
        
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><a href = "${book.link}" target="_blank" class = "booksLink">${book.link}</a></td>
        <td class = "del">X</td>`;

        table.appendChild(row);
    }
    static RemoveBookFromList(target){
        if (target.innerText === "X" && target.className === "del"){
            target.parentElement.remove();
        }
    }
}

window.addEventListener("load", Book.DisplayBooks);

addBtn.addEventListener("click", function createBook(e){
    e.preventDefault();
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let link = document.getElementById("bookLink").value;

    if (title === "" || author === "" || link === ""){
        // If one of the input forms are empty a red text box will appear for 3 seconds
        const response = document.getElementById("response");
        response.innerText = "Please input the title, author and link.";
        response.className = "red";
        setTimeout(() => {
            response.innerText = "";
            response.className = "";
        }, 3000);
    } else {
        // If the user inputs everything it takes the details and creates a new book and removes the input information so a user can add another book quickly 
        const book = new Book (title, author, link);
        Book.AddBookToList(book);
        document.getElementById("bookTitle").value = "";
        document.getElementById("bookAuthor").value = "";
        document.getElementById("bookLink").value = "";
    }
});

table.addEventListener("click", function removeRow(e){
    let target = e.target;
    Book.RemoveBookFromList(target);
});