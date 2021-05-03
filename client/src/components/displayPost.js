import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setLoadingDetailPost } from '../store/action'

export default function DisplayPost({data}){
  const history = useHistory()
  const dispatch = useDispatch()

  const handleDetail = (postingData) => {
    dispatch(setLoadingDetailPost(true)) 
    history.push(`/detailpost/${postingData.id}`)
  }

  return(
    <>
      <div className="row d-flex" style={{paddingTop: "4em"}}>
        {
          data.map((imagePost, nomor) => (
            <div className="col-md-4 imghover" style={{padding: "1em"}} key={nomor}>
              <img src={`./uploads/${imagePost.imageName}`} width={"300"} height={"300"} alt="foto"></img>
              <div className="overlay ctr"><button type="button" class="btn btn-outline-light" onClick={(e)=>{ handleDetail(imagePost)}}>Lihat Postingan</button></div>  
            </div>
          ))
        }
      </div>
    </>
  )
}