import { Types } from "mongoose";

export type TOrder = {
    paymentStatus: "Due" | "Paid";
    product: Types.ObjectId;
    customer: Types.ObjectId;
    quantity: number;
    totalPrice: number;
};
