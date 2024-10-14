import React, { useState } from 'react';

const NewsItem = ({ title, description, src, url }) => {
    const [loading, setLoading] = useState(true); // State to track loading status

    return (
        <div className="card bg-black text-light mb-3 mx-3 my-3 px-2 py-2" style={{ maxWidth: '340px' }}>
            {loading && (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                    <div className="spinner-border text-danger"  role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <img 
                src={src} 
                style={{ width: '325px', height: '200px', display: loading ? 'none' : 'block' }} 
                className="card-img-top" 
                alt="..." 
                onLoad={() => setLoading(false)} // Hide loader when image is loaded
            />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">{description ? description.slice(0, 90) : "Information about something happened in the world"}</p>
                <a href={url} className="btn btn-primary">Read More..</a>
            </div>
        </div>
    );
};

export default NewsItem;