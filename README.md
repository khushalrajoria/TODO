# Todo App using Node.js and MongoDB

This is a simple Todo application built using Node.js and MongoDB. It allows users to create, read, update, and delete tasks (CRUD operations) using a RESTful API.

## Features

- **Create**: Add new tasks to the list.
- **Read**: View all tasks or specific tasks.
- **Update**: Modify existing tasks.
- **Delete**: Remove tasks from the list.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing tasks.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **Postman**: For testing the RESTful API endpoints.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- MongoDB installed locally or accessible remotely (you can use MongoDB Compass for local hosting).

### Installing Dependencies

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd todo-app-nodejs-mongodb
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Setting Up MongoDB

1. Start MongoDB service:
   ```bash
   mongod
   ```

2. Connect to MongoDB using MongoDB Compass or CLI.

### Running the Application

1. Start the server:
   ```bash
   npm start
   ```

2. The server should now be running on `http://localhost:3000`.

### Testing API Endpoints

Use Postman or any API testing tool to test the following endpoints:

- `GET /tasks`: Retrieve all tasks.
- `POST /tasks`: Create a new task.
- `GET /tasks/:taskId`: Retrieve a specific task.
- `PUT /tasks/:taskId`: Update a task.
- `DELETE /tasks/:taskId`: Delete a task.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by [YouTube video by Proto Coders Point complete playlist covering backend as well as front-end with shared source code on a seperate website]([http://todomvc.com/](https://www.youtube.com/watch?v=rCt_Yad_4MY&list=PLGIDomk5-zo1tueqtvrFgUQ13ioA9yChC)).
