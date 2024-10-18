document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.querySelector('.explore-button');
    
    exploreButton.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = exploreButton.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });