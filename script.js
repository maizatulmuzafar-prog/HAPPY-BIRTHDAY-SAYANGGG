function unlock() {
    let password = document.getElementById("password").value;

    if (password === "Mukhlisah") {
        document.getElementById("lockScreen").style.display = "none";
    } else {
        document.getElementById("error").innerHTML = "Wrong password 💔";
    }
}

// Photo slideshow
let photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg"
];

let index = 0;

setInterval(function () {
    let slide = document.getElementById("slide");

    if (!slide) return;

    index++;
    if (index >= photos.length) {
        index = 0;
    }

    slide.classList.add("fade");

    setTimeout(function () {
        slide.src = photos[index];
        slide.classList.remove("fade");
    }, 1000);

}, 3000);

// Floating hearts
function createHeart() {
    const container = document.querySelector(".hearts");
    if (!container) return;

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💙";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);

// Music button
let music = document.getElementById("music");
let playing = false;

function toggleMusic() {
    if (!music) return;

    if (playing) {
        music.pause();
        document.getElementById("musicBtn").innerHTML = "🎵 Play Music";
    } else {
        music.play();
        document.getElementById("musicBtn").innerHTML = "⏸ Pause Music";
    }

    playing = !playing;
}
