export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
    availabilityStatus: string;
    discountPercentage:number;
    brand:string;
    category:string;
    rating:number;
    stock:number;
    quantity?:number;
}