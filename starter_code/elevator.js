/*jshint esversion:6 */

class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.MINFLOOR   = 0;
    this.waitingList = [];
    this.passengers = [];
    this.requests   = [];
    this.direction  = 'up';
  }

  start() {
    let init = setInterval(() => { update(); },1 * 1000); }

  stop() {
    clearInterval(init);
  }

  update() {
    this.log();
  }

  _passengersEnter() {
    if (waitingList === person.originFloor) {
      this.passengers.push(person);
      this.waitingList.splice();
      this.requests.push();
      console.log(`${person.name} has enter the elevator`);
    }
  }

  _passengersLeave() {
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
        console.log(`Posicion actual:${this.floor}`);
        this.floor++;
    }else{
      console.log('Posicion máxima');
    }
  }

  floorDown() {
    if(this.floor > this.MINFLOOR) {
      console.log(`Posicion actual:${this.floor}`);
      this.floor--;
    }else{
      console.log('Posicion máxima');
    }
  }

  call(person) {
    this.requests.push(person);
    this.waitingList.push(person.originFloor);
   }

  log() {
    console.log(`Direction ${this.direction} | Position ${this.floor}`); }
}

module.exports = Elevator;
