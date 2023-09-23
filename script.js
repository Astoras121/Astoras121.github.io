let buttonDrink = document.getElementById("drink");
let buttonEat = document.getElementById("eat");
let eatStroke = document.getElementById("percentStroke2");
let drinkStroke = document.getElementById("percentStroke");
let foodPercent = 0;
let drinkPercent = 0;

class Food{
    constructor(foodPercent){
        this.foodPercent = foodPercent;
    }

    addPercent(){
        this.foodPercent += 10;
    }
}

class Drink{
    constructor(drinkPercent){
        this.drinkPercent = drinkPercent;
    }

    addPercent(){
        this.drinkPercent += 10;
    }
}

let Food1 = new Food(foodPercent)
let Drink1 = new Drink(drinkPercent);

buttonEat.onclick = function(){
    Food1.foodPercent += 10;
    console.log(Food1.foodPercent);
    eatStroke.style.background = `conic-gradient(purple ${Food1.foodPercent}deg,transparent 0deg)`;

    if(Food1.foodPercent == 360){
        Food1.foodPercent = 0;
    }
}

buttonDrink.onclick = function(){
    Drink1.drinkPercent += 10;
    console.log(Drink1.drinkPercent);
    drinkStroke.style.background = `conic-gradient(purple ${Drink1.drinkPercent}deg,transparent 0deg)`;

    if(Drink1.drinkPercent == 360){
        Drink1.drinkPercent = 0;
    }
}
