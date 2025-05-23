import { Schema, model } from "mongoose";
import { TOrder } from "./order.type";

const orderSchema = new Schema<TOrder>(
    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: "Customer",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        paymentStatus: {
            type: String,
            enum: ["Due", "Paid"],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Order = model<TOrder>("Order", orderSchema);
