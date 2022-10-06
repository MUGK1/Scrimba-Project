// Remember to import the data and Dog class!
import Posters from "./Dog.js";
import dogs from "./data.js";

const btnLike = document.getElementById("like");
const btnDis = document.getElementById("dis");
const posters = document.getElementById("mainContent");
let dogsData = ["rex", "bella", "teddy"];
let isWaiting = false;

function getNewDogPoster() {
  const nextDogPoster = dogs[dogsData.shift()];
  console.log(nextDogPoster);
  return nextDogPoster ? new Posters(nextDogPoster) : {};
}

function btnChoose(which) {
  posters.innerHTML = dogPosters.ChangeStatus(which);
  if (!isWaiting) {
    isWaiting = true;
    if (dogsData.length > 0) {
      setTimeout(() => {
        dogPosters = getNewDogPoster();
        render();
        isWaiting = false;
      }, 1100);
    } else {
      dogsData = ["rex", "bella", "teddy"];
      isWaiting = true;
      setTimeout(() => {
        dogPosters = getNewDogPoster();
        render();
        isWaiting = false;
      }, 1100);
    }
  }
}

function render() {
  posters.innerHTML = dogPosters.getPosterHTML();
}

let dogPosters = getNewDogPoster();
btnLike.addEventListener("click", () => {
  btnChoose(true);
});
btnDis.addEventListener("click", () => {
  btnChoose(false);
});
render();
