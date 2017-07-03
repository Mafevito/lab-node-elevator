/*jshint esversion:6 */

const Elevator = require('./elevator.js');
const Person = require('./person.js');


let elevator = new Elevator();
let marifer = new Person("Marifer", 0, 4);

elevator.update();
elevator.call(marifer);
