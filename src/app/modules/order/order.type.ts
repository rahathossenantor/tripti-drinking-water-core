import { Types } from "mongoose";

export type TOrder = {
    paymentStatus: "Pending" | "Paid";
    productId: Types.ObjectId;
    customerId: Types.ObjectId;
    quantity: number;
    totalPrice: number;
};
