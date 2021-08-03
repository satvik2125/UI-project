import "./App.css";
import Sidebar from "./Components/Sidebar";
import Sidebarleft from "./Components/Sidebarleft";
import Tablebody from "./Components/Table";
import Header2 from "./Components/Header2";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Management from "./Components/Management-team";
import Bidding from "./Components/Bidding";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <Sidebar />
              <Sidebarleft />
              <Tablebody />
              <Header2 />
            </Route>
            <Route exact path="/manage">
            <Management/>
              <Sidebar />
              <Sidebarleft />
              <Header2 />
             
            </Route>
            <Route exact path="/bidding">
              <Bidding/>
              <Sidebar />
              <Sidebarleft />
              <Header2 />
            </Route>
            
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;

/*
export default App;

<Router>
<div className="App">
  <Switch>
    <Route path="/checkout">
      <Header/>
      <Checkout/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/">
      <Header/>
      <Navlinks/>
     <Home/>
     <Footer/>
    </Route>
  </Switch>
</div>
</Router>*/
