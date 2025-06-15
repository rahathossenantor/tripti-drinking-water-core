import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { customerServices } from "./customer.service";

// create customer
const createCustomer = catchAsync(async (req, res) => {
    const dbRes = await customerServices.createCustomerIntoDB(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Customer has been registered successfully.",
        data: dbRes
    });
});

// get all customers
const getAllCustomers = catchAsync(async (req, res) => {
    const dbRes = await customerServices.getAllCustomersFromDB();

    res.status(httpStatus.OK).json({
        success: true,
        message: "Customers have been fetched successfully.",
        data: dbRes
    });
});

// delete customer
const deleteCustomer = catchAsync(async (req, res) => {
    const { id } = req.params;
    const dbRes = await customerServices.deleteCustomerFromDB(id);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Customer has been deleted successfully.",
        data: dbRes
    });
});

export const customerControllers = {
    createCustomer,
    getAllCustomers,
    deleteCustomer,
};
