import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import FormBlog from '../components/formBlog';
import { createBlogPost } from '../service/AuthService';
const CreateNewBlogPost = () => {
    const [data, setData] = useState({ title: "", body: "" });
    const navagate = useNavigate();
    const handleNewblogpost = (e) => {
        e.preventDefault();
        createBlogPost(data.title, data.body, localStorage.getItem("userId"))
            .then(() => {
                toast.success("New Blog Susccessfully Created")
                navagate("/my-blog")
            })
            .catch(error => {
                console.error("Error submitting form:", error);
                toast.warn(error.response.data.message);
            });

    }
    return (
        <FormBlog data={data} setData={setData} buttonName="Create Blog" handleSubmit={handleNewblogpost} />
    )
}

export default CreateNewBlogPost;