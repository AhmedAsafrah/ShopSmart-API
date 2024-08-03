ShopSmart API

ShopSmart API is a robust and intuitive backend e-commerce platform designed to streamline the management of shops, products, categories, and hotlines. Built with Node.js, Express, TypeScript, and MySQL, this API leverages TypeORM to manage database interactions, offering a smart solution for developers looking to implement e-commerce functionalities with ease.
Key Features

    Shop Management: Easily create, retrieve, and manage shop information. Each shop can have associated products and a dedicated hotline, ensuring comprehensive management.
    Product Management: Create, retrieve, and manage products with ease. The API supports relations between products and shops, as well as categories, making it simple to organize and query products.
    Category Management: Create and manage product categories, allowing for organized and efficient product categorization and retrieval.
    Hotline Management: Manage hotlines associated with shops, ensuring each shop has a direct line for customer support.

Technical Highlights

    Data Validation: Each API endpoint is equipped with robust validation to ensure data integrity and reliability.
    Error Handling: The API includes custom error handling to provide meaningful error messages and maintain smooth operations.
    Entity Relationships: The API models real-world relationships such as:
        One-to-Many between Shops and Products.
        Many-to-Many between Products and Categories.
        One-to-One between Shops and Hotlines.
    Security: Shop passwords are hashed before being stored in the database to ensure data security.

Installation and Setup
1. Create a New Express App

npx create-express-with-typescript ecommerce-shop

2. Navigate to the Project Directory

cd ecommerce-shop

3. Install Dependencies

npm install typeorm mysql

4. Update Configuration Files

    Adjust package.json and tsconfig.json as needed for your project.
    Set up your MySQL database and configure TypeORM.

5. Run the Application

npm run start

Use npm run dev for development mode with hot-reloading.
API Endpoints

The ShopSmart API provides endpoints for:

    Shop: Create shops, retrieve shops by ID, and optionally retrieve all shops with their products.
    Product: Create products, retrieve all products, and retrieve products by ID.
    Category: Create categories and retrieve all categories.
    Hotline: Create and manage hotlines associated with shops.

Each endpoint includes proper data validation and error handling to ensure reliable and secure operations.

