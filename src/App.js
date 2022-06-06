// import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Pages/Homepage";

function App() {
  // const lower = () => {
  //   if (x === 12) {
  //     console.log("warmer1");
  //   } else if (x >= 0 && x <= 10) {
  //     console.log("warmer");
  //   } else if (x >= 10 && x <= 20) {
  //     console.log("warmers");
  //   } else {
  //     console.log("nothing");
  //   }
  // };
  // const x = 12;
  // if (x >= 10 && x <= 20) {
  //   lower();
  // } else {
  //   console.log("well");
  // }
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
