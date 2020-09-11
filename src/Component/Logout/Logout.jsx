import React, { useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        logout();
      }, [])
    const logout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        window.location="/";
    }
    return (
        <div>
           Logging out...
        </div>
    );
};

export default Logout;