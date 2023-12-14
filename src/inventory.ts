import { Product } from "../src/products";

export interface InventoryItem {
    product: Product,
    quantity: number
}

export const calcInventoryValue = (inventoryItem: InventoryItem[]) : number => {
    let totalValue = 0;
    
    for(let item of inventoryItem) {
        totalValue += item.product.price * item.quantity;
    }
    
    return totalValue;
}