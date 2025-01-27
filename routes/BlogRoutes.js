const express = require('express');
const BlogController = require('../controllers/BlogControllers');
const router = express.Router();

/**
 * @swagger
 * /api/add:
 *   post:
 *     description: Create a new blog
 *     parameters:
 *       - name: title
 *         in: body
 *         description: Title of the blog
 *         required: true
 *         type: string
 *       - name: post
 *         in: body
 *         description: Content of the blog
 *         required: true
 *         type: string
 *       - name: image
 *         in: body
 *         description: Image URL of the blog
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: Blog created successfully
 *       400:
 *         description: Error creating blog
 */
router.post('/add', BlogController.addBlog);

/**
 * @swagger
 * /api/blogs:
 *   get:
 *     description: Get all blogs
 *     responses:
 *       200:
 *         description: List of all blogs
 *       500:
 *         description: Internal Server Error
 */
router.get('/blogs', BlogController.getAllBlogs);

/**
 * @swagger
 * /api/blogs/{id}:
 *   get:
 *     description: Get a specific blog by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: ID of the blog to retrieve
 *     responses:
 *       200:
 *         description: Blog retrieved successfully
 *       404:
 *         description: Blog not found
 */
router.get('/blogs/:id', BlogController.getOneBlog);

/**
 * @swagger
 * /api/update/{id}:
 *   put:
 *     description: Update an existing blog
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: ID of the blog to update
 *       - name: title
 *         in: body
 *         description: Title of the blog
 *         required: false
 *         type: string
 *       - name: post
 *         in: body
 *         description: Content of the blog
 *         required: false
 *         type: string
 *       - name: image
 *         in: body
 *         description: Image URL of the blog
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Blog updated successfully
 *       404:
 *         description: Blog not found
 */
router.put('/update/:id', BlogController.updateBlog);

/**
 * @swagger
 * /api/delete/{id}:
 *   delete:
 *     description: Delete a blog by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: ID of the blog to delete
 *     responses:
 *       200:
 *         description: Blog deleted successfully
 *       404:
 *         description: Blog not found
 */
router.delete('/delete/:id', BlogController.deleteBlog);

module.exports = router;
