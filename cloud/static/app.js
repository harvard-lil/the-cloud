// Adding and removing the shrink animation to each transition div
document.addEventListener("DOMContentLoaded", function () {
    function scrollTransform(divId) {
        const targetDiv = document.getElementById(divId);
        let prevIntersecting = false;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.target === targetDiv) {
                    if (entry.isIntersecting) {
                        if (!prevIntersecting) {
                            targetDiv.classList.add('shrink-text');
                        }
                    } else {
                        targetDiv.classList.remove('shrink-text');
                    }
                    prevIntersecting = entry.isIntersecting;
                }
            });
        });
        observer.observe(targetDiv);
    }

scrollTransform("twentytwo")
scrollTransform("sixtythree")
scrollTransform("sixtysix")
});

// Intersection Observer code for each scroll object
const observer = new IntersectionObserver((entries) => {
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