import "./App.css";
function App() {
   const food = ["Bread","Chapathi","Appam","Dosa"];
   function Message(item)
   {
    document.getElementById("message").innerHTML="I love "+item+"!";
   }
   const foodList = [ ];
   var a=food.length
   for( let i=0; i < a; i++) {
      foodList.push(<li> {food[i]}<button onClick={() => Message(food[i])}>Click</button>
      </li> );
 }
return (
         <div>
            <ul>{foodList}</ul>
            <h3 id="message">Select a food that you love!</h3>
      </div>
  );
}
export default App;