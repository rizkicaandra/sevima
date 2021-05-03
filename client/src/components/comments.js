

export default function Comments({ data }){
  return(
    <>
      <div className="d-flex">
        <h4>{ data.User.nama} :</h4>
        <h4 style={{paddingLeft:"1em", color:"#8d8e8f"}}>{ data.text}</h4>
      </div>
    </>
  )
}