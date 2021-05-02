import './App.css';
import Login from './pages/login'
import Home from './pages/home'
import Register from './pages/register'
import Navbar from './components/navbar'
import Profil from './pages/profil'
import {
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <>
    {
      localStorage.getItem("access_token") ? <Navbar></Navbar> : ""
    }
    <Switch>
      <Route path="/beranda">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/profil">
        <Profil />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </>
  );
}

export default App;