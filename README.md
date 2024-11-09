# Product Lookup Tool

Welcome to the **Product Lookup Tool**! This is a simple React application that allows users to search for a product by name and view its details such as price, rating, and availability. It fetches data from an external API and displays it in a clean, easy-to-read format.

## Setup Instructions

To get started with the project, follow the steps below:

### 1. Clone the Repository

Begin by cloning the repository to your local machine:

git clone https://github.com/Niharika222/product_search


### 2. Install Dependencies

After cloning the repository, navigate into the project directory and install the necessary dependencies:

cd product-lookup
npm install

### 3. Run the Application

Now, you can run the app locally by using the following command:

npm start


The app will start and be available at [http://localhost:3000](http://localhost:3000).

## Features

- **Product Search**: Type in the product name to search for it and search functionality is based on the product title.
- **Product Details**: Once a product is found, you'll see its name, price, rating, and availability status.
- **Error Handling**: If the product can't be found or there’s an issue with the API, an error message will be displayed.

## API Information

This application fetches product data from the following API and search functionality is based on the product title.

- [Fake Store API](https://fakestoreapi.com/products)

## Dependencies

This project uses the following dependencies:

- **React**: The core library for building the UI.
- **Axios**: A popular library for making HTTP requests to fetch product data from the API.

## Optional Enhancements

- **Debounced Search**: The search input is debounced for 500ms to prevent excessive API calls while typing.
- **Styling**: Basic styling is included for the product card. You can customize the look further if needed.

## Learn More

You can explore more about the technologies used in this project:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Axios Documentation](https://axios-http.com/docs/intro)
