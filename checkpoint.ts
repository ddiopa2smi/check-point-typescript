let myname: string = 'Diagne DIOP';
console.log(`Bonjour Mon nom est : ${myname}`);

interface Vehicle {
    make: string;
    model: string;
    year: number;
    start: () => void;

}

class Car implements Vehicle {

    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log('Car engine started');
    };

}

let car_one: Vehicle = new Car('KIA', 'SORENTO', 2103);

car_one.start();
