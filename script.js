const girlName = "Aaradhya"; // change name here

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const card = document.getElementById("card");
const music = document.getElementById("music");

let noCount = 0;

yesBtn.addEventListener("click", () => {
  music.play();

  card.innerHTML = `
    <h1>I Love You 💖</h1>
    <p>${girlName}, you are my favorite person forever 🥰</p>
    <img src="cute.jpg" class="cute-img">
  `;

  startHeartRain();
});

/* Naughty No button */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 220 - 110;
  const y = Math.random() * 140 - 70;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
  noCount++;

  if (noCount === 1) {
    noBtn.innerText = "Are you sure? 😏";
  } 
  else if (noCount === 2) {
    noBtn.innerText = "Think again 🙈";
  } 
  else if (noCount === 3) {
    noBtn.innerText = "Okay fine 😌💖";
    noBtn.style.background = "linear-gradient(45deg, #ff758c, #ff7eb3)";
    noBtn.style.color = "white";
  } 
  else {
    noBtn.innerText = "Yes 💖";
    noBtn.onclick = () => yesBtn.click();
  }
});

function startHeartRain() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 250);
}
