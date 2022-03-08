const accelerator = document.querySelector(".floorboard__accelerator");
const brakePedal = document.querySelector(".floorboard__brake");
const body = document.querySelector("body");

let pimpEnabled = false;
function logKey(e) {
    if(e.code == "KeyW" && !pimpEnabled){
        console.log(e.code);
        pimpEnabled = true;
        pimpMyRide();
    }
}

function pimpMyRide(){
    const car = document.querySelector(".car");
    const radio = document.createElement("section")
    radio.innerHTML = `
    <div class="radio">
        <audio class="radio__player" src="https://audiohub.com/testfile/hands-up-for-summer" controls preload> </audio>
    </div>`
    car.appendChild(radio);
    const style = document.createElement('style');
        style.innerHTML =
	    '.container {' +
        'background-color: #0a0004;'+
        'background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");'+       
	    '}';

/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
    document.head.appendChild(style);
    accelerator.addEventListener("click", () => {
        new Audio("https://www.fesliyanstudios.com/play-mp3/4735").play();
    });
    brakePedal.addEventListener("click", () => {
        new Audio("https://www.fesliyanstudios.com/play-mp3/4711").play();
    });
    
    body.addEventListener("warnEvent", () => {
        new Audio("https://www.soundjay.com/transportation/sounds/car-beeping-1.mp3").play();
    });
}

