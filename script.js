/* ⏳ Birthday Countdown Timer (26 July 00:00:00 Target) */
function updateBirthdayCountdown() {
  const now = new Date();
  let currentYear = now.getFullYear();
  let targetDate = new Date(`July 26, ${currentYear} 00:00:00`);

  if (now > targetDate && now.getMonth() !== 6) {
    targetDate = new Date(`July 26, ${currentYear + 1} 00:00:00`);
  }

  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("birthdayCountdownScreen").style.display = "none";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / 1000 / 60) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  document.getElementById("cd-days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("cd-hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("cd-mins").innerText = mins < 10 ? "0" + mins : mins;
  document.getElementById("cd-secs").innerText = secs < 10 ? "0" + secs : secs;
}

const countdownTimerInterval = setInterval(updateBirthdayCountdown, 1000);
updateBirthdayCountdown();

/* 🔐 Tester Bypass Function with Secret Password 1168 */
function bypassCountdown() {
  const bypassCode = prompt("Enter Secret Tester Code to Bypass Timer 🔐:");
  if (bypassCode === "1168") {
    document.getElementById("birthdayCountdownScreen").style.display = "none";
  } else if (bypassCode !== null) {
    alert("Incorrect Bypass Code! ❌");
  }
}

/* 🖼️ Dynamic Independent Random Floating Photos System (21 Photos Pool in JPG) */
const photoPool = [
  { src: "images/punit1.jpg", text: "Together Forever 💕" },
  { src: "images/punit2.jpg", text: "Sweet Smiles 😍" },
  { src: "images/punit3.jpg", text: "Cute Moments 💖" },
  { src: "images/punit4.jpg", text: "Soulmates 💍" },
  { src: "images/punit5.jpg", text: "Pyar Ki Mithaas 🍯" },
  { src: "images/punit6.jpg", text: "Hamesha Sathe ♾️" },
  { src: "images/chandni1.jpg", text: "Queen Chandni 👑" },
  { src: "images/chandni2.jpg", text: "Pretty Smile 😊" },
  { src: "images/chandni3.jpg", text: "My World 🌍" },
  { src: "images/chandni4.jpg", text: "Angel Heart 💖" },
  { src: "images/chandni5.jpg", text: "Heartbeat 💓" },
  { src: "images/chandni6.jpg", text: "Cute Queen 👸" },
  { src: "images/chandni7.jpg", text: "Sweetheart 🌷" },
  { src: "images/chandni8.jpg", text: "Pure Love 💕" },
  { src: "images/chandni9.jpg", text: "My Life ✨" },
  { src: "images/chandni10.jpg", text: "Forever Mine 💍" },
  { src: "images/chandni11.jpg", text: "Lovely Eyes 👀" },
  { src: "images/chandni12.jpg", text: "My Universe 🌌" },
  { src: "images/chandni13.jpg", text: "Princess 🌸" },
  { src: "images/chandni14.jpg", text: "Dream Girl 💭" },
  { src: "images/chandni15.jpg", text: "Always Smile 😊" }
];

let photoPoolIndex = 0;

function getRandomTime(minSec, maxSec) {
  return (Math.floor(Math.random() * (maxSec - minSec + 1)) + minSec) * 1000;
}

function respawnSideFrame(frameId, imgId, captionId, side) {
  const frame = document.getElementById(frameId);
  if (!frame) return;

  frame.style.opacity = "0";

  setTimeout(() => {
    const photo = photoPool[photoPoolIndex];
    photoPoolIndex = (photoPoolIndex + 1) % photoPool.length;

    document.getElementById(imgId).src = photo.src;
    document.getElementById(captionId).innerText = photo.text;

    const randomTop = Math.floor(Math.random() * 55) + 5;
    const randomRotate = Math.floor(Math.random() * 30) - 15;

    frame.style.top = randomTop + "vh";
    
    if (side === "left") {
      const randomLeft = Math.floor(Math.random() * 8) + 2;
      frame.style.left = randomLeft + "vw";
      frame.style.right = "auto";
    } else {
      const randomRight = Math.floor(Math.random() * 8) + 2;
      frame.style.right = randomRight + "vw";
      frame.style.left = "auto";
    }

    frame.style.transform = `rotate(${randomRotate}deg) scale(${0.9 + Math.random() * 0.2})`;
    frame.style.opacity = "1";
  }, 1000);
}

function loopLeftFrame() {
  respawnSideFrame("bgFrameLeft", "bgImgLeft", "bgCaptionLeft", "left");
  const nextDelay = getRandomTime(5, 10);
  setTimeout(loopLeftFrame, nextDelay);
}

function loopRightFrame() {
  respawnSideFrame("bgFrameRight", "bgImgRight", "bgCaptionRight", "right");
  const nextDelay = getRandomTime(5, 10);
  setTimeout(loopRightFrame, nextDelay);
}

function startDynamicPhotoLoops() {
  loopLeftFrame();
  setTimeout(loopRightFrame, 3000);
}

/* 🎵 Audios and Playlist */
const birthdaySong = document.getElementById("birthdaySong");
const bgMusic = document.getElementById("bgMusic");
const clapSound = document.getElementById("clapSound");
const kissSound = document.getElementById("kissSound");

const playlist = [
  "images/song1.mp3", "images/song2.mp3", "images/song3.mp3",
  "images/song4.mp3", "images/song5.mp3", "images/song6.mp3", "images/song7.mp3"
];
let currentSong = 0;

function toggleCandlelightMode() { 
  document.body.classList.toggle("candlelight-mode"); 
}

function hugTeddy() {
  const banner = document.getElementById("teddyBanner");
  banner.style.display = "block";
  triggerLoveBurst("🧸");
  kissSound.play().catch(()=>{});
  setTimeout(() => { banner.style.display = "none"; }, 3500);
}

function triggerLoveBurst(symbol) {
  kissSound.play().catch(()=>{});
  for(let i = 0; i < 15; i++) {
    let emoji = document.createElement("div");
    emoji.className = "flying-emoji";
    emoji.innerText = symbol;
    emoji.style.left = (Math.random() * 80 + 10) + "vw";
    emoji.style.bottom = "10vh";
    emoji.style.animationDuration = (Math.random() * 1.5 + 1.5) + "s";
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 2000);
  }
}

/* 🪙 Scratch Card Canvas Logic */
function initScratchCard() {
  const canvas = document.getElementById("scratchCanvas");
  if(!canvas) return;
  const ctx = canvas.getContext("2d");
  
  ctx.fillStyle = "#c0c0c0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.font = "bold 14px Poppins";
  ctx.fillStyle = "#555";
  ctx.textAlign = "center";
  ctx.fillText("Scratch Here 🪙", canvas.width / 2, canvas.height / 2);

  let isScratching = false;

  function scratch(e) {
    if (!isScratching) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fill();
  }

  canvas.addEventListener("mousedown", () => isScratching = true);
  canvas.addEventListener("mouseup", () => isScratching = false);
  canvas.addEventListener("mousemove", scratch);

  canvas.addEventListener("touchstart", () => isScratching = true);
  canvas.addEventListener("touchend", () => isScratching = false);
  canvas.addEventListener("touchmove", scratch);
}

/* 🪞 Secret Love Mirror Camera Logic */
function openLoveMirror() {
  const video = document.getElementById("mirrorVideo");
  const placeholder = document.getElementById("mirrorPlaceholder");
  const message = document.getElementById("mirrorMessage");

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
      .then(stream => {
        video.srcObject = stream;
        video.style.display = "block";
        placeholder.style.display = "none";
        message.style.display = "block";
        triggerLoveBurst("💖");
      })
      .catch(() => {
        placeholder.innerText = "👨‍💼";
        message.style.display = "block";
        message.innerText = "Yes, YOU! My Handsome Punit! 💖";
      });
  } else {
    message.style.display = "block";
  }
}

/* 🎯 Catch My Heart Mini-Game Engine */
let catchScore = 0, catchTimeLeft = 15, catchGameInterval, catchSpawner;

function startCatchGame() {
  catchScore = 0; catchTimeLeft = 15;
  document.getElementById("catchScore").innerText = catchScore;
  document.getElementById("catchTimer").innerText = catchTimeLeft;
  document.getElementById("catchGameOverlay").style.display = "block";

  catchGameInterval = setInterval(() => {
    catchTimeLeft--;
    document.getElementById("catchTimer").innerText = catchTimeLeft;
    if (catchTimeLeft <= 0) { endCatchGame(false); }
  }, 1000);

  catchSpawner = setInterval(() => { spawnFallingHeart(); }, 450);
}

function spawnFallingHeart() {
  const overlay = document.getElementById("catchGameOverlay");
  const item = document.createElement("div");
  item.className = "falling-item";
  const symbols = ["💖", "🌹", "❤️", "🌸", "✨"];
  item.innerText = symbols[Math.floor(Math.random() * symbols.length)];
  item.style.left = (Math.random() * 85 + 5) + "vw";
  
  item.onclick = function() {
    catchScore++;
    document.getElementById("catchScore").innerText = catchScore;
    kissSound.play().catch(()=>{});
    item.remove();
    if (catchScore >= 10) { endCatchGame(true); }
  };

  overlay.appendChild(item);
  setTimeout(() => item.remove(), 3000);
}

function endCatchGame(won) {
  clearInterval(catchGameInterval); clearInterval(catchSpawner);
  document.getElementById("catchGameOverlay").style.display = "none";
  document.querySelectorAll(".falling-item").forEach(el => el.remove());

  if (won) {
    document.getElementById("secretMessageModal").style.display = "flex";
    triggerLoveBurst("💖");
  } else {
    alert("Time's up My Love! Try again to catch 10 hearts! 💖");
  }
}

function closeSecretModal() { 
  document.getElementById("secretMessageModal").style.display = "none"; 
}

function verifyPassword() {
  const inputCode = document.getElementById("secretCode").value;
  if (inputCode === "1144") {
    document.getElementById("passwordScreen").style.display = "none";
    const firstPage = document.querySelector(".page.active");
    if(firstPage) { firstPage.classList.add("unlocked"); }
    startBirthday();
    initScratchCard();
    startDynamicPhotoLoops();
  } else {
    document.getElementById("errorMsg").style.display = "block";
    document.getElementById("secretCode").value = "";
  }
}

document.getElementById("secretCode").addEventListener("keyup", function(event) {
  if (event.key === "Enter") { verifyPassword(); }
});

function startBirthday() { birthdaySong.play().catch(()=>{}); }

function blowCandles(){
  document.querySelectorAll(".candle").forEach(c=>{
    let f=c.querySelector(".flame");
    if(f) f.style.display="none";
  });
  if(birthdaySong){ birthdaySong.pause(); birthdaySong.currentTime = 0; }
  clapSound.play().catch(()=>{});
  setTimeout(()=>{ nextPage(); },2200);
  startBGMusic();
}

function startBGMusic(){ playBG(currentSong); }
function playBG(index){
  bgMusic.src = playlist[index];
  bgMusic.volume = 0.25; bgMusic.play().catch(()=>{});
}

bgMusic.addEventListener("ended", ()=>{
  currentSong++;
  if(currentSong >= playlist.length){ currentSong = 0; }
  playBG(currentSong);
});

// Tic Tac Toe Engine
let tttBoard = ["","","","","","","","",""];
let tttActive = true;

function playTTT(index, cell) {
  if (tttBoard[index] !== "" || !tttActive) return;
  tttBoard[index] = "X"; cell.innerText = "X";
  
  if (checkTTTWinner("X")) {
    document.getElementById("ttt-status").innerText = "Punit Wins! 🎉❤️ (Maro Hero!)";
    tttActive = false; return;
  }
  if (!tttBoard.includes("")) {
    document.getElementById("ttt-status").innerText = "It's a Romantic Tie! 🤝❤️";
    tttActive = false; return;
  }
  
  tttActive = false;
  document.getElementById("ttt-status").innerText = "Chandni is thinking... 🤔";
  
  setTimeout(() => {
    let emptyIndices = [];
    tttBoard.forEach((val, i) => { if (val === "") emptyIndices.push(i); });
    
    if (emptyIndices.length > 0) {
      let randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
      tttBoard[randomIndex] = "O";
      document.querySelectorAll(".ttt-cell")[randomIndex].innerText = "O";
      
      if (checkTTTWinner("O")) {
        document.getElementById("ttt-status").innerText = "Chandni Wins! 😜";
      } else if (!tttBoard.includes("")) {
        document.getElementById("ttt-status").innerText = "It's a Romantic Tie! 🤝❤️";
      } else {
        document.getElementById("ttt-status").innerText = "Your turn My Love (Punit: X)";
        tttActive = true;
      }
    }
  }, 600);
}

function checkTTTWinner(p) {
  const w = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  return w.some(comb => comb.every(i => tttBoard[i] === p));
}

function resetTTT() {
  tttBoard = ["","","","","","","","",""]; tttActive = true;
  document.querySelectorAll('.ttt-cell').forEach(c => c.innerText = "");
  document.getElementById("ttt-status").innerText = "Your turn My Love (Punit: X)";
}

// Page Navigation with Audio Pause on Page Change
let pages = document.querySelectorAll(".page");
let current = 0, startX = 0;

document.getElementById("book").addEventListener("touchstart", e => { startX = e.touches[0].clientX; });
document.getElementById("book").addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if(startX - endX > 50) nextPage();
  else if(endX - startX > 50) prevPage();
});

function showPage(i){
  pages.forEach(p=>p.classList.remove("active", "unlocked"));
  pages[i].classList.add("active", "unlocked");

  // Pause video if navigating away from video page
  const vid = document.getElementById("chandniVideo");
  if (vid && i !== 2) {
    vid.pause();
  }
}

function nextPage(){ if(current < pages.length-1){current++; showPage(current);} }
function prevPage(){ if(current > 0){current--; showPage(current);} }

function createHeart(containerId) {
  let h = document.createElement("div");
  h.className = "heart";
  const symbols = ["💖", "❤️", "🌹", "✨", "🌸", "👑", "♾️", "💞"];
  h.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = (Math.random() * 3 + 4) + "s";
  let container = document.getElementById(containerId);
  if(container) { container.appendChild(h); setTimeout(()=>h.remove(), 7000); }
}

setInterval(() => createHeart("hearts"), 400);
setInterval(() => createHeart("galleryHearts"), 400);

function openGallery(){ document.getElementById("galleryPage").style.display="block"; }
function closeGallery(){ document.getElementById("galleryPage").style.display="none"; }

function openChandniGallery(){ document.getElementById("chandniGalleryPage").style.display="block"; }
function closeChandniGallery(){ document.getElementById("chandniGalleryPage").style.display="none"; }