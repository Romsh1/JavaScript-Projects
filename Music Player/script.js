// Romika Chaudhary
// C0921918
// March 10, 12 2024

const audio = document.querySelector("audio");

const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

playButton.addEventListener("click", () => {
    audio.play();
});

pauseButton.addEventListener("click", () => {
    audio.pause();
});