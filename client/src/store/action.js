import axios from 'axios'
let BASEURL = 'http://localhost:4500/'

export function setPostData(payload){
  return { type: 'POST/SETPOST', payload}
}

export function setLoadingPost(payload){
  return { type: 'LOADINGPOST/SETLOADINGPOST'}
}

export function setAllPostData(payload){
  return { type: 'ALLPOST/SETALLPOST', payload}
}

export function setLoadingAllPost(payload){
  return { type: 'LOADINGALLPOST/SETLOADINGALLPOST', payload}
}

export function setLoadingDetailPost(payload){
  return { type: 'LOADINGDETAILPOST/SETLOADINGDETAILPOST', payload}
}

export function setDetailPost(payload){
  return { type: 'DETAILPOST/SETDETAILPOST', payload}
}

export function setStatusLike(payload){
  return { type: 'STATUSLIKE/SETSTATUSLIKE', payload}
}

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

export function postPictures(payload){
  return async (dispatch) => {
    try {
      const response = await axios.post(BASEURL + 'posts/upload', payload, {
        headers:{
          'Content-type': 'multipart/form-data',
          'access_token': localStorage.getItem("access_token")
        }
      })

      console.log(response) 
    } catch (error) {
      console.log(error);
    }
  }
}

export function addPostData(payload){
  return async (dispatch) => {
    try {
      const response = await axios.post(BASEURL + 'posts', payload, {
        headers:{
          'access_token': localStorage.getItem("access_token")
        }
      })

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}

export function fetchProfilPictureData(){
  return async (dispatch) => {
    try {
      dispatch(setLoadingPost(true))
      const response = await axios.get(BASEURL + 'posts/profil', {
        headers:{
          'access_token': localStorage.getItem("access_token")
        }
      })
      console.log(response)
      dispatch(setPostData(response.data))
      dispatch(setLoadingPost(false))
    } catch (error) {
      console.log(error);
    }
  }
}

export function fetchAllDataPicture(){
  return async (dispatch) => {
    try{
      dispatch(setLoadingAllPost(true))
      const response = await axios.get(BASEURL + 'posts', {
        headers:{
          'access_token': localStorage.getItem("access_token")
        }
      })
      dispatch(setAllPostData(response.data))
      dispatch(setLoadingAllPost(false))
    } catch(error){
      console.log(error);
    }
  }
}

export function fetchDetailPost(payload){
  return async (dispatch) => {
    try{
      dispatch(setLoadingDetailPost(true))
      const response = await axios.get(BASEURL + 'posts/detail/'+ payload, {
        headers:{
          'access_token': localStorage.getItem("access_token")
        }
      })
      dispatch(setDetailPost(response.data))
      dispatch(setLoadingDetailPost(false))
    } catch(error){
      console.log(error)
    }
  }
}

export function addComment(payload){
  return async (dispatch) => {
    try{
      const response = await axios.post(BASEURL + 'comments',{ text: payload.text, PostId: payload.PostId }, {
        headers:{
          'access_token': localStorage.getItem("access_token")
        }
      })
    } catch(error) {
      console.log(error);
    }
  }
}

export function fetchStatusLike(payload){
  return async (dispatch) => {
    try{
      const response = await axios.get(BASEURL + 'posts/status/'+ payload, {
        headers:{
          'access_token': localStorage.getItem("access_token")
        }
      })
      dispatch(setStatusLike(response.data))
    } catch(error) {
      console.log(error);
    }
  }
}

export function likePosting(payload){
  return async (dispatch) => {
    try {
      const response = await axios.post(BASEURL + 'likes', {PostId: payload}, {
        headers:{
          'access_token': localStorage.getItem("access_token")
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export function unlikePosting(payload){
  return async (dispatch) => {
    try {
      const response = await axios.delete(BASEURL + 'likes/' + payload, {
        headers:{
          'access_token': localStorage.getItem("access_token")
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
}