// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get the theme toggler elements
    const themeToggler = document.querySelector('.theme-toggler');
    const lightModeIcon = themeToggler.querySelector('.material-symbols-outlined:first-child');
    const darkModeIcon = themeToggler.querySelector('.material-symbols-outlined:last-child');
    
    // Check for saved user preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply the initial theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      enableDarkMode();
    } else {
      enableLightMode();
    }
    
    // Toggle theme when clicked
    themeToggler.addEventListener('click', function() {
      if (document.body.classList.contains('dark-mode')) {
        enableLightMode();
      } else {
        enableDarkMode();
      }
    });
    
    // Function to enable dark mode
    function enableDarkMode() {
      document.body.classList.add('dark-mode');
      lightModeIcon.classList.remove('active');
      darkModeIcon.classList.add('active');
      localStorage.setItem('theme', 'dark');
    }
    
    // Function to enable light mode
    function enableLightMode() {
      document.body.classList.remove('dark-mode');
      darkModeIcon.classList.remove('active');
      lightModeIcon.classList.add('active');
      localStorage.setItem('theme', 'light');
    }
    
    // Close button functionality (if needed)
    const closeBtn = document.getElementById('close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        document.querySelector('aside').style.display = 'none';
      });
    }
    
    // Menu button functionality for mobile (if needed)
    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) {
      menuBtn.addEventListener('click', function() {
        document.querySelector('aside').style.display = 'block';
      });
    }
  });