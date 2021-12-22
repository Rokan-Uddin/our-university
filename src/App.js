import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddStudent from "./components/AddStudent/AddStudent";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Students from "./components/Students/Students";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/" element={<Students />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
