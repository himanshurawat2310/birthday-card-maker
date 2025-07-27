// Messages
const messages = [
    "Happy Birthday Dear Sister 🎂",
    "You are my best friend and support ❤️",
    "Stay Happy Always 😊",
    "Lots of Love From Your Brother 💕"
];

let msgIndex = 0;
const messageEl = document.getElementById("message");

// Show messages one by one
function showNextMessage() {
    if (msgIndex < messages.length) {
        messageEl.textContent = messages[msgIndex];
        msgIndex++;
        setTimeout(showNextMessage, 3000); // 3 sec per message
    }
}
showNextMessage();

// Slideshow
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 4000);

// Hearts Animation
const heartsContainer = document.querySelector('.hearts');
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 500);

// Heart Style
const style = document.createElement('style');
style.textContent = `
.heart {
    position: absolute;
    width: 20px;
    height: 20px;
    background: red;
    transform: rotate(45deg);
    animation: floatUp linear forwards;
}
.heart::before,
.heart::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50%;
}
.heart::before {
    top: -10px;
    left: 0;
}
.heart::after {
    left: 10px;
    top: 0;
}
@keyframes floatUp {
    0% { transform: translateY(0) rotate(45deg); opacity: 1; }
    100% { transform: translateY(-100vh) rotate(45deg); opacity: 0; }
}
`;
document.head.appendChild(style);

// Music Control
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "🔊";
    } else {
        music.pause();
        musicBtn.textContent = "🔈";
    }
});

// Confetti Effect
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
}
setInterval(createConfetti, 200);

const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
.confetti {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0;
    animation: fall linear forwards;
}
@keyframes fall {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
}
`;
document.head.appendChild(confettiStyle);