import { IProdut } from "./product.interface";
import { Product } from "./product.model";

export const getAllProductsFromDB = async(): Promise<IProdut[]> =>{
    return Product.find();
}