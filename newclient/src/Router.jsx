
import Contact from "./Pages/contact";
import Landing from "./Pages/landing";
import Login from "./Pages/login";
import Companylogin from "./components/companylogin";
import CompanySignup from "./components/companysignup";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard"; 
import Companydashboard from "./Pages/companydashboard";
import GuestLayout from "./components/GuestLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import FAQ from "./Pages/faq";





const router = createBrowserRouter([
{
    path: '/',
    element: <Landing />
},

{
    path: '/faq',
    element: <FAQ />
},
{
    path: '/register',
    element: <Signup />
},
{
    path: '/login',
    element: <Login />
},
{
    path: '/contact',
    element: <Contact />
},
{
    path: '/companyregister',
    element: <CompanySignup />
},
{
    path: '/companylogin',
    element: <Companylogin />
},
{
    path: '/dashboard',
    element: <Companydashboard />
},
{
    path: '/companydashboard',
    element: <Companydashboard />
},
// {
//     path: '/guest',
//     element: <Navigate to="/" />,
//     children: [
//         {
//             path: '',
//             element: <Landing />
//         },
//         {
//             path: '/register',
//             element: <Signup />
//         },
//         {
//             path: '/login',
//             element: <Login />
//         },
//         {
//             path: '/contact',
//             element: <Contact />
//         }
//     ]
// },

])



export default router;