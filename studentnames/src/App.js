import { Link, useNavigate } from "react-router-dom";

function App() {

    const navigate = useNavigate();

    function goToDefaultStudent(){
        navigate('/student/Riya');
    }

    return(
        <div>
            <h1>Student List</h1>

            <ul>
                <li><Link to="/student/Harry">Harry</Link></li>
                <li><Link to="/student/Chris">Chris</Link></li>
                <li><Link to="/student/Henry">Henry</Link></li>
            </ul>

            <button onClick={goToDefaultStudent}>
                Go to Default Student
            </button>
        </div>
    );
}

export default App;