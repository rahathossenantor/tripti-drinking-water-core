export type TCustomer = {
    name: string;
    email?: string;
    phone: string;
    deliveryAddress: string;
    customerType: "Residential" | "Business";
    serviceType: "Daily" | "Weekly" | "Monthly";
};
