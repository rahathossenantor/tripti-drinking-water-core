import { Customer } from "./customer.model";
import { TCustomer } from "./customer.type";
import { generateCustomerId } from "./customer.utils";

// create a new customer
const createCustomerIntoDB = async (payload: TCustomer) => {
    payload.customerId = await generateCustomerId();

    const dbRes = await Customer.create(payload);
    return dbRes;
};

// get all customers
const getAllCustomersFromDB = async () => {
    const dbRes = await Customer.find();
    return dbRes;
};

// delete a customer
const deleteCustomerFromDB = async (id: string) => {
    const dbRes = await Customer.findByIdAndDelete(id);
    return dbRes;
};

export const customerServices = {
    createCustomerIntoDB,
    getAllCustomersFromDB,
    deleteCustomerFromDB,
};
