const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const BlogRoutes = require('./routes/BlogRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
dotenv.config();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Blog API',
      version: '1.0.0',
      description: 'A simple CRUD API for managing blogs',
    },
    host: 'localhost:5000',
    basePath: '/',
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/', BlogRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
