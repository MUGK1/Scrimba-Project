// Create the Dog class here

class Posters {
  constructor(data) {
    Object.assign(this, data);
  }

  getPosterHTML() {
    const { name, avatar, age, bio, hasBeenLiked, hasBeenSwiped } = this;
    return `
    <div class="mainContent">
        <img
        src="${
          hasBeenLiked && hasBeenSwiped
            ? "images/badge-like.png"
            : "images/badge-nope.png"
        }"
        alt="Like Stamp"
        class="mainContent__stamp ${
          hasBeenLiked || hasBeenSwiped ? "" : "none"
        }"
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

  ChangeStatus(boolean) {
    this.hasBeenLiked = boolean;
    this.hasBeenSwiped = true;
    console.log(this.hasBeenLiked);
    return this.getPosterHTML();
  }
}

export default Posters;
