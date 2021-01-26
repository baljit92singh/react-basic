import './App.css';
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Users from './Users'
import CreateUser from './CreateUsers'
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"> <Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#features"> <Link to="/contact">Contact Us</Link></Nav.Link>
            <Nav.Link href="#pricing"> <Link to="/user-list">User List</Link></Nav.Link>
            <Nav.Link href="#pricing"> <Link to="/create-user">Create User</Link></Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/user-list">
            <Users />
          </Route>
          <Route path="/create-user">
            <CreateUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>


        {/* <h1>Home Page</h1> */}
        {/* <Contact /> */}
        {/* <About /> */}
        {/* <Users /> */}
        {/* <CreateUser /> */}
      </Router>
    </div>
  );
}

export default App;
