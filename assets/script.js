let notebtn = document.getElementById("newnotebtn");
let deletebtn = document.getElementById("deletebtn");
let notesContainer = document.getElementById("notes");
let i = 0

notebtn.addEventListener("click", function () {
    i++
    let inputBox = document.createElement("div");
    inputBox.classList.add("inputbox"); // مهم عشان الحذف
    inputBox.innerHTML = `
        <h3>Example ${i}</h3>
        <p class="main__notes__note" contenteditable="true"></p>
    `;
    notesContainer.appendChild(inputBox);
});

deletebtn.addEventListener("click", function () {
    document.querySelectorAll(".inputbox").forEach(function (box) {
        box.remove();
    });
});
