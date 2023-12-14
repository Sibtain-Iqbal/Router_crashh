import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Layout from "./layout.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import User from "./Components/User/user.jsx";
import Github ,{Gihubloader} from "./Components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout/>,
//     children : [
//       {
//         path : '',
//         element : <Home/>
//       }
//       ,
//      {
//       path : "about",
//       element : <About/>
//      }
//      ,
//      {
//       path : "Contact-us",
//       element : <Contact/>
//      }
//      ,
//      {
//       path : "User/:userid",
//       element : <user/>
//      }

//     ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route
      loader={Gihubloader}
      path="github" element= {<Github/>} /> 
        
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
