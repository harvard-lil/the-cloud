let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

const observer = new IntersectionObserver((entries, options) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        
            const scrollItem = entry.target;

            const fetchURL = scrollItem.dataset.fetchUrl;
    
            // Issue a fetch command with time argument
            fetch(fetchURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/html',
                }
                })
                .then((response) => response.text())
                .catch((error) => console.error(error));
            }
        });
  });
  
  // Add scroll items to IntersectionObserver
  const scrollItems = document.querySelectorAll('.scroll-item');
  scrollItems.forEach((scrollItem) => {
      observer.observe(scrollItem);
  });