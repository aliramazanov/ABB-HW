document.addEventListener("DOMContentLoaded", () => {
  const articlesContainer = document.getElementById("articles");
  const prevButton = document.getElementById("prevButton") as HTMLButtonElement;
  const nextButton = document.getElementById("nextButton") as HTMLButtonElement;

  let currentPage = 1;
  const pageSize = 10;
  let data: any[] = [];

  async function fetchAllNewsArticles() {
    try {
      const response = await fetch("http://localhost:9595?page=1&size=1000");
      data = await response.json();
      displayCurrentPage();
    } catch (error) {
      console.error("Error fetching news articles:", error);
    }
  }

  function displayCurrentPage() {
    if (articlesContainer) {
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;
      const pageData = data.slice(start, end);

      articlesContainer.innerHTML = "";

      pageData.forEach((article) => {
        const articleCard = document.createElement("div");
        articleCard.classList.add("article-card");
        articleCard.innerHTML = `
          <h2>${article.title}</h2>
          <p>${article.text}</p>
        `;
        articlesContainer.appendChild(articleCard);
      });
      updatePaginationButtons();
    }
  }

  function updatePaginationButtons() {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage * pageSize >= (data.length || 0);
  }

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayCurrentPage();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage * pageSize < (data.length || 0)) {
      currentPage++;
      displayCurrentPage();
    }
  });

  fetchAllNewsArticles();
});
