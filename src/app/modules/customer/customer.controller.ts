import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { customerServices } from "./customer.service";

// create customer
const createCustomer = catchAsync(async (req, res) => {
    const dbRes = await customerServices.createCustomerIntoDB(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "কাস্টমার রেজিস্ট্রেশন সফল হয়েছে।",
        data: dbRes
    });
});

// get all customers
const getAllCustomers = catchAsync(async (req, res) => {
    const dbRes = await customerServices.getAllCustomersFromDB();

    res.status(httpStatus.OK).json({
        success: true,
        message: "সফলভাবে সকল কাস্টমারের তথ্য পাওয়া গিয়েছে।",
        data: dbRes
    });
});

// get a single customer
const getSingleCustomer = catchAsync(async (req, res) => {
    const { id } = req.params;
    const dbRes = await customerServices.getCustomerByIdFromDB(id);

    res.status(httpStatus.OK).json({
        success: true,
        message: "সফলভাবে কাস্টমারের তথ্য পাওয়া গিয়েছে।",
        data: dbRes
    });
});

// update customer
const updateCustomer = catchAsync(async (req, res) => {
    const { id } = req.params;
    const dbRes = await customerServices.updateCustomerIntoDB(id, req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "সফলভাবে কাস্টমারের তথ্য আপডেট হয়েছে।",
        data: dbRes
    });
});

// delete customer
const deleteCustomer = catchAsync(async (req, res) => {
    const { id } = req.params;
    const dbRes = await customerServices.deleteCustomerFromDB(id);

    res.status(httpStatus.OK).json({
        success: true,
        message: "সফলভাবে কাস্টমারের তথ্য ডিলিট হয়েছে।",
        data: dbRes
    });
});

export const customerControllers = {
    createCustomer,
    getAllCustomers,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer,
};
