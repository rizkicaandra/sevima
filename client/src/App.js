import './App.css';
import Login from './pages/login'
import Home from './pages/home'
import Register from './pages/register'

import Profil from './pages/profil'
import Post from './pages/post'
import DetailPost from './pages/detailpost'
import {
  Switch,
  Route
} from "react-router-dom"

function App() {

  return (
    <>
    <Switch>
      <Route path="/detailpost/:id">
        <DetailPost />
      </Route>
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
      <Route path="/post">
        <Post />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </>
  );
}

export default App;
