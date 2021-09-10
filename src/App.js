import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar.js";
import Home from "./components/pages/home/Home.js"
import "./App.css" ;


function App() {
  return (
    <div>
        <Topbar/>
        <div className="container">
            <Sidebar/>
            <Home/>
        </div>
    </div>
  );
}

export default App;
 