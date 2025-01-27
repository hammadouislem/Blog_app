require('dotenv').config();
const { Blog } = require('../models');
const addBlog = async (req, res) => {
  try {
    const { title, image, post } = req.body;

    let newBlog = await Blog.create({ title, post, image });

    if (!newBlog) {
      return res.status(400).send('Error creating blog');
    }

    return res.status(201).json(newBlog);

  } catch (e) {
    console.error('Error creating blog:', e);
    res.status(500).send('Internal Server Error');
  }
};

const getAllBlogs = async (req, res) => {
  try {
    let blogs = await Blog.findAll();
    return res.status(200).json(blogs);
  } catch (e) {
    console.error('Error fetching blogs:', e);
    res.status(500).send('Internal Server Error');
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, post, image } = req.body;

    const blog = await Blog.findByPk(id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    blog.title = title || blog.title;
    blog.post = post || blog.post;
    blog.image = image || blog.image;

    await blog.save();
    return res.status(200).json(blog);

  } catch (e) {
    console.error('Error updating blog:', e);
    res.status(500).send('Internal Server Error');
  }
};


const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findByPk(id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    await blog.destroy();

    return res.status(200).json({ message: 'Blog deleted successfully' });

  } catch (e) {
    console.error('Error deleting blog:', e);
    res.status(500).send('Internal Server Error');
  }
};
const getOneBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    return res.status(200).json(blog);
  } catch (e) {
    console.error('Error fetching blogs:', e);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  addBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
  getOneBlog
};