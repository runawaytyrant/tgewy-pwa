const loadWeek1 = document.getElementById('week1');
const loadWeek2 = document.getElementById('week2');
const loadWeek3 = document.getElementById('week3');
const contentContainer = document.getElementById('principal');

loadWeek1.addEventListener('click', () => {
    fetch("content/week1.html")
        .then(response => response.text())
        .then(html => {
            contentContainer.innerHTML = html;
        })
        .catch(error => console.error("Error fetching content:", error));
});

loadWeek2.addEventListener('click', () => {
    fetch("content/week2.html")
        .then(response => response.text())
        .then(html => {
            contentContainer.innerHTML = html;
        })
        .catch(error => console.error("Error fetching content:", error));
});

loadWeek3.addEventListener('click', () => {
    fetch("content/week3.html")
        .then(response => response.text())
        .then(html => {
            contentContainer.innerHTML = html;
        })
        .catch(error => console.error("Error fetching content:", error));
});