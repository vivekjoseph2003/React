import "./App.css";
function App() {
  const name="Harry";
  const age=21;
  const isStudent=true;
  const headingColor="lightblue";
  const favoriteHobbies=["Reading","Gaming","Sports"];
  function showMessage() {
    document.getElementById("message").innerHTML="Hello from React! I love my hobbies!";
    document.getElementById("mainHeading").style.backgroundColor=headingColor;
  }
  const hobbyListFor=[];
  for (let i=0;i<favoriteHobbies.length;i++){
    hobbyListFor.push(<li key={i}>{favoriteHobbies[i]}</li>);
  }
  return (
    <div className="container mt-4">
      <h1 id="mainHeading">My Personal Profile</h1>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Age: {age}</p>
          <p className="card-text">Student: {isStudent.toString()}</p>
        </div>
      </div>
      <h3 className="mt-4">Hobbies-Normal Loop</h3>
      <ul>
        {hobbyListFor}
      </ul>
      <h3>Hobbies-Map</h3>
      <ul>
        {favoriteHobbies.map((item,index)=>(
          <li key={index}>{item}</li>))}
      </ul>
      <button className="btn btn-primary mt-3" onClick={showMessage}>Show Enthusiasm</button>
      <p id="message" className="mt-3">Click the button to see my enthusiasm!</p>
      </div>
      );
    }
export default App;