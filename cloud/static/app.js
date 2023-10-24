// Adding and removing the shrink animation to each transition div
// document.addEventListener("DOMContentLoaded", function () {
//     function scrollTransform(divId) {
//         const targetDiv = document.getElementById(divId);
//         let prevIntersecting = false;

//         const observer = new IntersectionObserver(entries => {
//             entries.forEach(entry => {
//                 if (entry.target === targetDiv) {
//                     if (entry.isIntersecting) {
//                         if (!prevIntersecting) {
//                             targetDiv.classList.add('shrink-text');
//                         }
//                     } else {
//                         targetDiv.classList.remove('shrink-text');
//                     }
//                     prevIntersecting = entry.isIntersecting;
//                 }
//             });
//         });
//         observer.observe(targetDiv);
//     }

// scrollTransform("twentytwo")
// scrollTransform("sixtythree")
// scrollTransform("sixtysix")
// });

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

// Change the font size of each gram item from 3vh to 10vh (with 22 steps)
// Change the background color from rgb(255, 228, 196) to rgb(109, 132, 156, 0.5)
const gramItems = document.getElementsByClassName("grams")
for (var i = 0; i < gramItems.length; i++) {
    var item = gramItems[i];
    item.style.fontSize = `${(3 + (i*.32))}vmin`
    item.style.background = `rgb(${255-(i*6.64)}, ${228-(i*4.4)}, ${196-(i*1.8)}, 0.5)`
    console.log(item.style.background)
}

// Change the font size of each kilo item from 3vh to 10vh (with 30 steps)
// Change the background color from rgb(109, 132, 156, 0.5) to rgb(88, 96, 103, 0.6)
const kiloItems = document.getElementsByClassName("kilos")
for (var i = 0; i < kiloItems.length; i++) {
    var item = kiloItems[i];
    item.style.fontSize = `${(3 + (i*.23))}vmin`
    item.style.background = `rgb(${109-(i*.7)}, ${132-(i*1.2)}, ${156-(i*1.77)}, 0.5)`
}

// Change the font size of each ton item from 3vh to 10vh (with 3 steps)
// Change the background color from rgb(88, 96, 103, 0.6) to rgb(46, 50, 54, 0.6)
const tonItems = document.getElementsByClassName("tons")
for (var i = 0; i < tonItems.length; i++) {
    var item = tonItems[i];
    item.style.fontSize = `${(3 + (i*2.3))}vmin`
    item.style.background = `rgb(${88-(i*14)}, ${96-(i*15.33)}, ${103-(i*16.33)}, 0.5)`
}

// Change the font size of each ton item from 3vh to 10 (with 8 steps)
// Change the background color from rgb(46, 50, 54, 0.6) to rgb(0, 0, 0, 0.6)
const millTonItems = document.getElementsByClassName("m-tons")
for (var i = 0; i < millTonItems.length; i++) {
    var item = millTonItems[i];
    item.style.fontSize = `${(3 + (i*.875))}vmin`
    item.style.background = `rgb(${46-(i*5.75)}, ${50-(i*6.25)}, ${54-(i*6.75)}, 0.7)`
    item.style.color = `rgb(${0-(i*5.75)}, ${0-(i*6.25)}, ${0-(i*6.75)})`
}
