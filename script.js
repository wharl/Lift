'use strict'
const floor = document.getElementById("floor")
const lift = document.getElementById("lift")
const start = document.getElementById("start")
const box = document.getElementById("box")

box.innerHTML = floorCreation(floor.value);
// start.addEventListener("click", function () {
//     box.innerHTML = floorCreation(floor.value);
// });


function floorCreation(floor) {
    let allFloor = ``
    while (floor) {
        floor = floor - 1;

        allFloor += `<div id="num">


        <div>
            <button id="up"> Up</button><br>
        </div>
        
        <div>
            <button id="down"> Down</button><br>
        </div>

        <div class="square"></div>

        <div id="line">
            <p>Floor ${floor + 1}</p>
        </div>
            

        </div>`;
    }
    return allFloor
}