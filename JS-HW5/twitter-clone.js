const fetchUsers = fetch("https://ajax.test-danit.com/api/json/users").then(
  (response) => response.json(),
);

const fetchPosts = fetch("https://ajax.test-danit.com/api/json/posts").then(
  (response) => response.json(),
);

Promise.all([fetchUsers, fetchPosts]).then(([users, posts]) => {
  displayData(users, posts);
});

function displayData(users, posts) {
  const postContainer = document.getElementById("post-container");

  const postWrapper = document.createElement("div");

  posts.forEach((post) => {
    const user = users.find((user) => user.id === post.userId);
    const profileImageURL = `https://i.pravatar.cc/150?u=${Math.random()}`;

    const postCard = document.createElement("div");
    postCard.className = "post-card";
    postCard.setAttribute("data-id", post.id);

    postCard.innerHTML = `
      <img src="${profileImageURL}" alt="Profile Image" class="profile-image">
      <div class="post-info">
        <h2 class="user-name">${user.name}</h2>
        <p class="post-content">${post.body}</p>
      </div>
      <button class="delete-button">Delete</button>
    `;

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
  }).then(() => {
    postCard.remove();
  });
}
