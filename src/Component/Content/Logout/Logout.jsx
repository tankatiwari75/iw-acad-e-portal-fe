import React from 'react';

const Logout = () => {
    const location = () =>{
        location.replace("https://www.w3schools.com")
    }
    return (
        <div>
            {location}
        </div>
    );
};

export default Logout;