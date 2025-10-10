
import { createBrowserRouter } from "react-router-dom";
import App from "../App"; 
import HomePage from "../pages/HomePage";
import AllAppsPage from "../pages/AllAppsPage";
import AppDetailsPage from "../pages/AppDetailsPage";
import ErrorPage from "../pages/ErrorPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "apps",
        element: <AllAppsPage />,
      },
      {
        path: "installation",
        element: <div>Installation Instructions Page (Placeholder)</div>,
      },
      {
        path: "app/:appId",
        element: <AppDetailsPage />,
      },
      
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
]);