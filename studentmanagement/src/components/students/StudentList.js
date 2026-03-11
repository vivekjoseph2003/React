import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import checkAuth from "../auth/checkAuth";

function StudentList() {

    var [students, setStudents] = useState([]);
    var user = useSelector(store => store.auth.user);

    useEffect(() => {
        if (user) { 
            axios.get(
                'https://worksheet-student.mashupstack.com/students',
                { headers: { 'Authorization': "Bearer " + user.token } }
            ).then(response => {
                setStudents(response.data);
            })
        }
    }, [user]);

    return (
        <div className="container">
            <h1>Student List</h1>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name} - {student.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default checkAuth(StudentList);