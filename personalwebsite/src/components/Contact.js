import Navbar from "./Navbar";

function Contact(){

    function showMessage(){
        const headingColor = "lightblue";
        document.getElementById("contactHeading").style.backgroundColor = headingColor;
        document.getElementById("contactMsg").innerHTML = "Hello from React! I love this page!";
    }

    return(
        <div>
            <Navbar/>

            <div className="card p-4 mb-4">
                <h1 id="contactHeading">This is the Contact Page</h1>

                <p id="contactMsg">
                    Click the button to see my enthusiasm!
                </p>

                <button className="btn btn-primary" onClick={showMessage}>
                    Show Enthusiasm
                </button>
            </div>
        </div>
    );
}

export default Contact;