import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProfilPictureData } from '../store/action'
import DisplayPost from "../components/displayPost"

export default function Profil(){
  const dispatch = useDispatch()
  const profilPictureData = useSelector(state => state.post.post)

  useEffect(()=> {
    dispatch(fetchProfilPictureData())
  }, [dispatch])

  return(
    <>
      <div className="container set-top">
        <div className="row">
          <div className="col set-padding-usericon">
            <i class="fas fa-user-circle user-icon"></i>
          </div>
          <div className="col" style={{paddingLeft: "7em", paddingTop: "1em"}}>
            <div>
              <h2 style={{fontSize: "35px"}}>My Name Is</h2>
            </div>
            <div className="d-flex">
              <h3 style={{paddingRight: "5px", paddingTop: "1.8em", color: "black"}}>100</h3>
              <h3 style={{paddingRight: "2.5em", paddingTop: "1.8em", color: "grey"}}>Posts</h3>
              <h3 style={{paddingRight: "5px", paddingTop: "1.8em", color: "black"}}>1304</h3>
              <h3 style={{paddingRight: "2.5em", paddingTop: "1.8em", color: "grey"}}>Followers</h3>
              <h3 style={{paddingRight: "5px", paddingTop: "1.8em", color: "black"}}>1502</h3>
              <h3 style={{paddingRight: "2.5em", paddingTop: "1.8em", color: "grey"}}>Following</h3>
            </div>
            <div>
              <h3 style={{paddingTop: "2em", color: "#999ea1"}}>Demo App Insta App</h3>
            </div>
          </div>
          <div className="col">
          </div>
        </div>
        <DisplayPost data={profilPictureData}></DisplayPost>
      </div>
    </>
  )
}