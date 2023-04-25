class CarVisitor {
	visit(car) {
		if(car.seats > 2) {
			console.log('this is clearly a car for old people');
		} else {
			console.log('My bet is this car has at least 2 cylinders');
		}
	}
}

class TruckVisitor {
	visit(truckVar) {
		if(truckVar.towPackage) {
			console.log('we need to buy a boat')
		}
	}
}

class MonsterTruckVisitor {
	visit(monsterTruckVar) {
		if(monsterTruckVar.looksLikeADragon) {
			console.log('that is a badass monster truck')
		} else {
			console.log('loser')
		}
	}
}

class Car {
	seats = 5;
	doors = 4;

	accept(visitorObject) {
		visitorObject.visit(this);
	}
}

class Truck {
	towPackage = true;
	doors = 2;

	accept(visitorObject) {
		visitorObject.visit(this);
	}
}

class MonsterTruck {
	looksLikeADragon = true;
	doors = 1.5;

	accept(visitorObject) {
		visitorObject.visit(this);
	}
}

let myCar = new Car();
myCar.seats = 2;
myCar.accept(new CarVisitor());

let myMonsterTruck = new MonsterTruck();
myMonsterTruck.looksLikeADragon = false;
myMonsterTruck.accept(new MonsterTruckVisitor());

let myCar2 = new Car();
myCar2.seats = 2;
myCar2.accept(new MonsterTruckVisitor());