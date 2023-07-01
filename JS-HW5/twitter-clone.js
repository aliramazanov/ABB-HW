const getDataButton = document.querySelector("#get-data");
const loaderContainer = document.querySelector(".loader-container");

getDataButton.addEventListener("click", () => {
  loaderContainer.style.display = "flex";

  const fetchUsers = fetch("https://ajax.test-danit.com/api/json/users")
    .then((response) => response.json())
    .then((users) => {
      console.log("Users:", users);
    });

  const fetchPosts = fetch("https://ajax.test-danit.com/api/json/posts")
    .then((response) => response.json())
    .then((posts) => {
      console.log("Posts:", posts);
    });

  Promise.all([fetchUsers, fetchPosts]).then(() => {
    loaderContainer.style.display = "none";
  });
});
