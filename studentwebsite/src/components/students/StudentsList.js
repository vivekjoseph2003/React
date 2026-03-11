import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import checkAuth from "../auth/checkAuth";

function StudentsList() {
    const [students, setStudents] = useState([]);
    const user = useSelector(store => store.auth.user);

    useEffect(() => {
        if (user) {
            axios.get('https://worksheet-student.mashupstack.com/students', {
                headers: {
                    Authorization: "Bearer " + user.token
                }
            }).then(response => {
                setStudents(response.data);
            }).catch(error => {
                console.log(error);
            });
        }
    }, [user]);

    return (
        <div className="container">
            <h1>Students List</h1>
            <ul className="list-group mt-3">
                {students.map((student, index) => (
                    <li key={index} className="list-group-item">
                        {student.name} - {student.age} years
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default checkAuth(StudentsList);