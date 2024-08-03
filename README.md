🌟 ShopSmart API

ShopSmart API is a powerful and intuitive backend e-commerce platform designed to simplify the management of shops, products, categories, and hotlines. Built with modern technologies like Node.js, Express, TypeScript, and MySQL, this API leverages TypeORM for seamless database interactions, providing a smart and efficient solution for developers.
🚀 Key Features

    🛒 Shop Management:
        Create, retrieve, and manage shop information with ease.
        Each shop can have associated products and a dedicated hotline, ensuring comprehensive management.

    📦 Product Management:
        Effortlessly create, retrieve, and manage products.
        Supports relations between products and shops, as well as categories, making organization simple.

    🏷️ Category Management:
        Create and manage product categories for organized and efficient categorization and retrieval.

    📞 Hotline Management:
        Manage hotlines associated with shops, ensuring each shop has a direct line for customer support.

⚙️ Technical Highlights

    🔍 Data Validation:
        Every API endpoint is equipped with robust validation to ensure data integrity and reliability.

    ⚠️ Error Handling:
        Includes custom error handling to provide meaningful error messages and maintain smooth operations.

    🔗 Entity Relationships:
        Models real-world relationships such as:
            One-to-Many between Shops and Products.
            Many-to-Many between Products and Categories.
            One-to-One between Shops and Hotlines.

    🔒 Security:
        Shop passwords are securely hashed before being stored in the database.

🛠️ Installation and Setup
1. Create a New Express App

npx create-express-with-typescript ecommerce-shop


2. Navigate to the Project Directory

cd ecommerce-shop


3. Install Dependencies

npm install typeorm mysql


4. Update Configuration Files

    Adjust package.json and tsconfig.json as needed.
    Set up your MySQL database and configure TypeORM.

5. Run the Application

npm run start


📋 API Endpoints

The ShopSmart API provides the following endpoints:

    Shop:
        Create shops.
        Retrieve shops by ID.
        Optionally retrieve all shops with their products.

    Product:
        Create products.
        Retrieve all products.
        Retrieve products by ID.

    Category:
        Create categories.
        Retrieve all categories.

    Hotline:
        Create and manage hotlines associated with shops.

Each endpoint includes proper data validation and error handling to ensure reliable and secure operations.
