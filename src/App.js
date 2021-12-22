import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddStudent from "./components/AddStudent/AddStudent";
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
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
