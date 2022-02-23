import { Vehicle } from "../vehicle/vehicle";
import { Customer } from "../customer/customer";
import { EnterpriseCustomer } from "../customer/enterprise-customer";
import { EnterpriseCar } from "../vehicle/enterprise-car";

export class EnterpriseCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
