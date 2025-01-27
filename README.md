##Blog API

A simple CRUD API for managing blogs, built with Express.js and Sequelize using a PostgreSQL database. This API allows you to create, read, update, and delete blog posts. Swagger UI is integrated for API documentation and testing.

#Features
Create Blog: Add a new blog with title, content, and image.
Get All Blogs: Retrieve a list of all blogs.
Get Blog by ID: Retrieve a specific blog by its ID.
Update Blog: Update an existing blog's title, content, or image.
Delete Blog: Remove a blog from the database.
Swagger UI: Interactive API documentation for testing endpoints.
Getting Started
Prerequisites
Node.js: You should have Node.js installed on your system.
PostgreSQL: A PostgreSQL database running locally or on a cloud service (ensure your credentials are correctly set in the .env file).

#1. Clone the Repository
Clone the repository to your local machine:

git clone https://github.com/yourusername/blog-api.git

#2. Install Dependencies
Navigate to the project directory and install the necessary dependencies:

cd blog-api
npm install


#3. Configure Environment Variables
Create a .env file in the root directory (you can copy from .env.example if available) and add your PostgreSQL credentials:

USER=your_postgres_username
PASSWORD=your_postgres_password
HOST=localhost
DATABASE=blog_api
PORT=5000
FRONTEND_URL=http://localhost:3000  # Update as necessary


#4. Run Migrations
If you're using Sequelize and have defined models, you may need to run migrations to set up your database schema:

npx sequelize-cli db:migrate


#5. Start the Server
Run the server with the following command:
npm start
The server will start on the specified port (default 5000). You can now access the API.

#API Documentation (Swagger)
The API is documented using Swagger and can be accessed at the following URL:

http://localhost:5000/api-docs
The Swagger UI allows you to:

View all available API endpoints.
Send requests to the API directly from the documentation.


#API Endpoints
POST /api/add
Description: Creates a new blog post.
Body:
{
  "title": "Blog Title",
  "post": "Blog content",
  "image": "image_url"
}

GET /api/blogs
Description: Retrieves a list of all blogs.

GET /api/blogs/{id}
Description: Retrieves a specific blog by ID.
URL Parameters: id - The ID of the blog to fetch.

PUT /api/update/{id}
Description: Updates an existing blog post by ID.
URL Parameters: id - The ID of the blog to update.
Body:
{
  "title": "Updated Blog Title",
  "post": "Updated content",
  "image": "updated_image_url"
}

DELETE /api/delete/{id}
Description: Deletes a blog post by ID.
URL Parameters: id - The ID of the blog to delete.

#Testing with Postman
You can test the API using Postman by making requests to the following endpoints:

POST /api/add - Create a new blog.
GET /api/blogs - Get all blogs.
GET /api/blogs/{id} - Get a specific blog by ID.
PUT /api/update/{id} - Update a specific blog.
DELETE /api/delete/{id} - Delete a specific blog.
Make sure to include the correct headers (Content-Type: application/json) and request body (where applicable).

Contributing
Feel free to fork this repository and create pull requests. If you find any bugs or issues, please open an issue in the repository.
