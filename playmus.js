"use strict";
const musicTitleEl = document.getElementById("music_title");
const playerProgressEl = document.getElementById("player_progress");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current_time");
const durationEl = document.getElementById("duration");
const prevBtnEl = document.getElementById("prev");
const playvBtnEl = document.getElementById("play");
const nextvBtnEl = document.getElementById("next");
const songs = [
  {
    path: "music/chistoemax.mp3",
    displayName: "Чистое",
  },
  {
    path: "music/smdihania.mp3",
    displayName: "Сантиметры дыханья",
  },
  {
    path: "music/nezhnost.mp3",
    displayName: "Нежность",
  },
  {
    path: "music/luchsayanoch.mp3",
    displayName: "Лучшая ночь",
  },
  {
    path: "music/koshkamax.mp3",
    displayName: "Кошка",
  },
  {
    path: "music/otpuskau.mp3",
    displayName: "Отпускаю",
  },
  {
    path: "music/zvezdamax.mp3",
    displayName: "Звезда",
  },
  {
    path: "music/naradio.mp3",
    displayName: "На радиоволнах",
  },
  {
    path: "music/lolitamax.mp3",
    displayName: "Лолита",
  },
  {
    path: "music/odinochka.mp3",
    displayName: "Одиночка",
  },
  {
    path: "music/trudnvozr.mp3",
    displayName: "Трудный возраст",
  },
  {
    path: "music/nadvoih.mp3",
    displayName: "На двоих",
  },
  {
    path: "music/zolribkami.mp3",
    displayName: "Золотыми рыбками",
  },
  {
    path: "music/abonent.mp3",
    displayName: "Абонент недоступен",
  },
  {
    path: "music/lubalcv.mp3",
    displayName: "Любовь алого цвета",
  },
  {
    path: "music/rozdkol.mp3",
    displayName: "Колыбельная",
  },
  {
    path: "music/postergirl.mp3",
    displayName: "Poster Girl",
  },
  {
    path: "music/horosho.mp3",
    displayName: "Хорошо",
  },
];
const music = new Audio();
let musicIndex = 0;
let musicIndexl = 0;
let isPlaying = false;
function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}
function playMusic() {
  isPlaying = true;
  playvBtnEl.classList.replace("fa-play", "fa-pause");
  playvBtnEl.setAttribute("title", "pause");
  music.play();
  }
function pauseMusic() {
  isPlaying = false;
  playvBtnEl.classList.replace("fa-pause", "fa-play");
  playvBtnEl.setAttribute("pause", "title");
  music.pause();
}
function loadMusic(songs) {
  music.src = songs.path;
  musicTitleEl.textContent = songs.displayName;
}
function changeMusic(direction) {
  musicIndex = musicIndex + direction + (songs.length % songs.length);
  loadMusic(songs[musicIndex]);
ubrcvet();
let audiolist = document.querySelectorAll( ".audiolist" );
audiolist[musicIndex].style.color = "white";
audiolist[musicIndex].style.background = "green";
playMusic();
}

function ubrcvet() {
let audiolist = document.querySelectorAll(".audiolist");
for( let i = 0; i < audiolist.length; i++){ 
    audiolist[i].style.color = "black";
    audiolist[i].style.background = "white";
}  //  musiclist1.style.color = "red";
}
function setProgressBar(e) {
  const width = playerProgressEl.clientWidth;
  const xValue = e.offsetX;
  music.currentTime = (xValue / width) * music.duration;
}
function updateProgressBar() {
  const { duration, currentTime } = music;
  const ProgressPercent = (currentTime / duration) * 100;
  progressEl.style.width = `${ProgressPercent}%`;
  const formattime = (timeRanges) =>
    String(Math.floor(timeRanges)).padStart(2, "0");
  durationEl.textContent = `${formattime(duration / 60)} : ${formattime(
    duration % 60,
  )}`;
  currentTimeEl.textContent = `${formattime(currentTime / 60)} : ${formattime(
    currentTime % 60,
  )}`;
}
const btnEvents = () => {
  playvBtnEl.addEventListener("click", togglePlay);
  nextvBtnEl.addEventListener("click", () => changeMusic(1));
  prevBtnEl.addEventListener("click", () => changeMusic(-1));
  music.addEventListener("ended", () => changeMusic(1));
  music.addEventListener("timeupdate", updateProgressBar);
  playerProgressEl.addEventListener("click", setProgressBar);
};
document.addEventListener("DOMContentLoaded", btnEvents);
loadMusic(songs[musicIndex]);

