export type TCustomer = {
    customerId: string;
    name: string;
    email?: string;
    phone: string;
    productPrice: number;
    deliveryAddress: string;
    customerType: "Residential" | "Business";
    serviceType: "Daily" | "Weekly" | "Monthly";
};
