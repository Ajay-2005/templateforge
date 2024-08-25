



# Full Stack Template

A minimal full-stack template for starting new projects with a React frontend and an Express.js backend. This template includes basic boilerplate code for both the frontend and backend, with built-in support for API interactions and environment configuration.

## Features

- **Frontend**: React app with basic components and API fetching.
- **Backend**: Express.js server with sample API routes.
- **Environment Configuration**: `.env` files for managing environment variables.
- **Dependencies**: Essential packages for both frontend and backend.
- **Scripts**: Convenient npm scripts for running both frontend and backend servers.



## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)



####Environment Configuration

Create a .env file in both the backend and frontend directories.

Backend .env:

env
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/your-database

```



Frontend .env:
```
REACT_APP_BACKEND_URL=http://localhost:3000
```
##$Running the Application

 Start the backend server:

   
```
cd backend
npm start
```
Start the frontend development server:


```
    cd ../frontend
    npm start
```
The backend server will run on http://localhost:3000 and the frontend development server will typically run on http://localhost:3001.
API Endpoints

    GET /api/hello: Example endpoint to test the backend API.


        package.json: Defines frontend dependencies and scripts.
