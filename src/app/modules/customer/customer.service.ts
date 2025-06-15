/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import { Order } from "../order/order.model";
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

// update a customer
const updateCustomerIntoDB = async (id: string, payload: Partial<TCustomer>) => {
    const dbRes = await Customer.findByIdAndUpdate(
        id,
        { $set: payload },
        { new: true, runValidators: true }
    );
    if (!dbRes) {
        throw new Error("Failed to update customer!");
    }
    return dbRes;
};

// delete a customer
const deleteCustomerFromDB = async (id: string) => {
    const orders = await Order.find({ customer: id });

    const dueOrders = orders.filter((order) => order.paymentStatus === "Due");
    if (dueOrders.length) {
        throw new Error("Cannot delete customer with due orders!");
    }

    if (!orders.length) {
        const deletedCustomer = await Customer.findByIdAndDelete(id);
        if (!deletedCustomer) {
            throw new Error("Failed to delete customer!");
        }
        return deletedCustomer;
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const deletedOrders = await Order.deleteMany({ customer: id }, { session });
        if (!deletedOrders.deletedCount) {
            throw new Error("Failed to delete orders for this customer!");
        }

        const deletedCustomer = await Customer.findByIdAndDelete(id, { session });
        if (!deletedCustomer) {
            throw new Error("Failed to delete customer!");
        }

        await session.commitTransaction();
        await session.endSession();
        return deletedCustomer;
    } catch (err: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error("Failed to delete customer!" + err.message);
    }
};

export const customerServices = {
    createCustomerIntoDB,
    getAllCustomersFromDB,
    updateCustomerIntoDB,
    deleteCustomerFromDB,
};
