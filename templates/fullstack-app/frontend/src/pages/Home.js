import React, { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        fetch('http://localhost:5000/api/hello')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => setError(error.message));
    }, []);

    if (error) {
        return <div>Error fetching data: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{data.message}</h1>
        </div>
    );
};

export default Home;
