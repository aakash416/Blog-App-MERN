import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteBlogPostById, getMyBlogPostById } from '../service/AuthService';

const MyBlog = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getMyBlogPostById(localStorage.getItem("userId")).then((res) => {
            setData(res.data)
        })
            .catch(error => {
                console.error("Error submitting form:", error);
                toast.error(error.response.data.message);
            });
    }, []);


    const handleDeleteBlog = (id) => {
        deleteBlogPostById(id).then((res) => {
            toast.warn(res.data);
            setData(data.filter((value) => value._id !== id))
        })
            .catch(error => {
                console.error("Error submitting form:", error);
                toast.error(error.response.data.message);
            });

    }

    return (
        <div>  <div className='container d-flex justify-content-around flex-wrap'>
            {
                data.map((value, index) => {
                    return (<div key={index}>
                        <div className="card m-2" style={{ width: "24rem", height: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Author: {value.authorId.firstName}</h6>
                                <p className="card-text">
                                    {value.body.length > 170 ? <> {value.body.slice(0, 170)}   <button className='btn btn-success m-2' onClick={() => navigate(`/read/${value._id}`)}>
                                        Read More
                                    </button>  </> : <>{value.body}</>}
                                </p>

                                <button className='btn btn-info m-2' onClick={() => navigate(`/edit/${value._id}`)}> Edit Blog</button>
                                <button className='btn btn-danger m-2' onClick={() => handleDeleteBlog(value._id)}> Delete Blog</button>
                            </div>
                        </div>
                    </div >)
                })
            }
        </div></div>
    )
}

export default MyBlog