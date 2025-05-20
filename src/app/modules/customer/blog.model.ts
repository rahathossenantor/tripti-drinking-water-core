import { Schema, model } from "mongoose";
import { TBlog } from "./customer.type";

const blogSchema = new Schema<TBlog>(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        article: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Blog = model<TBlog>("Blog", blogSchema);
