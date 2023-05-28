import React,{ useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from "./components/footer";
import Landing from "./Pages/landing";
import Login from "./Pages/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard"; 
// import Contact from "./Pages/contact";
// import Skill from "./components/skill";
// import Faq from "./Pages/faq"; 
// import Companysignup from "./components/companysignup";
// import Postjob from "./components/postJob"; 
// import Sitemap from "./components/sitemap";
// import Companylogin from "./components/companylogin";
// import Companydashboard from "./Pages/companydashboard";
// import Updateprofile from "./components/updateprofile";


const App = () => {
  const [token, setToken] = useState(null);
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing />}  />
    <Route path="/login" element={<Login setToken={setToken}/>}  />
    <Route path="/register" element={<Signup />}  />
    <Route path = "/dashboard" element = {<Dashboard token={token}/>} /> 
    {/* <Route path="/contact" element={<Contact />}  /> */}
    {/* <Skill /> */} 
    {/* <Route path = "/faq" element = {<Faq />} />
    <Route path = "/companyregister" element = {<Companysignup />} /> 
    <Route path = "/postJob" element = {<Postjob />} />  
    <Route path = "/sitemap" element = {<Sitemap />} />
    <Route path = "/companylogin" element = {<Companylogin />} />
    <Route path = "/companydashboard" element = {<Companydashboard />} /> 
    <Route path = "/updateprofile" element = {<Updateprofile />} />  */}

    </Routes>
    <Footer /> 
    </BrowserRouter>
  );
};

export default App;
