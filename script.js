
/* Create magical stars */

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    starsContainer.appendChild(star);
}


/* Section navigation */

function startSurprise() {

    showSection("memories");

}

function showSection(id) {

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* Star Catching Game */

let score = 0;

const gameArea = document.getElementById("gameArea");

const scoreDisplay = document.getElementById("score");

const gameMessage = document.getElementById("gameMessage");

const gameNext = document.getElementById("gameNext");


function createStar() {

    if (score >= 7) return;

    const star = document.createElement("button");

    star.className = "game-star";

    star.textContent = "⭐";

    star.style.left =
        Math.random() * 85 + "%";

    star.style.top =
        Math.random() * 75 + "%";

    star.addEventListener("click", function() {

        score++;

        scoreDisplay.textContent = score;

        star.remove();

        if (score === 7) {

            gameMessage.textContent =
                "Amazing! You collected all 7 magical stars! 🎉";

            gameNext.disabled = false;

        } else {

            gameMessage.textContent =
                "Beautiful! Keep collecting your stars! ✨";

            createStar();

        }

    });

    gameArea.appendChild(star);

}

createStar();


/* Blow birthday candles */

let candlesBlown = false;

function blowCandles() {

    if (candlesBlown) return;

    candlesBlown = true;

    document.getElementById("candles").innerHTML =
        "💨 💨 💨 💨 💨 💨 💨";

    document.getElementById("wishMessage").innerHTML =
        "Your wish is flying to the stars! 💫<br>" +
        "Mom and Dad wish all your dreams come true! ❤️";

    fireworks();

}


/* Fireworks */

function fireworks() {

    const container =
        document.getElementById("fireworks");

    const symbols = ["🎆", "✨", "💖", "🌟", "🎇"];

    for (let i = 0; i < 30; i++) {

        const fire = document.createElement("div");

        fire.className = "firework";

        fire.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        fire.style.left = Math.random() * 95 + "vw";

        fire.style.top = Math.random() * 90 + "vh";

        container.appendChild(fire);

        setTimeout(() => fire.remove(), 2100);

    }

}


/* Final birthday surprise */

function finalSurprise() {

    fireworks();

    document.getElementById("finalMessage").innerHTML =
        "You are our greatest blessing! 💜<br>" +
        "We love you forever and always.<br>" +
        "HAPPY 7TH BIRTHDAY, OUR LITTLE PRINCESS! 🎂✨";

}


/* Start with a fresh star game */

gameArea.innerHTML = "";

createStar();
