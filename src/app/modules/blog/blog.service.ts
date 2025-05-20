/* eslint-disable @typescript-eslint/no-explicit-any */
import uploadImage from "../../utils/uploadImage";
import { Blog } from "./blog.model";
import { TBlog } from "./blog.type";

// create a new blog
const createBlogIntoDB = async (payload: TBlog, imagePath: string) => {
    if (imagePath) {
        // upload image to cloudinary
        const uploadRes: any = await uploadImage(imagePath, Date.now().toString());
        payload.image = await uploadRes?.secure_url;
    }

    const dbRes = await Blog.create(payload);
    return dbRes;
};

export const blogServices = {
    createBlogIntoDB
};
