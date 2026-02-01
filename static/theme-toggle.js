// Create and inject the theme toggle button
const themeButton = document.createElement('button');
themeButton.className = 'theme-toggle';
themeButton.id = 'theme-toggle';
themeButton.setAttribute('aria-label', 'Toggle dark mode');

const themeIcon = document.createElement('span');
themeIcon.id = 'theme-icon';

themeButton.appendChild(themeIcon);
document.body.appendChild(themeButton);

// Update icon based on current theme
function updateIcon(theme) {
  themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Set initial icon
const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
updateIcon(currentTheme);

// Toggle theme on click
themeButton.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = current === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateIcon(newTheme);
});
