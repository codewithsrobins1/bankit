# Fitted App

A fullstack MERN application where users can save their outfits or articles of clothing.

## Demo

![demo](https://github.com/codewithsrobins1/fitted-mern-app/blob/main/fittedAppSS.PNG)

## Link to Live Site

https://fitted-app.netlify.app/

## Objectives

* Build a fullstack MERN application and deploy to Heroku
* Implement Material UI for UI design

## Features to Possibly Implement in Future

* Authentification for users
* Users can share their outfits with a generated link

## Built With

* React
* MongoDB
* Express
* Node
* Redux

## Dependencies

1.	React Router (https://reacttraining.com/react-router/) – Page Transitions for routing to keep UI in sync with URL
2.  Axios (https://github.com/axios/axios) -  Promise based HTTP client for the browser and node.js
3.  Material UI (https://material-ui.com/) - Build React Components
4.  Redux (https://redux.js.org/) - State management system
5.  Redux Thunk (https://github.com/reduxjs/redux-thunk) - A middleware that extends the Redux store's abilities, and lets you write async logic that interacts with the store
6.  React-file-base64 (https://www.npmjs.com/package/react-file-base64) - React Component for Converting Files to base64

## Getting Started

To get a local copy up and running follow these steps using your terminal.

### Installation

1. Clone the repo
```sh
git clone https://github.com/codewithsrobins1/fitted-mern-app
```
2. Install NPM packages
```sh
npm install i

```
3. Start Client
```sh
npm start

```

## React Components
* App.js – Renders the application. Contains the various routes
*	Form.js - Serves as the landing page for the application
*	Posts.js - The navigation bar for all pages
* Post.js - Component that shows all the movies after a search a complete and "More Details" is clicked

## Component Tree

To help visualize the structure of the components, please reference the below structure,

- App.js
  - Posts
    - Post
  - Forms

