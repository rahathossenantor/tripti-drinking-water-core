/* eslint-disable @typescript-eslint/no-explicit-any */

import { Customer } from "./customer.model";
import { TCustomer } from "./customer.type";

// create a new blog
const createCustomerIntoDB = async (payload: TCustomer) => {
    const dbRes = await Customer.create(payload);
    return dbRes;
};

export const blogServices = {
    createCustomerIntoDB
};
