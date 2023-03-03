'use strict'
const floor = document.getElementById("floor")
const lift = document.getElementById("lift")
const start = document.getElementById("start")
const box = document.getElementById("box")

start.addEventListener("click", function () {
    box.innerHTML = floorCreation(floor.value);
});

let allFloor = ``

function floorCreation(floor) {
    let allFloor = ``
    while (floor) {
        floor = floor - 1;

        if (floor == 0) {
            allFloor += `<div class="square"></div>`
        }

        allFloor += `<div id="num">
        <p>Floor ${floor + 1}</p>
        <button id="up"> Up</button><br>
        <button id="down"> Down</button>
        <hr>
        </div>`;

    }
    return allFloor
}








































// let allFloor = ``

// function floorCreation(floor) {
//     let allFloor = ``
//     while (floor) {
//         floor = floor - 1;

//         if (floor == 0) {
//             allFloor += `<div class="square"></div>`
//         }

//         allFloor += `<div id="num">
//         <p>Floor ${floor + 1}</p>
//         <button id="up"> Up</button><br>
//         <button id="down"> Down</button>
//         <hr>
//         </div>`;

//     }
//     return allFloor
// }