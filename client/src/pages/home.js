import { useEffect} from "react"
import { useHistory } from 'react-router-dom'

export default function Home(){
  const history = useHistory()

  useEffect(() => {
    if(!localStorage.getItem("access_token")){
      history.push('/login')
    }
  })
  return(
    <>
      <h1>INI ADALAH HOME bos</h1>
    </>
  )
}