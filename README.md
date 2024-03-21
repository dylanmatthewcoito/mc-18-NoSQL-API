# Module 18 Challenge: NoSQL Social Network API

## Description

The Social Network API is a backend application that provides a robust set of API endpoints for managing users, thoughts, and reactions in a social network setting. It is built using Express.js, MongoDB, and Mongoose, allowing for efficient data storage and retrieval.

With this API, you can perform various operations such as creating users, adding friends to users' friend lists, creating and deleting thoughts, and adding and removing reactions to thoughts. The API follows RESTful principles and returns responses in JSON format.

## Installation
To run the Social Network API locally, follow these steps:

1. Clone the repository:
   ```
     git@github.com:dylanmatthewcoito/mc-18-NoSQL-API.git
   ```

2. Navigate to the project directory:
   ```
   cd social-network-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up the MongoDB database:
   - Make sure you have MongoDB installed on your machine.
   - Update the MongoDB connection URL in the `config/connection.js` file if necessary.

5. Seed the database (optional):
   - Run the following command to seed the database with sample data:
     ```
     node utils/seed.js
     ```

6. Start the server:
   ```
   npm start
   ```

The API server will start running at `http://localhost:3001/`.

![Social Network API Routes](https://github.com/dylanmatthewcoito/mc-18-NoSQL-API/assets/71201051/da1449e7-90fd-4ac6-bd10-6b2c03758861)

## Usage
Once the server is running, you can test the API routes using a tool like Insomnia or Postman. Here are the available routes:

User Routes:
- GET /api/users - Get all users
- GET /api/users/:id - Get a single user by ID
- POST /api/users - Create a new user
- PUT /api/users/:id - Update a user by ID
- DELETE /api/users/:id - Delete a user by ID
- POST /api/users/:userId/friends/:friendId - Add a friend to a user's friend list
- DELETE /api/users/:userId/friends/:friendId - Remove a friend from a user's friend list

Thought Routes:
- GET /api/thoughts - Get all thoughts
- GET /api/thoughts/:thoughtId - Get a single thought by ID
- POST /api/thoughts - Create a new thought
- PUT /api/thoughts/:thoughtId - Update a thought by ID
- DELETE /api/thoughts/:thoughtId - Delete a thought by ID
- POST /api/thoughts/:thoughtId/reactions - Create a reaction for a thought
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Delete a reaction from a thought

Make sure to replace the route parameters (`:id`, `:thoughtId`, `:userId`, `:friendId`, `:reactionId`) with actual values when making requests.

To create or update data, send a POST or PUT request with the necessary data in the request body. The API expects the data to be in JSON format.

When a request is successful, the API will return the appropriate response with a success status code. If an error occurs, the API will return an error response with a descriptive error message.

Feel free to explore and test the different routes to interact with the Social Network API!
