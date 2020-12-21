console.log("Oregon Trail");
class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.food += 2;
  }
  eat() {
    if (this.food > 0) {
      this.food -= 1;
    } else {
      this.isHealthy = false;
    }
  }
}

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }

  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }

  join(traveler) {
    if (this.getAvailableSeatCount() > 0) {
      this.passengers.push(traveler);
    }
  }

  shouldQuarantine() {
    let ill = 0;
    for (let i = 0; i < this.passengers.length; i = i + 1) {
      console.log(this.passengers[i].isHealthy);
      if (this.passengers[i].isHealthy) {
      } else {
        ill = ill + 1;
      }
      if (ill >= 1) {
        return true;
      } else {
        return false;
      }
    }
  }

  totalFood() {
    let total = 0;
    for (let i = 0; i < this.passengers.length; i = i + 1) {
      console.log(this.passengers[i].food);
      total = total + this.passengers[i].food;
    }
    return total;
  }
}

let wagon = new Wagon(2);
// Create three travelers
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let maude = new Traveler("Maude");
console.log(
  `Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`
);
wagon.join(henrietta);
console.log(
  `Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 1. Henrietta just joined.`
);
wagon.join(juan);
wagon.join(maude); // There is no room for her!
console.log(
  `Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`
);
henrietta.hunt(); // Henrietta goes in search of food.
juan.eat(); // Juan eats – as Juan does. 🤣
juan.eat(); // Juan has run out of food!
console.log(juan);
console.log(
  `Wagon Should Quarantine?: ${wagon.shouldQuarantine()} – EXPECTED: true. Juan has run out of food and become unhealthy!`
);
console.log(`Wagon's Total Food?: ${wagon.totalFood()} – EXPECTED: 3.`);
