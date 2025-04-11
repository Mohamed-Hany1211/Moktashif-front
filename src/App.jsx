import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Results from "./Components/Results/Results";
import SignIn from "./Components/SignIn_SignUp/SignIn_SignUp";
import UserProfile from "./Components/UserProfile/UserProfile";
import ContactSupport from "./Components/ContactSupport/ContactSupport";

let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'results', element: <Results /> },
      {path: 'signin', element: <SignIn />},
      { path: 'profile', element: <UserProfile /> },
      // { path: 'contactsupport', element: < ContactSupport/> },
      { path: '*', element: <NotFound /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

export default App
