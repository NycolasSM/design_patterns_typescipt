import { CarFactory } from "./factories/car-factory";
import { randomCarAlgorithm } from "./main/random-vehicle-algorithm";
import { randomNumbers } from "./utils/random-numbers";
import { Car } from "./vehicle/car";

const carFactory = new CarFactory();

const customerNames = ["Ana", "Joana", "Helena", "Joao"];

const fusca = new Car("Fusca");
fusca.pickUp("Joana");
fusca.stop();

const celta = new Car("Celta");
celta.pickUp("Joao");
celta.stop();

const palio = carFactory.getVehicle("Palio");
palio.pickUp("Joana");
palio.stop();

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `Novo Carro ${randomNumbers(100)}`);
  newCar.stop();
  console.log("---");
}
