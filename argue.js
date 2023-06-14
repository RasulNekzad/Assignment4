
const header = document.getElementById("text");
document.getElementById("first").addEventListener("click", (e) => {
    header.textContent = "I'm right!"
});

document.getElementById("second").addEventListener("click", (e) => {
    header.textContent = "No I'm right!"
});
