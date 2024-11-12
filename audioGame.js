// audioGame.js
/***
document.getElementById('backgroundMusic').play();

const button = document.getElementById('myButton');
const clickSound = document.getElementById('buttonClickSound');
clickSound.preload = 'auto';

button.addEventListener('click', () => {
  clickSound.play();
});
**/

// Get audio elements
const backgroundMusic = document.getElementById('backgroundMusic');
const buttonClickSound = document.getElementById('buttonClickSound');

// Set initial volume levels
backgroundMusic.volume = 0.2;  // 20% volume
buttonClickSound.volume = 0.5;  // 50% volume

// Preload sound effects
buttonClickSound.preload = 'auto';

// Play background music automatically
document.addEventListener('DOMContentLoaded', () => {
  backgroundMusic.play();
});

// Button click event handler
document.getElementById('myButton').addEventListener('click', () => {
  buttonClickSound.play();
});

// Mute/unmute background music
document.getElementById('muteButton').addEventListener('click', () => {
  backgroundMusic.muted = !backgroundMusic.muted;
});

// Error handling for audio playback
backgroundMusic.addEventListener('error', () => {
  console.error('Background music playback error');
});

buttonClickSound.addEventListener('error', () => {
  console.error('Sound effect playback error');
});
