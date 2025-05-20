import { Types } from "mongoose";

export type TOrder = {
    paymentStatus: "Due" | "Paid";
    productId: Types.ObjectId;
    customerId: Types.ObjectId;
    quantity: number;
    totalPrice: number;
};
