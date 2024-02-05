import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getBlogPostById } from '../service/AuthService';

const ReadBlog = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        getBlogPostById(id).then((res) => {
            setData(res.data)
        })
            .catch(error => {
                console.error("Error submitting form:", error);
                toast.error(error.response.data.message);
            });
    }, [id]);
    return (
        <div>
            {data ? <><h1>{data.title}</h1>
                <p>{data.author}</p>
                <p>{data.body}</p></> : <h1>Loading...</h1>}
        </div>
    )
}

export default ReadBlog;