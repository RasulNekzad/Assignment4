
const header = document.getElementById("text");
document.getElementById("first").addEventListener("click", (e) => {
    document.getElementById("first").textContent = "I'm right!";
    document.getElementById("second").textContent = "";
});

document.getElementById("second").addEventListener("click", (e) => {
    document.getElementById("second").textContent = "No I'm right!";
    document.getElementById("first").textContent = "";
});
