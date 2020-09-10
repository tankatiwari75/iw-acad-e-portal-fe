import React, {useEffect, useState} from 'react';
import "./profile.css"

function Profile() {
    const username = localStorage.getItem("username")
    const [userData, setUserData] = useState({});
    const [userDetailData, setUserDetailData] = useState({});


    useEffect(() => {
        fetch_user_data()
    })

    const fetch_user_data = async() => {
        if (username.slice(0,4) =="stu."){
            const fetch_student_data = await fetch("http://127.0.0.1:8000/adminsite/studentregister/",
            {
              method: 'GET',
              headers: {
               "Authorization": `Token ${localStorage.getItem('token')}`,
               "Content-Type": "application/json"
             }, 
            })
            const fetched_student_data = await fetch_student_data.json();
            const filter_student_data = await fetched_student_data.filter(student_data => student_data.student_user.username === username);
            // console.log(filter_student_data[0].student_user)
            setUserDetailData(filter_student_data[0].student_user);
            // console.log(userDetailData)
            setUserData(filter_student_data[0])

            console.log(userData)
        }
        else if(username.slice(0,4) == "tea."){
            const fetch_teacher_data = await fetch("http://127.0.0.1:8000/adminsite/teacherregister/",
            {
              method: 'GET',
              headers: {
               "Authorization": `Token ${localStorage.getItem('token')}`,
               "Content-Type": "application/json"
             }, 
            })
            const fetched_teacher_data = await fetch_teacher_data.json();
            const filter_teacher_data = await fetched_teacher_data.filter(teacher => teacher.teacher_user.username == username);
            console.log(filter_teacher_data)
            console.log(fetched_teacher_data)
            setUserDetailData(filter_teacher_data[0].teacher_user);
            setUserData(filter_teacher_data[0])


    }
    else{
        const fetch_admin_data = await fetch();
        console.log("admin data to be fetched")
    }
}

return (
<div>
    <div align='center'>
    <div className="card center" style={{width: '18rem'}}>
        {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
        <div className="card-body">
            <h5 className="card-title capital   ">{userDetailData.first_name + " " + userDetailData.middle_name + " " + userDetailData.last_name}</h5>
            {/* <p className="card-text">This paragraph defines the User</p> */}
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item text-left">Username: {userDetailData.username}</li>
            <li className="list-group-item text-left">Email: {userDetailData.email}</li>
            <li className="list-group-item text-left">Address: Kathmandu</li>
            
            {/* <li className="list-group-item text-left">John Doe</li> */}

            <li className="list-group-item text-left">Contact: {!userData.phone_no ? userData.parents_number : userData.phone_no}</li>
<li className="list-group-item text-left">Unique Identification Number: {userData.id ? userData.id :userData.teacher_unique_id}</li>

            {/* if student */}
            {userData.class_number ? (<li className="list-group-item text-left">Class: {userData.class_number}</li>) : null}
            {userData.gender ? (<li className="list-group-item text-left">Gender: {userData.gender}</li>) : null}
            
            <li className="list-group-item text-left">Date of Birth: 111</li>
            <li className="list-group-item text-left">Address: Chobhar</li>


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