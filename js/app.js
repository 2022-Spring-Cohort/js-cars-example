// import Car from "/js/Car.js";
import {
    Car
} from "/js/Car.js";

const warnEvent = new Event('warnEvent');
const newCar = new Car();

console.log(newCar);

const accelorator = document.querySelector(".floorboard__accelerator");
const brake = document.querySelector(".floorboard__brake");
const speedo = document.querySelector(".dashboard__speedometer");

accelorator.addEventListener("click",()=>{
    newCar.accelerate();
    updateDashboard(newCar);
});


brake.addEventListener("click", ()=>{
    newCar.brake();
   updateDashboard(newCar);
    
});

const updateDashboard = function(newCar){
    updateOilPressure(newCar);
    updateAlternatorLight(newCar);
    updateCheckEngine(newCar);
    speedo.innerText = newCar.speed;
    

}

const updateCheckEngine = function(newCar){
    const checkEngine = document.querySelector(".dashboard__check-engine-light")
    checkEngine.classList.add('hidden');
    if(newCar.engineHealth < 80){
        checkEngine.classList.toggle('hidden');
        body.dispatchEvent(warnEvent);
    }
}


// dashboard__low-oil-pressure-light
const  updateOilPressure = function(newCar){
    const oilLight = document.querySelector(".dashboard__low-oil-pressure-light")
    oilLight.classList.add('hidden');
    if(newCar.engineHealth < 20){
        oilLight.classList.toggle("hidden");
    }
}

// dashboard__alternator-light
const updateAlternatorLight= function(newCar){
    const altLight = document.querySelector(".dashboard__alternator-light") 
    altLight.classList.add('hidden');
    if(newCar.engineHealth <=0){
        altLight.classList.toggle('hidden');
    }
}

document.body.addEventListener('keydown', logKey);