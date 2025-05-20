import { Schema, model } from "mongoose";
import { TProduct } from "./product.type";

const productSchema = new Schema<TProduct>(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Product = model<TProduct>("Product", productSchema);
