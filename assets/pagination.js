const articles = Array.from(document.querySelectorAll('.article'));
let currentPage = 1;
const articlesPerPage = 1;

function showPage(pageNumber) {
  const start = (pageNumber - 1) * articlesPerPage;
  const end = start + articlesPerPage;
  articles.forEach(article => article.style.display = 'none');

  for (let i = start; i < end; i++) {
    if (articles[i]) {
      articles[i].style.display = 'block';
    }
  }
  currentPage = pageNumber;
}

document.querySelectorAll('.page-link').forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(index + 1);
  });
});

showPage(1);