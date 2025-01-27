# Blog API

## Description
A simple CRUD API for managing blogs, built with Express.js, Sequelize, and PostgreSQL. This API allows you to create, read, update, and delete blog posts. Swagger UI is integrated for API documentation and testing.

## Features
- **Create a new blog**
- **View all blogs**
- **View a specific blog by ID**
- **Update an existing blog**
- **Delete a blog**
- **Swagger UI for API documentation**

## Technologies Used
- **Node.js**
- **Express.js**
- **Sequelize (ORM for PostgreSQL)**
- **PostgreSQL**
- **Swagger (for API documentation)**

## Setup

### Prerequisites
- **Node.js**
- **PostgreSQL** (either locally or using a cloud provider like ElephantSQL)

### Install Dependencies
Run the following command to install the necessary dependencies:
```bash
npm install
```

### Configure Environment Variables
Create a `.env` file in the root directory and add the following variables for your PostgreSQL configuration:
```env
USER=your_postgres_username
PASSWORD=your_postgres_password
HOST=localhost
DATABASE=blog_api
PORT=5000
FRONTEND_URL=http://localhost:3000  # Update if necessary
```

### Run Migrations
If you're using Sequelize to manage your database, run migrations to set up the schema:
```bash
npx sequelize-cli db:migrate
```

### Run the Application
Start the server with the following command:
```bash
npm start
```
Your server should now be running on [http://localhost:5000](http://localhost:5000).

## API Documentation (Swagger)
The API documentation is available via Swagger at the following URL:
[http://localhost:5000/api-docs](http://localhost:5000/api-docs)

You can view and test the available API endpoints directly from the Swagger UI.

## API Endpoints

### POST `/api/add`
**Description:** Creates a new blog post.

**Request Body:**
```json
{
  "title": "Blog Title",
  "post": "Blog content",
  "image": "image_url"
}
```

### GET `/api/blogs`
**Description:** Retrieves a list of all blogs.

### GET `/api/blogs/{id}`
**Description:** Retrieves a specific blog by ID.

**URL Parameter:** `id` (ID of the blog to retrieve).

### PUT `/api/update/{id}`
**Description:** Updates an existing blog post by ID.

**URL Parameter:** `id` (ID of the blog to update).

**Request Body:**
```json
{
  "title": "Updated Blog Title",
  "post": "Updated content",
  "image": "updated_image_url"
}
```

### DELETE `/api/delete/{id}`
**Description:** Deletes a blog post by ID.

**URL Parameter:** `id` (ID of the blog to delete).

## Testing with Postman
You can test the API using Postman by making requests to the following endpoints:

- **POST `/api/add`**: Create a new blog.
- **GET `/api/blogs`**: Get all blogs.
- **GET `/api/blogs/{id}`**: Get a specific blog by ID.
- **PUT `/api/update/{id}`**: Update a specific blog.
- **DELETE `/api/delete/{id}`**: Delete a specific blog.

Make sure to include the correct headers (`Content-Type: application/json`) and request body (where applicable).

## Contributing
Feel free to fork this repository and submit pull requests for any improvements or fixes. If you encounter any issues, please open a GitHub issue in the repository.

---
**Happy Coding!**
