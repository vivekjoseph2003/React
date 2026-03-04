import Navbar from "./Navbar";

function About(){

    function showMessage(){
        const headingColor = "lightblue";
        document.getElementById("aboutHeading").style.backgroundColor = headingColor;
        document.getElementById("aboutMsg").innerHTML = "Hello from React! I love this page!";
    }

    return(
        <div>
            <Navbar/>

            <div className="card p-4 mb-4">
                <h1 id="aboutHeading">This is the About Page</h1>

                <p id="aboutMsg">
                    Click the button to see my enthusiasm!
                </p>

                <button className="btn btn-primary" onClick={showMessage}>
                    Show Enthusiasm
                </button>
            </div>
        </div>
    );
}

export default About;