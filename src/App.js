import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { Home,Signup,Login,Logout} from "./frontend/pages";
import Mockman from "mockman-js";


function App() {
  return (
    <div className="app">
       <ToastContainer
       
        autoClose={1500}
        position="bottom-right"
      />
       <Routes>
         
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/mockman" element={<Mockman />} />
      
      </Routes>
   
    </div>
  );
}

export default App;
