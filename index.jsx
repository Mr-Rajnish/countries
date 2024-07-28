import {createRoot} from 'react-dom/client';
import App from './app';
import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './components/home';
import Error from './components/Error';
import CountryDetail from './components/CountryDetail';
import Contact from './components/Contact';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error/>,
      children:[
        {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/contact",
            element: <Contact/>,
          },
          {
            path: "/:Country",
            element:<CountryDetail/>,
          },
      ]
    },
  ]);
const root= createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={router} />);