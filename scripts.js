let addBtn = document.getElementById("add");
let delBtn = document.querySelectorAll(".del");
let table = document.getElementById("bookListing");


class Book {
    constructor(title, author, link){
        this.title = title;
        this.author = author;
        this.link = link;
    }
    static DisplayBooks(){
        let booksArray = [
            {
                title: "Gone",
                author: "MG",
                link: "www.google.com",
            },
            {
                title: "HP",
                author: "HKR",
                link: "Wad",
            }
        ];
        booksArray.forEach((book) => {Book.AddBookToList(book)});
    }
    static AddBookToList(book){
        let table = document.getElementById("bookListing");

        let row = document.createElement("tr");
        
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><a href = "${book.link}" target="_blank" class = "booksLink">${book.link}</a></td>
        <td class = "del">X</td>`;

        table.appendChild(row);
    }
    static RemoveBookFromList(e){
        if (e.innerText === "X" && e.className === "del"){
            e.parentElement.remove();
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
        const response = document.getElementById("response");
        response.innerText = "Please input the title, author and link.";
        response.className = "red";
        setTimeout(function (){
            response.innerText = "";
            response.className = "";
        }, 3000);
    } else {
        const book = new Book (title, author, link);
        Book.AddBookToList(book);
        document.getElementById("bookTitle").value = "";
        document.getElementById("bookAuthor").value = "";
        document.getElementById("bookLink").value = "";
    }
});

table.addEventListener("click", function removeRow(e){
    let target = e.target;

    // let parent = target.parentElement

    // target.remove(parent);


    Book.RemoveBookFromList(target);
});

// document.querySelectorAll(".del").addEventListener("click", function removeeee(e){

// })




