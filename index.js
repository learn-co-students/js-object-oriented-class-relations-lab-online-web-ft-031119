let driverID = 0;
let store = {drivers: [], passengers: [], trips: []};
class Driver {
  constructor(name) {
    this.id = ++driverID;
    this.name = name;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => trip.driverId == this.id);
  }

  passengers() {
    let trips = this.trips();
    let passengers = [];
    trips.forEach(function(trip) {
      passengers.push(store.passengers.find(function(passenger) {
        return passenger.id == trip.passengerId;}));
    })
    return passengers;
  }
}

let passengerID = 0;
class Passenger {
  constructor (name) {
    this.id = ++passengerID;
    this.name = name;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => trip.passengerId == this.id);
  }

  drivers() {
    let trips = this.trips();
    let drivers = [];
    trips.forEach(function(trip) {
      drivers.push(store.drivers.find(function(driver) {
        return driver.id == trip.driverId;
      }))
    })
    return drivers;
  }
}

let tripID = 0;
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripID;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);

  }

  driver() {
    const dId = this.driverId;
    return store.drivers.find(function(driver) {
      return (driver.id == dId);
    })
  }

  passenger() {
    let pId = this.passengerId;
    console.log(pId);
    return store.passengers.find(function(passenger) {
      console.log(`passenger.id = ${passenger.id}, pId = ${pId}`);
      return (passenger.id == pId);
    })
  }
}
