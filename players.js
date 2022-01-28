console.log("Hello Oa");

const formDiv = document.getElementById("form-div");

const nameInput = document.getElementById("player-name-input");

const cityInput = document.getElementById("home-city-input");

const imageInput = document.getElementById("player-image-input");

const submitBtn = document.getElementById("player-submit-btn");

console.log("-----------------------------------------------");
console.log("-----------------------------------------------");

const players = [];

let count = 0;

let data1 = localStorage.getItem("player-list");

let data2 = JSON.parse(data1);

let data3 = localStorage.getItem("persist-count");

let data4 = JSON.parse(data3);

if (data2 != null) {
  players = data2;
  count = data4;
} else {
  players = [];
  count = 0;
}

console.log("--------------------------------------------------");
console.log("-------------------------------------------");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
});
