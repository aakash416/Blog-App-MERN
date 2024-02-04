import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import FormBlog from '../components/formBlog';

const CreateNewBlogPost = () => {
    const [data, setData] = useState({ title: "", body: "", authorId: "" });
    const navagate = useNavigate();
    const handleNewblogpost = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/blog", { title: data.title, body: data.body, authorId: localStorage.getItem("userId") })
            .then((result) => {
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