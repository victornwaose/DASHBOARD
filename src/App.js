import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar.js";
import Home from "./components/pages/home/Home.js";
import "./App.css" ;
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import UsersLists from "./components/pages/userslist/UsersList";
import User from "./components/pages/user/User.js";
import NewUser from "./components/pages/newUser/NewUser";
import Product from "./components/pages/product/Product";
import ProductList from "./components/pages/productsList/ProductList";
import NewProduct from "./components/pages/newProduct/NewProduct";

function App() {
  return ( 
    <Router>
        <Topbar/>
        <div className="container">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route exact path="/users" >
                  <UsersLists />
              </Route>
              <Route exact path="/user/:userId" >
                  <User />
              </Route> 
              <Route exact path="/newUser" >
                  <NewUser />
              </Route> 
              <Route exact path="/products" >
                  <ProductList />
              </Route>
              <Route exact path="/product/:productId" >
                  <Product />
              </Route> 
              <Route exact path="/newProduct" >
                  <NewProduct />
              </Route> 
            </Switch>
        </div>
    </Router>
  ); 
}

export default App;
 