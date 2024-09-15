var myname = 'Diagne DIOP';
console.log("Bonjour Mon nom est : ".concat(myname));
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log('Car engine started');
    };
    ;
    return Car;
}());
var car_one = new Car('KIA', 'SORENTO', 2103);
car_one.start();
