import "./App.css";
import Gun from "./components/GunComponent";

function App() {
  return (
    <div className="wrapper">
      {Array(3)
        .fill("")
        .map((item, index) => (
          <Gun index={index} />
        ))}
    </div>
  );
}

export default App;
