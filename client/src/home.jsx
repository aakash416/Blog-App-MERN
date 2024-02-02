import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Home = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const handleNewBlogPost = () => {
        navigate('/newblogpost');
    };

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login")
        }
    }, [navigate])

    useEffect(() => {
        axios.get("http://localhost:8000/allblogpost")
            .then((res) => {
                setData(res.data)
            })
            .catch(error => {
                console.error("Error submitting form:", error);
                toast.error(error.response.data.message);
            });
    }, []);



    const handleDeleteBlog = (id) => {

        axios.delete("http://localhost:8000/blogbyid/" + id)
            .then((res) => {
                toast.warn(res.data);
                setData(data.filter((value) => value._id !== id))
            })
            .catch(error => {
                console.error("Error submitting form:", error);
                toast.error(error.response.data.message);
            });

    }
    const handllogOut = () => {
        toast.warn("User Logged Out")
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <>
            <div className='container mt-5 mb-4'>
                <button className="btn btn-primary m-2" onClick={handleNewBlogPost}>Post New Blog</button>
                <button className="btn btn-primary m-2" onClick={handllogOut}>Log Out</button>
            </div>
            <div className='container d-flex justify-content-around flex-wrap'>
                {
                    data.map((value, index) => {
                        return (<div key={index}>
                            <div className="card m-2" style={{ width: "24rem", height: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{value.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Author: {value.author}</h6>
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
            </div>
        </>
    )
}

export default Home;




// const data = [32, 33, 16, 40];
// const result = data.filter((value) => value !== 32);



// console.log(result);
