import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Container />
      </div>
    </Router>
  );
}

export default App;
