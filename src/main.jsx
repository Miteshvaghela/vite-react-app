import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Github, {fetchGitApiData} from "./components/Github/Github";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <App />,
//     children : [
//       {
//         path : '/',
//         element : <Home />
//       },
//       {
//         path : '/contact',
//         element : <Contact />
//       },
//       {
//         path : '/about/:author',
//         element : <About />
//       },
//       {
//         path : '/github',
//         element : <Github />
//       },
//     ]

//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="about/:author" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route 
        path="github" 
        element={<Github />}
        loader={fetchGitApiData} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
