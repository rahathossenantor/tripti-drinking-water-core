import { Schema, model } from "mongoose";
import { TCustomer } from "./customer.type";

const customerSchema = new Schema<TCustomer>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            trim: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        deliveryAddress: {
            type: String,
            required: true,
            trim: true,
        },
        customerType: {
            type: String,
            enum: ["Residential", "Business"],
            required: true,
        },
        serviceType: {
            type: String,
            enum: ["Daily", "Weekly", "Monthly"],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Customer = model<TCustomer>("Customer", customerSchema);
