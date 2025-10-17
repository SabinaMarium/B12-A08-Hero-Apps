import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Apps from "./components/Apps";
import AppDetails from "./components/AppDetails";
import ErrorPage from "./components/ErrorPage";

<div className="bg-red-500 text-white p-4">Tailwind is working!</div>


export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="apps" element={<Apps/>} />
          <Route path="apps/:id" element={<AppDetails/>} />
          <Route path="installation" element={<div className="p-12">Installation instructions</div>} />
          <Route path="*" element={<ErrorPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


