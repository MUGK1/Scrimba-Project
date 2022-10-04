// Remember to import the data and Dog class!
import Posters from "./Dog.js";
import dogs from "./data.js";

const btnLike = document.getElementById("like");
const btnDis = document.getElementById("dis");
const posters = document.getElementById("mainContent");

const rexDog = new Posters(dogs.rex);
const bellaDog = new Posters(dogs.Bella);
const teddyDog = new Posters(dogs.Teddy);

function render() {
  posters.innerHTML = bellaDog.getPosterHTML();
}

btnLike.addEventListener("click", function () {
  render();
});
