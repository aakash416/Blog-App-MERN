import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormBlog from '../components/formBlog';

const EditBlogPost = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/blog/" + id)
            .then((res) => {
                setData(res.data)
            })
            .catch(error => {
                console.error("Error submitting form:", error);
                toast.error(error.response.data.message);
            });
    }, [id]);

    const handleUpdatedData = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/blog/" + id, data)
            .then((res) => {
                toast.success(res.data);
                navigate("/");
            })
            .catch(error => {
                console.error("Error updateing Blog:", error);
                toast.error(error.response.data.message);
            });
    }


    return (
        <FormBlog data={data} setData={setData} buttonName="Update Blog" handleSubmit={handleUpdatedData} />
    )
}

export default EditBlogPost;