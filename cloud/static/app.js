// import motusPkg from 'https://cdn.jsdelivr.net/npm/motus@2.0.5/+esm'

// // This was not working when importing above in typical fashion
// const motus = motusPkg.default

// Animation code
// This works, but not with overflow: auto, which
// seems necessary for the snap scroll effect

// const animation = new motus.Animation({
//     $el: document.getElementById("twentyone"),
//     keyframes: [
//         {
//           fontSize: 2
//         }
//       ]
//     });
//   motus.addAnimation(animation);

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