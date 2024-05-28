import "./App.css";
import MyResponsiveBar from "./BarChart";
import { data } from "./data";

function App() {
  return (
    <div className="App" style={{ height: "80vh" }}>
      <MyResponsiveBar data={data} />
    </div>
  );
}

export default App;
