import { Router } from "express";
import { productRoutes } from "../modules/product/product.route";
import { customerRoutes } from "../modules/customer/customer.route";
import { orderRoutes } from "../modules/order/order.route";

const router = Router();

const moduleRoutes = [
    {
        path: "/products",
        route: productRoutes,
    },
    {
        path: "/customers",
        route: customerRoutes,
    },
    {
        path: "/orders",
        route: orderRoutes,
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
