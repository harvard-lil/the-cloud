// Change the background color from rgb(255, 228, 196) to rgb(109, 132, 156, 0.5)
const gramItems = document.getElementsByClassName("grams")
for (var i = 0; i < gramItems.length; i++) {
    var item = gramItems[i];
    item.style.background = `rgb(${255-(i*6.64)}, ${228-(i*4.4)}, ${196-(i*1.8)}, 0.5)`
}

// Change the background color from rgb(109, 132, 156, 0.5) to rgb(88, 96, 103, 0.6)
const kiloItems = document.getElementsByClassName("kilos")
for (var i = 0; i < kiloItems.length; i++) {
    var item = kiloItems[i];
    item.style.background = `rgb(${109-(i*.7)}, ${132-(i*1.2)}, ${156-(i*1.77)}, 0.5)`
}

// Change the background color from rgb(88, 96, 103, 0.6) to rgb(46, 50, 54, 0.6)
const tonItems = document.getElementsByClassName("tons")
for (var i = 0; i < tonItems.length; i++) {
    var item = tonItems[i];
    item.style.background = `rgb(${88-(i*6)}, ${96-(i*6.57)}, ${103-(i*7)}, 0.6)`
}

// Change the background color from rgb(46, 50, 54, 0.6) to rgb(0, 0, 0, 0.6)
const millTonItems = document.getElementsByClassName("m-tons")
for (var i = 0; i < millTonItems.length; i++) {
    var item = millTonItems[i];
    item.style.background = `rgb(${46-(i*5.75)}, ${50-(i*6.25)}, ${54-(i*6.75)}, 0.6)`
}
