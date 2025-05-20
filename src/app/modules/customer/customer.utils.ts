import { Customer } from "./customer.model";

// get last customer id
const getLastCustomerId = async () => {
    const lastCustomer = await Customer
        .findOne({}, { customerId: 1, _id: 0 })
        .sort({ createdAt: -1 })
        .lean();
    return lastCustomer?.customerId;
};

// generate customer id
export const generateCustomerId = async () => {
    let currentId = "0";
    const lastCustomerId = await getLastCustomerId();

    if (lastCustomerId) {
        currentId = lastCustomerId;
    }

    const incrementId = (Number(currentId) + 1).toString();
    return incrementId;
};
