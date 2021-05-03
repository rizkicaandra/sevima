import { useState} from "react"
import { useDispatch } from "react-redux"
import { postPictures } from "../store/action"
import { addPostData } from "../store/action"
import { useHistory } from 'react-router-dom'

export default function PostPicture(){
  const dispatch = useDispatch()
  const [file, setFile] = useState('')
  const [fileName, setFileName] = useState('Choose File')
  const [text, setText] = useState('')
  const history = useHistory()

  const chosenFile = (e) => {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
  }

  const newText = (e) => {
    setText(e.target.value)
  }

  const postPicture = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', file)

    dispatch(postPictures(formData))
    dispatch(addPostData({imageName: fileName, text}))

    setFile('')
    setFileName('')
    setText('')

    history.push('/beranda')
  }

  return(
    <>
      <div className="container mt-4" style={{paddingTop: "8em"}}>
        <h4 className="display-4 text-center mb-4">POST YOUR MOMENT</h4>
      </div>
      <div className="container" style={{paddingTop: "2em", paddingLeft: "20em", paddingRight: "20em"}}>
        <form onSubmit={postPicture}>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="customFile" onChange={chosenFile}></input>
            <label className="custom-file-label" htmlFor="customFile">{ fileName }</label>
          </div>
          <div className="form-group mt-4">
            <label htmlFor="textCaption">Caption</label>
            <input type="text" className="form-control" id="textCaption" placeholder="Write Your Caption Here" onChange={newText} />
          </div>
          <button type="submit" className="btn btn-outline-danger btn-block mt-5">POST</button>
        </form>
      </div>
    </>
  )
}