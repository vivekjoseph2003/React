import Navbar from "./components/Navbar";

function App(){

    function showMessage(){
        const headingColor = "lightblue";
        document.getElementById("homeHeading").style.backgroundColor = headingColor;
        document.getElementById("homeMsg").innerHTML = "Hello from React! I love this page!";
    }

    return(
        <div>
            <Navbar/>

            <div className="card p-4 mb-4">
                <h1 id="homeHeading">This is the Home Page</h1>

                <p id="homeMsg">
                    Click the button to see my enthusiasm!
                </p>

                <button className="btn btn-primary" onClick={showMessage}>
                    Show Enthusiasm
                </button>
            </div>
        </div>
    );
}

export default App;