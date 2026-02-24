const Btn1 = document.getElementById("btn1");
const Btn2 = document.getElementById("btn2");
const buttons = document.getElementById("buttons");
const question = document.getElementById("question")
const result = document.getElementById("result");

function showResult(message) {
    question.style.display = "none";
    buttons.style.display = "none";

    result.innerHTML = `<p>${message}</p>`;
}

function moveNobutton() {
    const x = Math.random() * 300 - 100;
    const y = Math.random() * 300 - 100;

    Btn2.style.transform = `translate(${x}px, ${y}px)`;
}

function moveNobuttonMobile() {
    const x = Math.random() * 300 - 200;
    const y = Math.random() * 300 - 200;

    Btn2.style.transform = `translate(${x}px, ${y}px)`;
}

Btn2.addEventListener("mouseenter", moveNobutton);

Btn2.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNobuttonMobile();
});

Btn2.addEventListener("click", () => {
    showResult("Your Choice!");
});

Btn1.addEventListener("click", () => {
    showResult("Good girl, I knew it😇!");
});