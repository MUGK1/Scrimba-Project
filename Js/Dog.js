// Create the Dog class here

class Posters {
  constructor(data) {
    Object.assign(this, data);
  }

  getPosterHTML() {
    const { name, avatar, age, bio } = this;
    return `
    <div class="mainContent">
        <img
        src="images/badge-like.png"
        alt="Like Stamp"
        class="mainContent__stamp none"
        />
        <img
        src="${avatar}"
        alt="A dog Picture"
        class="mainContent__img"
        />
        <h1 class="mainContent__header">${name}, ${age}</h1>
        <p class="mainContent__para">${bio}</p>
    </div> `;
  }
}

export default Posters;
