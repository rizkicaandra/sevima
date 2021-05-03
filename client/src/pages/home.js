import { useEffect} from "react"
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import DisplayPost from "../components/displayPost"
import { fetchAllDataPicture } from "../store/action"

export default function Home(){
  const history = useHistory()
  const dispatch = useDispatch()
  const allDataPicutre = useSelector(state => state.post.allPost)

  useEffect(() => {
    if(!localStorage.getItem("access_token")){
      history.push('/login')
    }
  })

  useEffect(()=> {
    dispatch(fetchAllDataPicture())
  },[dispatch])

  return(
    <>
      <div className="container" style={{paddingTop: "5em"}}>
        <DisplayPost data={allDataPicutre} />
      </div>
    </>
  )
}