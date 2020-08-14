import React from 'react';

function Profile() {
return (
<div>
    <div align='center'>
    <div className="card center" style={{width: '18rem'}}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">John Doe</h5>
            {/* <p className="card-text">This paragraph defines the User</p> */}
        </div>
        <ul className="list-group list-group-flush">
            {/* <li className="list-group-item text-left">John Doe</li> */}
            <li className="list-group-item text-left">Address: Kathmandu</li>
            <li className="list-group-item text-left">Contact: 1234567890</li>
        </ul>
        <div className="card-body">
            <a href="#" className="card-link">Edit Profile</a>
            {/* <a href="#" className="card-link">Done</a> */}
        </div>
    </div>
</div>
</div>
);
}

export default Profile;