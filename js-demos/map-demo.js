const products = [
    {
        "product_id": 1,
        "name": "Product 1",
        "category": "Books",
        "price": 37.55,
        "stockQuantity": 21,
        "brand": "BrandG",
        "created_at": "2024-12-12 04:21:45",
        "isActive": true
    },
    {
        "product_id": 2,
        "name": "Product 2",
        "category": "Beauty",
        "price": 761.82,
        "stockQuantity": 92,
        "brand": "BrandD",
        "created_at": "2025-03-23 04:21:45",
        "isActive": false
    },
    {
        "product_id": 3,
        "name": "Product 3",
        "category": "Beauty",
        "price": 892.25,
        "stockQuantity": 29,
        "brand": "BrandF",
        "created_at": "2024-08-20 04:21:45",
        "isActive": false
    },
    {
        "product_id": 4,
        "name": "Product 4",
        "category": "Sports",
        "price": 890.18,
        "stockQuantity": 2,
        "brand": "BrandB",
        "created_at": "2024-09-13 04:21:45",
        "isActive": false
    },
    {
        "product_id": 5,
        "name": "Product 5",
        "category": "Automotive",
        "price": 717.84,
        "stockQuantity": 54,
        "brand": "BrandB",
        "created_at": "2024-07-20 04:21:45",
        "isActive": false
    }
];

function toDiscounted(product) {
    return {
        name: product.name,
        price: product.price,
        discountedPrice: Number((product.price * .9).toFixed(2))
    }
}

const productPrices = products.map(product => toDiscounted(product));

// Alternative way
/*const productPrices = products.map(product => ({
        name: product.name,
        price: product.price,
        discountedPrice: Number((product.price * .9).toFixed(2))
    }));
*/

console.log(productPrices);