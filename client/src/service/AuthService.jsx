import axios from 'axios'

// Base URL for the API
const API = "http://localhost:8000";

// Creates a new user.
export const createUser = async (firstName, lastName, email, password, phoneNumber) => {
    return await axios.post(`${API}/user/signup`, { firstName, lastName, email, password, phoneNumber })
}

// Logs in a user.
export const loginUser = async (email, password) => {
    return await axios.post(`${API}/user/login`, { email, password });
}

// Creates a new blog post.
export const createBlogPost = async (title, body, authorId) => {
    return await axios.post(`${API}/blog`, { title, body, authorId });
}

// Retrieves all blog posts.
export const getAllBlogPosts = async () => {
    return await axios.get(`${API}/blog`);
}

// Retrieves a single blog post by ID.
export const getBlogPostById = async (id,) => {
    return await axios.get(`${API}/blog/${id}`);
}

// Retrieves a user's own blog post by ID.
export const getMyBlogPostById = async (id,) => {
    return await axios.get(`${API}/blog/myblog/${id}`);
}

// Edits an existing blog post by ID.
export const editBlogPostById = async (id, data) => {
    return await axios.put(`${API}/blog/${id}`, data);
}

// Deletes a blog post by ID.
export const deleteBlogPostById = async (id,) => {
    return await axios.delete(`${API}/blog/${id}`);
}