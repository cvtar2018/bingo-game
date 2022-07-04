// Generate Integer Number from 1 to 99 and apply it to board
const arr1 = Array(99).fill(1).map((n, i) => n + i)
const arr2 = []
var arrCoordinate = {}
console.log(arr1)

function ran() {
    const index = Math.floor(Math.random() * arr1.length)
    if (arr1.length > 0) {
        arr2.push(arr1[index])
        arr1.splice(index, 1)
        const display = document.getElementById('a')
        
    }

    else {
        alert("Bingo Board Ready!")
    }
}

// Function to generate random number and pull it from list to avoid duplication
for ( var i = 0; i < 100 ; i++) {
    ran()
}
console.log(arr2)
console.log(arrCoordinate)

// function displayCoordinate (tablex, i, j) {
//     for (var y = 0; y < arr2.length ; y++ ) {
//         console.log(`arr2${y} = ${arr2[y]}`)
//     }
//     arrCoordinate[tablex, [i, [j]]] = arr2[y]
// }


// console.log(display)

// function giveAlert () {
//     alert("Successful")
// }

// function initBoard () {

// }


// > 




