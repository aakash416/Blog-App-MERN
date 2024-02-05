import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormBlog from '../components/formBlog';
import { getBlogPostById, editBlogPostById } from '../service/AuthService';

const EditBlogPost = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        getBlogPostById(id)
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
        editBlogPostById(id, data).then((res) => {
            toast.success(res.data);
            navigate("/my-blog");
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