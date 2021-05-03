import { useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import DisplayPost from "../components/displayPost"
import { fetchAllDataPicture } from "../store/action"
import Navbar from '../components/navbar'

export default function Home(){
  const dispatch = useDispatch()
  const allDataPicutre = useSelector(state => state.post.allPost)
  const loadingLogin = useSelector(state => state.post.loadingLogin)
  const loadingAllData = useSelector(state => state.post.loadingAllData)

  useEffect(()=> {
    dispatch(fetchAllDataPicture())
  },[dispatch])

  return(
    <>
      <Navbar></Navbar>
      {
        loadingLogin || loadingAllData  ? <lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_KTzaOr.json"  background="transparent"  speed="1"  style={{width: "700px", height: "700px", margin: "auto"}}  loop  autoplay></lottie-player> :
        <div className="container" style={{paddingTop: "5em"}}>
        <DisplayPost data={allDataPicutre} />
      </div>
      }
    </>
  )
}