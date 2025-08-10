let notebtn = document.getElementById("newnotebtn");
let deletebtn = document.getElementById("deletebtn");
let notesContainer = document.getElementById("notes");
let notesArray = [];

// Load notes from localStorage when opening the page
if (localStorage.getItem("notes")) {
    notesArray = JSON.parse(localStorage.getItem("notes"));
    notesArray.forEach((note, index) => {
        addNoteToDOM(note, index);
    });
}

// Add a new note
notebtn.addEventListener("click", function () {
    let note = { title: "", content: "" };
    notesArray.push(note);
    localStorage.setItem("notes", JSON.stringify(notesArray));
    addNoteToDOM(note, notesArray.length - 1);
});

// Clear all notes
deletebtn.addEventListener("click", function () {
    notesContainer.innerHTML = "";
    notesArray = [];
    localStorage.removeItem("notes");
});

// add a note to the DOM
function addNoteToDOM(note, index) {
    let inputBox = document.createElement("div");
    inputBox.classList.add("inputbox");
    inputBox.innerHTML = `
        <input type="text" placeholder=".....عنوان" value="${note.title}">
        <p class="main__notes__note" contenteditable="true">${note.content}</p>
        <button class="deleteNote">🗑 حذف</button>
    `;

    let p = inputBox.querySelector("p");
    let input = inputBox.querySelector("input");
    let delBtn = inputBox.querySelector(".deleteNote");

    // Text update
    p.addEventListener("input", function () {
        notesArray[index].content = p.innerHTML;
        localStorage.setItem("notes", JSON.stringify(notesArray));
    });

    // Update heading
    input.addEventListener("input", function () {
        notesArray[index].title = input.value;
        localStorage.setItem("notes", JSON.stringify(notesArray));
    });

    // Delete a specific note
    delBtn.addEventListener("click", function () {
        notesArray.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesArray));
        reloadNotes();
    });

    notesContainer.appendChild(inputBox);
}

// Reload notes after delete
function reloadNotes() {
    notesContainer.innerHTML = "";
    notesArray.forEach((note, index) => {
        addNoteToDOM(note, index);
    });
}
