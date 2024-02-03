import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import FormBlog from '../components/formBlog';

const NewBlogPost = () => {
    const [data, setData] = useState({ title: "", body: "", author: "" });
    const navagate = useNavigate();

    const handleNewblogpost = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/blog", data)
            .then((result) => {
                toast.success("New Blog Susccessfully Created")
                navagate("/")

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

export default NewBlogPost;