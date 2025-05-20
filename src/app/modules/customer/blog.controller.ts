import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { blogServices } from "./blog.service";

// create blog
const createBlog = catchAsync(async (req, res) => {
    const imagePath: string = req.file?.path as string;

    const dbRes = await blogServices.createBlogIntoDB(req.body, imagePath);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Blog is created successfully.",
        data: dbRes
    });
});

export const blogControllers = {
    createBlog,
};
