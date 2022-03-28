import { useAuth } from "../../context";
import {Link, useNavigate} from "react-router-dom"
import { toast } from "react-toastify";
import "./Header.css";
const Header = () => {
const{auth,setAuth}= useAuth()
const logoutHandler = () => {
    localStorage.removeItem("token");
    toast.success("Logged Out sucessfully");
    setAuth({
      token: "",
    });
   
  };
  return (
    <div className="header">
      <div>
        <h2>ANYNOTE</h2>
      </div>
      <div class="header__items">
      <i class="fa fa-moon"></i>
     <Link to={auth.token?"/logout":"/login"}>
      {auth.token ? (
                  <i class="fa fa-sign-out Link_style" role="button" onClick={()=>logoutHandler()}></i>
                ) : (
                  <i class="fa fa-user Link_style" ></i>
                )}
              </Link>
        
        
      </div>
    </div>
  );
};
export { Header };
