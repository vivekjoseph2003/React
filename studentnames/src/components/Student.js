import { useParams } from "react-router-dom";

function Student() {
    const params = useParams();

    return (
        <div>
            <h1>Welcome, {params.name}!</h1>
        </div>
    );
}

export default Student;