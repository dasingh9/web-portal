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
    },
    {
        "product_id": 6,
        "name": "Product 6",
        "category": "Electronics",
        "price": 69.35,
        "stockQuantity": 39,
        "brand": "BrandE",
        "created_at": "2025-01-10 04:21:45",
        "isActive": false
    },
    {
        "product_id": 7,
        "name": "Product 7",
        "category": "Automotive",
        "price": 456.22,
        "stockQuantity": 86,
        "brand": "BrandC",
        "created_at": "2024-12-03 04:21:45",
        "isActive": true
    },
    {
        "product_id": 8,
        "name": "Product 8",
        "category": "Books",
        "price": 311.81,
        "stockQuantity": 38,
        "brand": "BrandB",
        "created_at": "2024-07-19 04:21:45",
        "isActive": false
    },
    {
        "product_id": 9,
        "name": "Product 9",
        "category": "Beauty",
        "price": 574.36,
        "stockQuantity": 92,
        "brand": "BrandD",
        "created_at": "2025-02-17 04:21:45",
        "isActive": true
    },
    {
        "product_id": 10,
        "name": "Product 10",
        "category": "Electronics",
        "price": 77.07,
        "stockQuantity": 28,
        "brand": "BrandE",
        "created_at": "2025-03-31 04:21:45",
        "isActive": true
    },
    {
        "product_id": 11,
        "name": "Product 11",
        "category": "Electronics",
        "price": 381.26,
        "stockQuantity": 84,
        "brand": "BrandF",
        "created_at": "2024-10-07 04:21:45",
        "isActive": false
    },
    {
        "product_id": 12,
        "name": "Product 12",
        "category": "Books",
        "price": 693.94,
        "stockQuantity": 24,
        "brand": "BrandE",
        "created_at": "2025-04-07 04:21:45",
        "isActive": false
    },
    {
        "product_id": 13,
        "name": "Product 13",
        "category": "Toys",
        "price": 40.82,
        "stockQuantity": 90,
        "brand": "BrandD",
        "created_at": "2025-04-18 04:21:45",
        "isActive": true
    },
    {
        "product_id": 14,
        "name": "Product 14",
        "category": "Clothing",
        "price": 970.99,
        "stockQuantity": 79,
        "brand": "BrandC",
        "created_at": "2024-06-06 04:21:45",
        "isActive": false
    },
    {
        "product_id": 15,
        "name": "Product 15",
        "category": "Beauty",
        "price": 78.38,
        "stockQuantity": 7,
        "brand": "BrandH",
        "created_at": "2024-11-14 04:21:45",
        "isActive": false
    },
    {
        "product_id": 16,
        "name": "Product 16",
        "category": "Automotive",
        "price": 778.14,
        "stockQuantity": 86,
        "brand": "BrandC",
        "created_at": "2024-10-04 04:21:45",
        "isActive": true
    },
    {
        "product_id": 17,
        "name": "Product 17",
        "category": "Toys",
        "price": 436.05,
        "stockQuantity": 25,
        "brand": "BrandD",
        "created_at": "2024-09-22 04:21:45",
        "isActive": false
    },
    {
        "product_id": 18,
        "name": "Product 18",
        "category": "Beauty",
        "price": 512.13,
        "stockQuantity": 75,
        "brand": "BrandG",
        "created_at": "2024-07-28 04:21:45",
        "isActive": false
    },
    {
        "product_id": 19,
        "name": "Product 19",
        "category": "Electronics",
        "price": 195.61,
        "stockQuantity": 19,
        "brand": "BrandE",
        "created_at": "2025-01-20 04:21:45",
        "isActive": false
    },
    {
        "product_id": 20,
        "name": "Product 20",
        "category": "Books",
        "price": 181.43,
        "stockQuantity": 16,
        "brand": "BrandA",
        "created_at": "2025-04-19 04:21:45",
        "isActive": false
    },
    {
        "product_id": 21,
        "name": "Product 21",
        "category": "Books",
        "price": 863.76,
        "stockQuantity": 62,
        "brand": "BrandC",
        "created_at": "2024-10-13 04:21:45",
        "isActive": true
    },
    {
        "product_id": 22,
        "name": "Product 22",
        "category": "Automotive",
        "price": 902.99,
        "stockQuantity": 49,
        "brand": "BrandA",
        "created_at": "2024-10-13 04:21:45",
        "isActive": false
    },
    {
        "product_id": 23,
        "name": "Product 23",
        "category": "Beauty",
        "price": 551.38,
        "stockQuantity": 32,
        "brand": "BrandA",
        "created_at": "2024-08-03 04:21:45",
        "isActive": false
    },
    {
        "product_id": 24,
        "name": "Product 24",
        "category": "Clothing",
        "price": 449.55,
        "stockQuantity": 54,
        "brand": "BrandE",
        "created_at": "2024-10-03 04:21:45",
        "isActive": true
    },
    {
        "product_id": 25,
        "name": "Product 25",
        "category": "Home & Kitchen",
        "price": 347.53,
        "stockQuantity": 55,
        "brand": "BrandE",
        "created_at": "2024-07-16 04:21:45",
        "isActive": false
    },
    {
        "product_id": 26,
        "name": "Product 26",
        "category": "Clothing",
        "price": 255.83,
        "stockQuantity": 18,
        "brand": "BrandB",
        "created_at": "2025-05-08 04:21:45",
        "isActive": false
    },
    {
        "product_id": 27,
        "name": "Product 27",
        "category": "Automotive",
        "price": 718.94,
        "stockQuantity": 27,
        "brand": "BrandH",
        "created_at": "2024-07-21 04:21:45",
        "isActive": true
    },
    {
        "product_id": 28,
        "name": "Product 28",
        "category": "Toys",
        "price": 555.38,
        "stockQuantity": 72,
        "brand": "BrandA",
        "created_at": "2024-10-28 04:21:45",
        "isActive": false
    },
    {
        "product_id": 29,
        "name": "Product 29",
        "category": "Books",
        "price": 208.75,
        "stockQuantity": 77,
        "brand": "BrandC",
        "created_at": "2025-03-31 04:21:45",
        "isActive": true
    },
    {
        "product_id": 30,
        "name": "Product 30",
        "category": "Sports",
        "price": 749.64,
        "stockQuantity": 51,
        "brand": "BrandH",
        "created_at": "2025-02-02 04:21:45",
        "isActive": true
    },
    {
        "product_id": 31,
        "name": "Product 31",
        "category": "Automotive",
        "price": 925.57,
        "stockQuantity": 58,
        "brand": "BrandH",
        "created_at": "2024-11-27 04:21:45",
        "isActive": true
    },
    {
        "product_id": 32,
        "name": "Product 32",
        "category": "Clothing",
        "price": 21.57,
        "stockQuantity": 81,
        "brand": "BrandG",
        "created_at": "2025-01-24 04:21:45",
        "isActive": false
    },
    {
        "product_id": 33,
        "name": "Product 33",
        "category": "Beauty",
        "price": 103.27,
        "stockQuantity": 30,
        "brand": "BrandE",
        "created_at": "2025-02-25 04:21:45",
        "isActive": true
    },
    {
        "product_id": 34,
        "name": "Product 34",
        "category": "Sports",
        "price": 941.5,
        "stockQuantity": 1,
        "brand": "BrandG",
        "created_at": "2025-04-22 04:21:45",
        "isActive": false
    },
    {
        "product_id": 35,
        "name": "Product 35",
        "category": "Home & Kitchen",
        "price": 466.72,
        "stockQuantity": 67,
        "brand": "BrandB",
        "created_at": "2024-10-05 04:21:45",
        "isActive": false
    },
    {
        "product_id": 36,
        "name": "Product 36",
        "category": "Sports",
        "price": 969.68,
        "stockQuantity": 69,
        "brand": "BrandG",
        "created_at": "2024-11-16 04:21:45",
        "isActive": false
    },
    {
        "product_id": 37,
        "name": "Product 37",
        "category": "Electronics",
        "price": 132.37,
        "stockQuantity": 12,
        "brand": "BrandE",
        "created_at": "2024-11-26 04:21:45",
        "isActive": true
    },
    {
        "product_id": 38,
        "name": "Product 38",
        "category": "Clothing",
        "price": 759.19,
        "stockQuantity": 17,
        "brand": "BrandC",
        "created_at": "2024-12-07 04:21:45",
        "isActive": true
    },
    {
        "product_id": 39,
        "name": "Product 39",
        "category": "Toys",
        "price": 325.74,
        "stockQuantity": 90,
        "brand": "BrandB",
        "created_at": "2025-02-06 04:21:45",
        "isActive": true
    },
    {
        "product_id": 40,
        "name": "Product 40",
        "category": "Books",
        "price": 807.98,
        "stockQuantity": 76,
        "brand": "BrandG",
        "created_at": "2024-09-27 04:21:45",
        "isActive": false
    },
    {
        "product_id": 41,
        "name": "Product 41",
        "category": "Books",
        "price": 515.89,
        "stockQuantity": 24,
        "brand": "BrandE",
        "created_at": "2025-02-24 04:21:45",
        "isActive": false
    },
    {
        "product_id": 42,
        "name": "Product 42",
        "category": "Books",
        "price": 256.82,
        "stockQuantity": 25,
        "brand": "BrandB",
        "created_at": "2025-01-06 04:21:45",
        "isActive": false
    },
    {
        "product_id": 43,
        "name": "Product 43",
        "category": "Books",
        "price": 77.71,
        "stockQuantity": 23,
        "brand": "BrandH",
        "created_at": "2024-07-25 04:21:45",
        "isActive": true
    },
    {
        "product_id": 44,
        "name": "Product 44",
        "category": "Electronics",
        "price": 613.4,
        "stockQuantity": 27,
        "brand": "BrandD",
        "created_at": "2025-02-26 04:21:45",
        "isActive": true
    },
    {
        "product_id": 45,
        "name": "Product 45",
        "category": "Clothing",
        "price": 733.81,
        "stockQuantity": 6,
        "brand": "BrandC",
        "created_at": "2024-05-31 04:21:45",
        "isActive": true
    },
    {
        "product_id": 46,
        "name": "Product 46",
        "category": "Electronics",
        "price": 766.7,
        "stockQuantity": 29,
        "brand": "BrandG",
        "created_at": "2024-07-05 04:21:45",
        "isActive": false
    },
    {
        "product_id": 47,
        "name": "Product 47",
        "category": "Beauty",
        "price": 563.21,
        "stockQuantity": 6,
        "brand": "BrandG",
        "created_at": "2024-09-16 04:21:45",
        "isActive": true
    },
    {
        "product_id": 48,
        "name": "Product 48",
        "category": "Clothing",
        "price": 76.1,
        "stockQuantity": 62,
        "brand": "BrandF",
        "created_at": "2024-07-11 04:21:45",
        "isActive": false
    },
    {
        "product_id": 49,
        "name": "Product 49",
        "category": "Beauty",
        "price": 289.4,
        "stockQuantity": 45,
        "brand": "BrandC",
        "created_at": "2024-06-19 04:21:45",
        "isActive": false
    },
    {
        "product_id": 50,
        "name": "Product 50",
        "category": "Books",
        "price": 695.81,
        "stockQuantity": 88,
        "brand": "BrandA",
        "created_at": "2024-11-19 04:21:45",
        "isActive": false
    },
    {
        "product_id": 51,
        "name": "Product 51",
        "category": "Clothing",
        "price": 671.69,
        "stockQuantity": 11,
        "brand": "BrandC",
        "created_at": "2024-12-12 04:21:45",
        "isActive": true
    },
    {
        "product_id": 52,
        "name": "Product 52",
        "category": "Automotive",
        "price": 739.7,
        "stockQuantity": 9,
        "brand": "BrandH",
        "created_at": "2025-01-05 04:21:45",
        "isActive": true
    },
    {
        "product_id": 53,
        "name": "Product 53",
        "category": "Home & Kitchen",
        "price": 721.69,
        "stockQuantity": 57,
        "brand": "BrandG",
        "created_at": "2024-07-21 04:21:45",
        "isActive": false
    },
    {
        "product_id": 54,
        "name": "Product 54",
        "category": "Clothing",
        "price": 155.53,
        "stockQuantity": 54,
        "brand": "BrandF",
        "created_at": "2024-11-25 04:21:45",
        "isActive": false
    },
    {
        "product_id": 55,
        "name": "Product 55",
        "category": "Home & Kitchen",
        "price": 497.29,
        "stockQuantity": 71,
        "brand": "BrandF",
        "created_at": "2024-12-07 04:21:45",
        "isActive": true
    },
    {
        "product_id": 56,
        "name": "Product 56",
        "category": "Home & Kitchen",
        "price": 682.12,
        "stockQuantity": 52,
        "brand": "BrandB",
        "created_at": "2024-08-29 04:21:45",
        "isActive": false
    },
    {
        "product_id": 57,
        "name": "Product 57",
        "category": "Beauty",
        "price": 501.95,
        "stockQuantity": 45,
        "brand": "BrandH",
        "created_at": "2025-04-21 04:21:45",
        "isActive": true
    },
    {
        "product_id": 58,
        "name": "Product 58",
        "category": "Books",
        "price": 980.35,
        "stockQuantity": 9,
        "brand": "BrandF",
        "created_at": "2024-07-27 04:21:45",
        "isActive": false
    },
    {
        "product_id": 59,
        "name": "Product 59",
        "category": "Toys",
        "price": 986.83,
        "stockQuantity": 89,
        "brand": "BrandC",
        "created_at": "2024-09-17 04:21:45",
        "isActive": true
    },
    {
        "product_id": 60,
        "name": "Product 60",
        "category": "Clothing",
        "price": 944.02,
        "stockQuantity": 82,
        "brand": "BrandF",
        "created_at": "2024-05-16 04:21:45",
        "isActive": true
    },
    {
        "product_id": 61,
        "name": "Product 61",
        "category": "Toys",
        "price": 150.81,
        "stockQuantity": 37,
        "brand": "BrandG",
        "created_at": "2024-05-19 04:21:45",
        "isActive": true
    },
    {
        "product_id": 62,
        "name": "Product 62",
        "category": "Clothing",
        "price": 393.11,
        "stockQuantity": 24,
        "brand": "BrandH",
        "created_at": "2024-10-12 04:21:45",
        "isActive": true
    },
    {
        "product_id": 63,
        "name": "Product 63",
        "category": "Automotive",
        "price": 26.56,
        "stockQuantity": 47,
        "brand": "BrandE",
        "created_at": "2024-08-15 04:21:45",
        "isActive": false
    },
    {
        "product_id": 64,
        "name": "Product 64",
        "category": "Clothing",
        "price": 422.33,
        "stockQuantity": 66,
        "brand": "BrandD",
        "created_at": "2024-10-04 04:21:45",
        "isActive": false
    },
    {
        "product_id": 65,
        "name": "Product 65",
        "category": "Automotive",
        "price": 615.18,
        "stockQuantity": 29,
        "brand": "BrandB",
        "created_at": "2024-09-06 04:21:45",
        "isActive": true
    },
    {
        "product_id": 66,
        "name": "Product 66",
        "category": "Electronics",
        "price": 254.98,
        "stockQuantity": 33,
        "brand": "BrandE",
        "created_at": "2025-01-26 04:21:45",
        "isActive": false
    },
    {
        "product_id": 67,
        "name": "Product 67",
        "category": "Automotive",
        "price": 769.04,
        "stockQuantity": 76,
        "brand": "BrandA",
        "created_at": "2024-08-31 04:21:45",
        "isActive": true
    },
    {
        "product_id": 68,
        "name": "Product 68",
        "category": "Beauty",
        "price": 988.39,
        "stockQuantity": 57,
        "brand": "BrandF",
        "created_at": "2024-07-02 04:21:45",
        "isActive": true
    },
    {
        "product_id": 69,
        "name": "Product 69",
        "category": "Home & Kitchen",
        "price": 939.28,
        "stockQuantity": 29,
        "brand": "BrandA",
        "created_at": "2024-10-14 04:21:45",
        "isActive": true
    },
    {
        "product_id": 70,
        "name": "Product 70",
        "category": "Clothing",
        "price": 206.4,
        "stockQuantity": 63,
        "brand": "BrandH",
        "created_at": "2025-03-02 04:21:45",
        "isActive": false
    },
    {
        "product_id": 71,
        "name": "Product 71",
        "category": "Automotive",
        "price": 480.85,
        "stockQuantity": 48,
        "brand": "BrandA",
        "created_at": "2024-08-06 04:21:45",
        "isActive": false
    },
    {
        "product_id": 72,
        "name": "Product 72",
        "category": "Clothing",
        "price": 424.4,
        "stockQuantity": 11,
        "brand": "BrandC",
        "created_at": "2025-02-21 04:21:45",
        "isActive": false
    },
    {
        "product_id": 73,
        "name": "Product 73",
        "category": "Books",
        "price": 629.3,
        "stockQuantity": 99,
        "brand": "BrandH",
        "created_at": "2024-10-29 04:21:45",
        "isActive": false
    },
    {
        "product_id": 74,
        "name": "Product 74",
        "category": "Sports",
        "price": 837.31,
        "stockQuantity": 69,
        "brand": "BrandE",
        "created_at": "2024-08-20 04:21:45",
        "isActive": true
    },
    {
        "product_id": 75,
        "name": "Product 75",
        "category": "Books",
        "price": 717.54,
        "stockQuantity": 81,
        "brand": "BrandB",
        "created_at": "2024-06-15 04:21:45",
        "isActive": true
    },
    {
        "product_id": 76,
        "name": "Product 76",
        "category": "Automotive",
        "price": 310.87,
        "stockQuantity": 80,
        "brand": "BrandA",
        "created_at": "2024-06-21 04:21:45",
        "isActive": false
    },
    {
        "product_id": 77,
        "name": "Product 77",
        "category": "Home & Kitchen",
        "price": 374.76,
        "stockQuantity": 68,
        "brand": "BrandA",
        "created_at": "2025-01-31 04:21:45",
        "isActive": false
    },
    {
        "product_id": 78,
        "name": "Product 78",
        "category": "Clothing",
        "price": 973.6,
        "stockQuantity": 55,
        "brand": "BrandB",
        "created_at": "2024-10-30 04:21:45",
        "isActive": true
    },
    {
        "product_id": 79,
        "name": "Product 79",
        "category": "Home & Kitchen",
        "price": 83.97,
        "stockQuantity": 37,
        "brand": "BrandA",
        "created_at": "2024-11-07 04:21:45",
        "isActive": false
    },
    {
        "product_id": 80,
        "name": "Product 80",
        "category": "Clothing",
        "price": 333.44,
        "stockQuantity": 76,
        "brand": "BrandG",
        "created_at": "2024-06-02 04:21:45",
        "isActive": false
    },
    {
        "product_id": 81,
        "name": "Product 81",
        "category": "Automotive",
        "price": 983.59,
        "stockQuantity": 21,
        "brand": "BrandD",
        "created_at": "2025-04-02 04:21:45",
        "isActive": false
    },
    {
        "product_id": 82,
        "name": "Product 82",
        "category": "Electronics",
        "price": 736.98,
        "stockQuantity": 33,
        "brand": "BrandC",
        "created_at": "2024-05-25 04:21:45",
        "isActive": false
    },
    {
        "product_id": 83,
        "name": "Product 83",
        "category": "Sports",
        "price": 665.02,
        "stockQuantity": 16,
        "brand": "BrandF",
        "created_at": "2024-09-12 04:21:45",
        "isActive": true
    },
    {
        "product_id": 84,
        "name": "Product 84",
        "category": "Home & Kitchen",
        "price": 637.66,
        "stockQuantity": 91,
        "brand": "BrandE",
        "created_at": "2024-08-17 04:21:45",
        "isActive": true
    },
    {
        "product_id": 85,
        "name": "Product 85",
        "category": "Home & Kitchen",
        "price": 645.45,
        "stockQuantity": 29,
        "brand": "BrandF",
        "created_at": "2024-07-24 04:21:45",
        "isActive": false
    },
    {
        "product_id": 86,
        "name": "Product 86",
        "category": "Beauty",
        "price": 673.54,
        "stockQuantity": 37,
        "brand": "BrandB",
        "created_at": "2025-01-27 04:21:45",
        "isActive": true
    },
    {
        "product_id": 87,
        "name": "Product 87",
        "category": "Clothing",
        "price": 509.67,
        "stockQuantity": 31,
        "brand": "BrandH",
        "created_at": "2025-02-23 04:21:45",
        "isActive": false
    },
    {
        "product_id": 88,
        "name": "Product 88",
        "category": "Clothing",
        "price": 187.64,
        "stockQuantity": 51,
        "brand": "BrandC",
        "created_at": "2024-08-23 04:21:45",
        "isActive": true
    },
    {
        "product_id": 89,
        "name": "Product 89",
        "category": "Electronics",
        "price": 749.48,
        "stockQuantity": 82,
        "brand": "BrandH",
        "created_at": "2025-02-17 04:21:45",
        "isActive": true
    },
    {
        "product_id": 90,
        "name": "Product 90",
        "category": "Clothing",
        "price": 740.36,
        "stockQuantity": 53,
        "brand": "BrandE",
        "created_at": "2024-09-27 04:21:45",
        "isActive": true
    },
    {
        "product_id": 91,
        "name": "Product 91",
        "category": "Books",
        "price": 686.65,
        "stockQuantity": 37,
        "brand": "BrandE",
        "created_at": "2025-05-13 04:21:45",
        "isActive": false
    },
    {
        "product_id": 92,
        "name": "Product 92",
        "category": "Home & Kitchen",
        "price": 668.13,
        "stockQuantity": 5,
        "brand": "BrandB",
        "created_at": "2024-09-05 04:21:45",
        "isActive": false
    },
    {
        "product_id": 93,
        "name": "Product 93",
        "category": "Beauty",
        "price": 795.48,
        "stockQuantity": 65,
        "brand": "BrandH",
        "created_at": "2025-03-13 04:21:45",
        "isActive": false
    },
    {
        "product_id": 94,
        "name": "Product 94",
        "category": "Sports",
        "price": 248.55,
        "stockQuantity": 85,
        "brand": "BrandC",
        "created_at": "2024-05-25 04:21:45",
        "isActive": true
    },
    {
        "product_id": 95,
        "name": "Product 95",
        "category": "Automotive",
        "price": 31.5,
        "stockQuantity": 12,
        "brand": "BrandA",
        "created_at": "2024-11-26 04:21:45",
        "isActive": true
    },
    {
        "product_id": 96,
        "name": "Product 96",
        "category": "Home & Kitchen",
        "price": 683.68,
        "stockQuantity": 17,
        "brand": "BrandC",
        "created_at": "2025-01-26 04:21:45",
        "isActive": false
    },
    {
        "product_id": 97,
        "name": "Product 97",
        "category": "Books",
        "price": 134.17,
        "stockQuantity": 97,
        "brand": "BrandC",
        "created_at": "2025-01-07 04:21:45",
        "isActive": true
    },
    {
        "product_id": 98,
        "name": "Product 98",
        "category": "Books",
        "price": 60.75,
        "stockQuantity": 76,
        "brand": "BrandB",
        "created_at": "2024-12-27 04:21:45",
        "isActive": false
    },
    {
        "product_id": 99,
        "name": "Product 99",
        "category": "Sports",
        "price": 586.14,
        "stockQuantity": 5,
        "brand": "BrandE",
        "created_at": "2024-06-18 04:21:45",
        "isActive": true
    },
    {
        "product_id": 100,
        "name": "Product 100",
        "category": "Electronics",
        "price": 441.01,
        "stockQuantity": 50,
        "brand": "BrandC",
        "created_at": "2024-05-15 04:21:45",
        "isActive": false
    }
];

export function getAllProducts() {
    return products;
}