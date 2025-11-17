// Main JS entry point

// Grab the search input and article container
const searchInput = document.getElementById('search');
const articlesContainer = document.getElementById('articles-container');

// Function to filter articles based on the search input
function filterArticles() {
  const searchTerm = searchInput.value.toLowerCase();  // Get the search term
  const articles = articlesContainer.querySelectorAll('.blog-post');  // Get all the articles
  
  // Loop through all articles and hide/show based on the search term
  articles.forEach(article => {
    const title = article.querySelector('h2').textContent.toLowerCase();
    
    if (title.includes(searchTerm)) {
      article.style.display = 'block';  // Show the article
    } else {
      article.style.display = 'none';  // Hide the article
    }
  });
}

// Add an event listener to the search input to trigger filtering on input change
searchInput.addEventListener('input', filterArticles);