import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditBlogPost = () => {

    const navigate = useNavigate();
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
    
    const handleUpdatedData = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/blogbyid/" + id, data)
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
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <form onSubmit={handleUpdatedData}>
                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label">
                                Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstname"
                                name='firstname'
                                value={data.title}
                                onChange={(e) => setData({ ...data, title: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">
                                Body
                            </label>
                            <textarea
                                type="text"
                                className="form-control"
                                id="lastName"
                                name='lastName'
                                value={data.body}
                                onChange={(e) => setData({ ...data, body: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">
                                Author
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name='lastName'
                                value={data.author}
                                onChange={(e) => setData({ ...data, author: e.target.value })}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Update Blog
                        </button>
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default EditBlogPost;