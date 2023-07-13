class Card {
  constructor(user, post) {
    this.name = user.name;
    this.email = user.email;
    this.postId = post.id;
    this.postBody = post.body;
    this.profileImageURL = `https://i.pravatar.cc/150?u=${Math.random()}`;
  }

  renderCard() {
    const postCard = document.createElement("div");
    postCard.className = "post-card";
    postCard.setAttribute("data-id", this.postId);

    postCard.innerHTML = `
      <img src="${this.profileImageURL}" alt="Profile Image" class="profile-image">
      <div class="post-info">
        <h2 class="user-name">${this.name}</h2>
        <p class="post-content">${this.postBody}</p>
      </div>
      <button class="delete-button">Delete</button>
    `;
    return postCard;
  }
}

function fetchData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

Promise.all([
  fetchData("https://ajax.test-danit.com/api/json/users"),
  fetchData("https://ajax.test-danit.com/api/json/posts"),
]).then(([users, posts]) => {
  displayData(users, posts);
});

function displayData(users, posts) {
  const postContainer = document.getElementById("post-container");
  const postWrapper = document.createElement("div");

  posts.forEach((post) => {
    const user = users.find((user) => user.id === post.userId);
    const card = new Card(user, post);
    const postCard = card.renderCard();
    postWrapper.appendChild(postCard);
  });

  postContainer.appendChild(postWrapper);
  document.body.appendChild(postContainer);

  postContainer.addEventListener("click", (event) => {
    if (event.target.matches(".delete-button")) {
      handleDelete(event);
    }
  });
}

function handleDelete(clickEvent) {
  const postCard = clickEvent.target.closest(".post-card");
  const postId = postCard.getAttribute("data-id");

  fetch(`https://ajax.test-danit.com/api/json/posts/${postId}`, {
    method: "DELETE",
  })
    .then(() => {
      postCard.remove();
    })
    .catch((error) => console.error(error));
}
