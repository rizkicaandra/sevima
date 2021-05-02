import { useState, useEffect} from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "../store/action"
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";

export default function Login () {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const loginToInsta = (e) => {
    e.preventDefault()
    dispatch(loginUser(email, password))

    setEmail('')
    setPassword('')

    history.push('/beranda')
  }

  useEffect(() => {
    if(localStorage.getItem("access_token")){
      history.push('/beranda')
    }
  })

  return(
    <>
      <div id="wrapper">
        <div className="container">
          <div className="phone-app-demo">
          </div>
            <div className="form-data">
              <form action="" onSubmit={loginToInsta}>
                <div className="logo">
                  <h1>INSTAAPP.</h1>
                </div>
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value) } />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="form-btn" type="submit">Log in</button>
              </form>
              <div className="sign-up">
                Don't have an account? <Link to="/register">Register</Link>
              </div>
              <div className="get-the-app">
                <span>Get the app</span>
                <div className="badge">
                  <img src={"https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"} alt="android App" />
                  <img src={"https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"} alt="ios app" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}