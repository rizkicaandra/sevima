import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDetailPost, addComment, fetchStatusLike, likePosting, unlikePosting } from '../store/action'
import Comments from '../components/comments'

export default function DetailPost(){
  const { id } = useParams()
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const detailPost = useSelector(state => state.post.detailPost)
  const loadingDetail = useSelector(state => state.post.loadingDetailPost)
  const statusLike = useSelector(state => state.post.statusLike)

  useEffect(()=> {
    dispatch(fetchDetailPost(+id))
    dispatch(fetchStatusLike(+id))
  }, [id,dispatch])

  const addNewComment = (e) => {
    e.preventDefault()
    dispatch(addComment({ text: text, PostId: id }))
    dispatch(fetchDetailPost(+id))
    setText('')
  }

  const dislikePost = (e) => {
    dispatch(unlikePosting(statusLike.idLike))
    dispatch(fetchStatusLike(+id))
    dispatch(fetchDetailPost(+id))
  }

  const likePost = (e) => {
    dispatch(likePosting(+id))
    dispatch(fetchStatusLike(+id))
    dispatch(fetchDetailPost(+id))
  }

  return(
    <>
      {
        loadingDetail ? <p>loading</p> :
        <div className="display-detail-picture" style={{paddingTop: "10em"}}>
        <div className="row">
          <div>
            <img src={`/uploads/${detailPost.imageName}`} width={"500"} height={"500"} alt="data1"></img>
          </div>
          <div className="row comment-display">
            <div className="d-flex block-1">
              <i class="far fa-user-circle detail-user-icon"></i>
                <h4 className="profile-detail-data">{ detailPost.User.nama }</h4>
            </div>
            <div className="block-2">
              {
                loadingDetail ? <p>loading</p> :
                detailPost.Comments.map((comment, nomor) => (
                  <Comments data={comment} key={nomor}></Comments>
                ))
              }
            </div>
            <div className="block-3">
              <div className="d-flex">
                {
                  statusLike.status ? <i className="fas fa-heart unlike-post" style={{color: "rgba(232, 71, 71, 0.905)"}} onClick={dislikePost}></i> : <i className="fas fa-heart like-post" onClick={likePost}></i>
                }
                <h5>{ detailPost.Likes.length }</h5>
              </div>
              <form style={{width: "60%"}} onSubmit={addNewComment}>
                <div className="form-group d-flex">
                  <input className="form-control" type="text" placeholder="Comment" value={text} onChange={(e) => {setText(e.target.value)}} />
                  <button type="submit" className="btn btn-outline-danger" style={{paddingLeft: "1em"}}>POST</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  )
}