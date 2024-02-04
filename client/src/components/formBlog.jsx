import React from 'react'

const FormBlog = ({ data, setData, buttonName, handleSubmit }) => {


    return (
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit" className="btn btn-primary">
                            {buttonName}
                        </button>
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default FormBlog