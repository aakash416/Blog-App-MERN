import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

const NewBlogPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const navagate = useNavigate();

    const handleNewblogpost = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/newblogpost", { title, body, author })
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
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <form onSubmit={handleNewblogpost}>
                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label">
                                Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstname"
                                name='firstname'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
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
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
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
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </div>


                        <button type="submit" className="btn btn-primary">
                            Create New Poast
                        </button>
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </div>


    )
}

export default NewBlogPost;