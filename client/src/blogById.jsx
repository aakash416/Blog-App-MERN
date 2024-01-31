import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const BlogById = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/blogbyid/" + id)
            .then((res) => {
                setData(res.data)
            })
            .catch(error => {
                console.error("Error submitting form:", error);
                toast.error(error.response.data.message);
            });
    }, [id]);
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.author}</p>
            <p>{data.body}</p>
        </div>
    )
}

export default BlogById;