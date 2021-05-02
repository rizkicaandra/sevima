import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'
import { useState, useEffect} from "react"
import { registerUser } from "../store/action"

export default function Login () {
  const dispatch = useDispatch()
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  useEffect(() => {
    if(localStorage.getItem("access_token")){
      history.push('/beranda')
    }
  })

  const addNewUser = (e) => {
    e.preventDefault()
    dispatch(registerUser(nama, email, password))

    setNama('')
    setEmail('')
    setPassword('')

    history.push('/login')
  }


  return(
    <>
      <div id="wrapper">
        <div className="container">
          <div className="phone-app-demo">
          </div>
            <div className="form-data">
              <form action="" onSubmit={addNewUser}>
                <div className="logo">
                  <h1>Register</h1>
                </div>
                <input type="text" placeholder="nama" value={nama} onChange={(e) => setNama(e.target.value)}/>
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className="form-btn" type="submit">Register</button>
              </form>
              <div className="sign-up">
                 <Link to="/login">Back to Login Page</Link>
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