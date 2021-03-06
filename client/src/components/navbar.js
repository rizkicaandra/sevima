import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { useEffect} from "react"
import { setNavbarStatus } from '../store/action' 
import { useDispatch } from 'react-redux'

export default function Navbar(){
  const history = useHistory()
  const dispatch = useDispatch()

  const userLogout = (e) => {
    localStorage.clear()
    history.push('/login')
    dispatch(setNavbarStatus(false))
  }

  useEffect(() => {
    if(!localStorage.getItem("access_token")){
      history.push('/login')
    }
  },[])

  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top d-flex justify-content-between">
        <div className="d-flex justify-content-center set-navbar-container">
          <img src={"https://w7.pngwing.com/pngs/554/687/png-transparent-computer-icons-graphy-camera-camera-angle-camera-lens-logo.png"} width="35" height="35" className="d-inline-block align-top" alt={"logo"} />
          <span className="separator"> | </span>
          <Link to="/beranda" style={{textDecoration: "none"}}> <span className="header-logo"> INSTA APP </span> </Link>
        </div>
        <div className="mr-5 set-navbar-link">
          <Link to="/post" style={{textDecoration: "none"}}><i className="fas fa-camera"></i></Link>
          <Link to="/profil" style={{textDecoration: "none"}}><i className="fas fa-user"></i></Link>
          <i class="fas fa-sign-out-alt" onClick={userLogout}></i>
        </div>
      </nav>
    </>
  )
}