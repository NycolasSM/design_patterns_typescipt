import { Customer } from "../customer/customer";
import { IndividualCustomer } from "../customer/individual-customer";
import { IndividualCar } from "../vehicle/individual-car";
import { Vehicle } from "../vehicle/vehicle";

export class IndividualCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
