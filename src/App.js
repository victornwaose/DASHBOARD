import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar.js";
import Home from "./components/pages/home/Home.js";
import "./App.css" ;
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import UsersLists from "./components/pages/userslist/UsersList";
import { RouterOutlined } from "@material-ui/icons";


function App() {
  return ( 
    <Router>
        <Topbar/>
        <div className="container">
            <Sidebar/>
            <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route exact path="/users" >
                  <UsersLists/>
              </Route>  
            </Switch>
        </div>
    </Router>
  );
}

export default App;
 