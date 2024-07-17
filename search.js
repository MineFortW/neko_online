document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = ""; // Очистка предыдущих результатов

        if (query === "") {
            searchResults.innerHTML = "<p>Введите поисковый запрос.</p>";
            return;
        }

        // Получение всех текстовых элементов для поиска
        const textElements = document.querySelectorAll("h2, p, li, a");
        let found = false;

        textElements.forEach(element => {
            if (element.textContent.toLowerCase().includes(query)) {
                const resultItem = document.createElement("div");
                resultItem.className = "search-result-item";
                resultItem.innerHTML = `<p>${element.textContent}</p>`;
                searchResults.appendChild(resultItem);
                found = true;
            }
        });

        if (!found) {
            searchResults.innerHTML = "<p>Ничего не найдено.</p>";
        }
    });
});
