const envelope = document.querySelector(".envelope");
const letter = document.getElementById("letter");

function openLetter() {

    envelope.style.transform = "scale(0.8) rotate(-10deg)";
    envelope.style.opacity = "0";

    setTimeout(() => {

        envelope.style.display = "none";

        letter.style.display = "block";

        letter.classList.add("show");

    }, 500);

}

function nextPage() {

    window.location.href = "game.html";

}