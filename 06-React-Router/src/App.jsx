import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Error from "./components/Error.jsx";
import Home from "./components/Home.jsx";
import AboutPage from "./components/About.jsx";
import ContactPage from "./components/Contact.jsx";
import Github from "./components/Github.jsx";

// method-1 - Routing Setup
/*
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='contact' element={<ContactPage/>}/>
    </Route>
  )
)
*/

// method-2 - Routing Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "github",
        element: <Github />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
