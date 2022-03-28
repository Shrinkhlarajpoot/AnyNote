import { useNavigate } from "react-router-dom"
import { Header,Footer } from "../../components"

import "./Home.css"

const Home = ()=>{
  const navigate  =  useNavigate()
    return(
        <div className="home">
       <Header/>
      
       <div className="container">
           <img src="assets/mainimage.svg" className="conatiner__img"></img>
           <div class="container__desp">
         <h1 className="container__desp-heading">Welcome to ANYNOTE</h1>  
         <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div> 
        
          <button class="btn btn_solid-primary btn_primary" onClick={()=>navigate("/signup")}>Join Now</button>
          <div class="container__desp-account " onClick={()=>navigate("/login")}>Already have an account ?</div>
           </div>
       </div>
       <Footer/>

        </div>

    )
}
export {Home}