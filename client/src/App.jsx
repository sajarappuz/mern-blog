import Header from "./components/Header";
import Login from "./components/Login";
import Post from "./components/Post";


export default function App() {
  return (
    <div className="p-4 max-w-[1000px] mx-auto">
        <Header/>
        <Post/>
        <Login/>
    </div>
  )
}