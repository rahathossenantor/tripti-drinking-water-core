import { Customer } from "./customer.model";
import { TCustomer } from "./customer.type";

// create a new customer
const createCustomerIntoDB = async (payload: TCustomer) => {
    const dbRes = await Customer.create(payload);
    return dbRes;
};

export const customerServices = {
    createCustomerIntoDB
};
