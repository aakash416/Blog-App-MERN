import React from 'react'

const ButtonForm = ({ value }) => {
    return (
        <button type="submit" className="btn btn-primary">
            {value}
        </button>
    )
}

export default ButtonForm