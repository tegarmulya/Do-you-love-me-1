const gif = document.getElementById('gif');
const question = document.getElementById('question');
const btnContainer = document.getElementById('btnContainer');

let yesSize = 18;
let noCount = 0;

// 👉 กำหนดรูปตายตัว
const gifs = {
  start: "love1.1.gif",
  yes: "love2.gif",
  loveFinal: "love3.gif",
  no: ["sad1.gif", "sad2.gif", "sad3.gif"]
};

function initButtons() {
  btnContainer.innerHTML = `
    <button class="btn yes" id="yesBtn">Love 💕</button>
    <button class="btn no" id="noBtn">NO, Love 💔 </button>
  `;

  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');

  yesBtn.onclick = () => yesClick(yesBtn);
  noBtn.onclick = () => noClick(yesBtn, noBtn);
}

function resetPage() {
  noCount = 0;
  yesSize = 18;

  question.textContent = "do you love me, cil??? 💖";
  gif.src = gifs.start;

  initButtons();
}

function yesClick(btn) {
  gif.src = gifs.yes;
  question.textContent = "Yeaayy!!, tapi boong wkwk";

  btnContainer.innerHTML = `<button class="btn" id="homeBtn">Home 🏠</button>`;
  document.getElementById('homeBtn').onclick = resetPage;
}

function noClick(yesBtn, noBtn) {
  yesSize += 10;
  yesBtn.style.fontSize = yesSize + "px";

  // 👉 ไล่รูปทีละอัน
  if (noCount < gifs.no.length) {
    gif.src = gifs.no[noCount];
  }

  noCount++;

  if (noCount >= gifs.no.length) {
    noBtn.remove();
    yesBtn.textContent = "Love ❤️";
    yesBtn.classList.add("love");

    yesBtn.onclick = () => {
      gif.src = gifs.loveFinal;
      question.innerHTML = `<div class="message-box"> wkwk gabisa kann</div>`;

      btnContainer.innerHTML = `<button class="btn" id="homeBtn">Home 🏠</button>`;
      document.getElementById('homeBtn').onclick = resetPage;
    };
  }
}

setInterval(() => {
  const container = document.querySelector(".hearts");
  if (!container) return;

  const heart = document.createElement("span");

  heart.innerText = "♥";   // ใช้หัวใจแทน emoji
  heart.className = "heart";

  const colors = ["#ff69b4", "#ff85c1", "#ffb6d9", "#ff4da6"];
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 18) + "px";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  container.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 400);

// ฟองลอย
setInterval(() => {
  const container = document.querySelector(".bubbles");
  if (!container) return;

  const bubble = document.createElement("span");

  const size = 20 + Math.random() * 60;

  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.left = Math.random() * 100 + "vw";
  bubble.style.animationDuration = (5 + Math.random() * 5) + "s";

  container.appendChild(bubble);

  setTimeout(() => bubble.remove(), 10000);
}, 500);

// เริ่ม
resetPage();