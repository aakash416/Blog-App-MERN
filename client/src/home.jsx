// import React, { useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// const Home = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     useEffect(() => {
//         if (!location.state?.data) {
//             navigate("/login")
//         }
//     }, [location.state?.data, navigate])

//     const handleNewBlogPost = () => {
//         navigate('/newblogpost');
//     };

//     return (
//         <><h1>welcome to {location.state?.data ? <>{location.state?.data.firstName} </> : <>Home Pages</>}</h1>
//             <button onClick={handleNewBlogPost}>Post New Blog</button>
//         </>
//     )
// }

// export default Home;




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
        axios.get("http://localhost:8000/allblogpost")
            .then((res) => {
                setData(res.data)
            })
            .catch(error => {
                console.error("Error submitting form:", error);
                toast.error(error.response.data.message);
            });
    }, []);

    return (
        <>
            <div className='container mt-5 mb-4'>
                <button class="btn btn-primary" onClick={handleNewBlogPost}>Post New Blog</button>
            </div>
            <div className='container d-flex justify-content-around flex-wrap'>
                {
                    data.map((value, index) => {
                        return (<div key={index}>
                            <div className="card m-2" style={{ width: "24rem", height: "12rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{value.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Author: {value.author}</h6>
                                    <p className="card-text">
                                        {value.body.length > 170 ? <p> {value.body.slice(0, 170)}   <button onClick={() => navigate(`/${value._id}`)}>
                                            Read More
                                        </button>  </p> : <p>{value.body}</p>}
                                    </p>
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





