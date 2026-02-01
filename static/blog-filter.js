// Client-side tag filtering for blog posts
const filterButtons = document.querySelectorAll('.tag-filter-btn');
const articles = document.querySelectorAll('#posts-container article');

if (filterButtons.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedTag = button.dataset.tag;
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter articles
      articles.forEach(article => {
        const articleTags = article.dataset.tags.split(',').filter(t => t);
        
        if (selectedTag === 'all' || articleTags.includes(selectedTag)) {
          article.style.display = 'block';
        } else {
          article.style.display = 'none';
        }
      });
    });
  });
}
