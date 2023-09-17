import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Post from "./components/Post";
import Layout from "./Layout";
import Register from "./components/Register";


export default function App() {
  return (
    <div className="p-4 max-w-[1000px] mx-auto">
      <main>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={< Post/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      </main>
    </div>
  )
}