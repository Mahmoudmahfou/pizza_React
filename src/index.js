import App from "./App";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllShop from "./ShopPage/AllShop";
import Service from "./Servises/Service";
import AllBlog from "./BlogPage/AllBlog";
import AllAbout from "./AboutPage/AllAbout";
import Contact from "./Contact/Contact";
import ShopCart from "./ShopCart/ShopCart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <AllShop />,
  },
  {
    path: "services",
    element: <Service />,
  },
  {
    path: "blog",
    element: <AllBlog />,
  },
  {
    path: "about",
    element: <AllAbout />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "cart",
    element: <ShopCart />,
  },
  
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

