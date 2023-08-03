# Product Listing Page

This project is a product listing page built with React.js. It's a Single Page Application that allows users to view a list of smart home products, add them to a cart, and remove them from the cart.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Running the app](#running-the-app)
- [Running the tests](#running-the-tests)
- [Building the app for production](#building-the-app-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Challenges and Summary](#challenges-and-summary)

## Features

- **Product Listing**: The app fetches product data from a local JSON file and displays them in a grid layout. Each product has an image, name, description, price, and rating.
- **Product Sorting**: Users can sort the products by their name (in ascending or descending order) or price (in ascending or descending order).
- **Product Filtering**: Users can filter the products by category and price.
- **Add to Cart**: Users can add products to a cart. When a product is added to the cart, the app provides visual feedback by changing the color of the "Add to Cart" button and displaying a message.
- **Remove from Cart**: Users can remove products from the cart. The app asks for confirmation before removing a product.
- **Cart Summary**: The app shows the number of products in the cart and the total price of the products.

## Technologies Used

- [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/): A collection of navigational components for React apps.
- [React Bootstrap](https://react-bootstrap.github.io/): Bootstrap components built with React.
- [React Icons](https://react-icons.github.io/react-icons/): Icon library for React.
- [React Star Ratings](https://www.npmjs.com/package/react-star-ratings): A customizable React star ratings component.
- [UUID](https://www.npmjs.com/package/uuid): For creating unique ids.
- [Create React App](https://create-react-app.dev/): A tool to set up a modern web app by running one command.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/peter1998/NexusProductMatrix.git`.
2. Navigate into the project directory: `cd product-listing-page`.
3. Install the dependencies: `npm install`.
4. Start the application: `npm start`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Deployment

The project can be deployed using any static site hosting service such as Netlify or Vercel. Here is a guide on how to deploy a React application on Netlify:

1. Run `npm run build` to create a production build of your application.
2. Create a new site in Netlify and link it to your GitHub repository.
3. Set the publish directory to `build` (or the directory specified in your `package.json` if different).
4. Deploy your site.

## Contributing

We welcome contributions to this project. To contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them with a useful message.
4. Push your branch to your fork.
5. Create a pull request from your fork to the main repository.

## Challenges and Summary

The primary challenge in this project was managing the state of the application, especially the cart state and the state for each product tile. The React Context API was used to manage the global cart state, while the local state was used for each product tile.

Each product tile has two primary states: the default state and the "added to cart" state. When a product is added to the cart, its state changes to "added to cart", the "Add to Cart" button changes color, and a message is displayed. After 3 seconds, the state reverts to the default state. The setTimeout function was used to achieve this.

The cart functionality was implemented using the Context API. The cart state is an array of products. When a product is added to the cart, it's added to the array. When a product is removed, it's removed from the array. The total price of the products in the cart is computed by reducing the cart array.

The sorting and filtering functionalities were implemented using JavaScript's sort and filter functions. The filter and sort options are stored in the state and used to sort and filter the products array before rendering.

The project was styled using CSS and Bootstrap. The CSS transition property was used to create the hover effect for the product tiles and the color change effect for the "Add to Cart" button.

Overall, this project provided a great opportunity to practice using React.js, managing state, working with arrays, and creating user-friendly interfaces. The experience has been insightful and rewarding, leading to a deeper understanding of React.js and its ecosystem. The application built serves as a solid foundation for further enhancements and features.
