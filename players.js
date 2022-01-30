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
    playersUl.append(nameHeader);
    // create cityHeader
    const cityHeader = document.createElement("h2");
    cityHeader.class = "city-header";
    cityHeader.innerHTML = playerX.city;
    playersUl.append(cityHeader);
    // create playerImage
    const playerImage = document.createElement("img");
    playerImage.class = "player-image";
    playerImage.src = playerX.img;
    playerImage.height = 400;
    playerImage.width = 300;
    playersUl.append(playerImage);
    // create break
    const playerBreak = document.createElement("br");
    playerBreak.class = "player-break";
    playersUl.append(playerBreak);
    // create another break
    const playerBreak2 = document.createElement("br");
    playerBreak2.class = "player-break-2";
    playersUl.append(playerBreak2);
    // create edit button
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";

    editBtn.innerHTML = "edit player info";
    playersUl.append(editBtn);
    // create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "delete-player-info";
    playersUl.append(deleteBtn);
    // create modify button
    const modifyBtn = document.createElement("button");
    modifyBtn.className = "modify-btn";
    modifyBtn.innerHTML = "modify player info";

    //...................................................
    //...................................................
    deleteBtn.addEventListener("click", function () {
      let target = playerX.id;
      players.splice(target - 1, 1);
      for (let i = 0; i < players.length; i++) {
        if (players[i].id > target) {
          players[i].id = players[i].id - 1;
        }
      }
      let data5 = JSON.stringify(players);
      localStorage.setItem("players-list", data5);
      count = players.length + 1;
      let newCount = JSON.stringify(count);
      localStorage.setItem("persist-count", newCount);
      playersUl.removeChild(nameHeader);
      playersUl.removeChild(cityHeader);
      playersUl.removeChild(playerImage);
      playersUl.removeChild(playerBreak);
      playersUl.removeChild(playerBreak2);
      playersUl.removeChild(editBtn);
      playersUl.removeChild(deleteBtn);
    });
    //....................................................
    editBtn.addEventListener("click", function () {
      nameInput.value = playerX.name;
      cityInput.value = playerX.city;
      imageInput.value = playerX.img;
      formDiv.removeChild(submitBtn);
      formDiv.appendChild(modifyBtn);
    });
    //.....................................................
    modifyBtn.addEventListener("click", function (e) {
      e.preventDefault();
      playerX.name = nameInput.value;
      nameHeader.innerHTML = playerX.name;
      playerX.city = cityInput.value;
      cityHeader.innerHTML = playerX.city;
      playerX.img = imageInput.value;
      playerImage.src = playerX.img;
      formDiv.removeChild(modifyBtn);
      formDiv.append(submitBtn);
      let data15 = JSON.stringify(players);
      localStorage.setItem("players-list", data15);
      nameInput.value = "";
      cityInput.value = "";
      imageInput.value = "";
    });
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
