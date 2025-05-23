import { Types } from "mongoose";

export type TOrder = {
    paymentStatus: "Due" | "Paid";
    customer: Types.ObjectId;
    quantity: number;
    totalPrice: number;
};
