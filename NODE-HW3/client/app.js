"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => {
    const articlesContainer = document.getElementById("articles");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    let currentPage = 1;
    const pageSize = 10;
    let data = [];
    function fetchAllNewsArticles() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("http://localhost:3000?page=1&size=1000");
                data = yield response.json();
                displayCurrentPage();
            }
            catch (error) {
                console.error("Error fetching news articles:", error);
            }
        });
    }
    function displayCurrentPage() {
        if (articlesContainer) {
            const start = (currentPage - 1) * pageSize;
            const end = start + pageSize;
            const pageData = data.slice(start, end);
            articlesContainer.innerHTML = "";
            pageData.forEach((article) => {
                // Create a news article card with plain CSS
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
