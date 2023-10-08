import { createBrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { AllProductCard } from "./components/GetProducts/GetProducts";
import { Details } from "./components/Details/Details";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <AllProductCard />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
    ],
  },
]);
