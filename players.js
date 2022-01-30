console.log("Hello Oa");

const formDiv = document.getElementById("form-div");

const nameInput = document.getElementById("player-name-input");

const cityInput = document.getElementById("home-city-input");

const imageInput = document.getElementById("player-image-input");

const submitBtn = document.getElementById("player-submit-btn");

const playersMsg = document.getElementById("players-msg");

const playersUl = document.getElementById("players-ul");

console.log("-----------------------------------------------");
console.log("-----------------------------------------------");

let players = [];

let count = 1;

let data1 = localStorage.getItem("players-list");

let data2 = JSON.parse(data1);

let data3 = localStorage.getItem("persist-count");

let data4 = JSON.parse(data3);

if (data2 != null) {
  players = data2;
  count = data4;
} else {
  players = [];
  count = 1;
}

console.log("--------------------------------------------------");
console.log("-------------------------------------------");

function displayPlayers() {
  players.forEach(playerX => {
    // create Li.................................................
    const playerLi = document.createElement("li");
    playerLi.class = "player-div";
    // create nameHeader
    const nameHeader = document.createElement("h1");
    nameHeader.innerHTML = playerX.name;
    nameHeader.class = "name-header";
    playerLi.append(nameHeader);
    // create cityHeader
    const cityHeader = document.createElement("h2");
    cityHeader.class = "city-header";
    cityHeader.innerHTML = playerX.city;
    playerLi.append(cityHeader);
    // create playerImage
    const playerImage = document.createElement("img");
    playerImage.class = "player-image";
    playerImage.src = playerX.img;
    playerImage.height = 400;
    playerImage.width = 300;
    playerLi.append(playerImage);
    // create edit button

    // create break
    const playerBreak = document.createElement("br");
    playerBreak.class = "player-break";
    playerLi.append(playerBreak);

    playersUl.append(playerLi);
  });
}

displayPlayers();

submitBtn.addEventListener("click", function (e) {
  if (nameInput.value.trim() == "") {
    playersMsg.innerHTML = "Must Enter Player Name";
  } else {
    e.preventDefault();
    let newPlayer = {
      id: count,
      name: nameInput.value,
      city: cityInput.value,
      img: imageInput.value
    };
    players.push(newPlayer);
    let localPlayers = JSON.stringify(players);
    localStorage.setItem("players-list", localPlayers);
    count++;
    let localCount = JSON.stringify(count);
    localStorage.setItem("persist-count", localCount);
    nameInput.value = "";
    cityInput.value = "";
    imageInput.value = "";
    playersUl.innerHTML = "";
    displayPlayers();
  }
});
