import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css" ;


function App() {
  return (
    <div>
        <Topbar/>
        <div className="container">
            <Sidebar/>
              <div className="other_pages">
                other pages
              </div>
        </div>
    </div>
  );
}

export default App;
 