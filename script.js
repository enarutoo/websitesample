
document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector(".start-button");
    const adminLink = document.querySelector(".admin-link");
    const welcomeCard = document.querySelector(".welcome-card");

    startButton.addEventListener("click", () => {
        startButton.disabled = true;
        startButton.innerHTML = "Let's Go! 💕";

        welcomeCard.classList.add("leaving");

        setTimeout(() => {
            window.location.href = "beautiful.html";
        }, 400);
    });

    adminLink.addEventListener("click", (event) => {
        event.preventDefault();

        const confirmAdmin = confirm(
            "Are you sure you want to access the Admin Login? 🔐"
        );

        if (confirmAdmin) {
            window.location.href = "admin.html";
        }
    });

    const heartsContainer = document.querySelector(".floating-hearts");

    if (heartsContainer) {
        const hearts = ["♡", "💕", "💗", "♥"];

        for (let i = 0; i < 12; i++) {
            const heart = document.createElement("span");

            heart.textContent = hearts[
                Math.floor(Math.random() * hearts.length)
            ];

            heart.style.left = Math.random() * 100 + "%";
            heart.style.top = Math.random() * 100 + "%";
            heart.style.animationDelay = Math.random() * 5 + "s";
            heart.style.fontSize = (15 + Math.random() * 25) + "px";

            heartsContainer.appendChild(heart);
        }
    }
});
