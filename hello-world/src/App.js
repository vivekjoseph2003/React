import "./App.css";
import image from "./images/1.jpg"
import image1 from "./images/2.jpg"
function App() {
  let greeting = "Hello World";
  return (
  <div>
  <h1 className="greetingStyle">{greeting}</h1>
  <img src={image}/>
  <img src={image1}/>
  </div>
  );
}
export default App;