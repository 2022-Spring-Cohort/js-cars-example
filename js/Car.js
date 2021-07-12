export default class Car{
    constructor(){
        this._engineHealth = 100;
        this._speed = 0;
    }

    accelerate(){
        this._speed +=10;
    }
    brake(){
        this._speed -=10;
        if(this._speed<0){
            this._speed = 0;
        }
    }

    get engineHealth(){
        return this._engineHealth;
    }
    get speed(){
        return this._speed;
    }
}