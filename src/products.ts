export interface Product {
    name: string,
    price: number
}

export const calcAverageProductPrice = (products: Product[]) : number => {
    let totalPrice = 0;
    let averagePrice = 0;

    for(let product of products) {
        totalPrice += product.price;
    }

    averagePrice = totalPrice / products.length;
    
    return averagePrice || 0;
}