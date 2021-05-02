import axios from 'axios'
let BASEURL = 'http://localhost:4500/'

export function loginUser(email, password){
  return async (dispatch) => {
    try {
      const response = await axios.post(BASEURL + 'users/login',{
        email,
        password
      })

      localStorage.setItem("access_token", response.data.access_token)
    } catch (error) {
      console.log(error)
    }
  }
}

export function registerUser(nama, email, password){
  return async (dispatch) => {
    try {
      const response = await axios.post(BASEURL + 'users/register',{
        nama,
        email,
        password
      })

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}