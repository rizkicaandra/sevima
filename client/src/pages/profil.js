
export default function Profil(){
  return(
    <>
      <div className="container set-top">
        <div className="row">
          <div className="col set-padding-usericon">
            <i class="fas fa-user-circle"></i>
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
        <div className="row d-flex" style={{paddingTop: "4em"}}>
          <div className="col-md-4" style={{padding: "1em"}}><img src={"https://images.unsplash.com/photo-1594199544800-2d77ff671a58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"} width={"300"} height={"300"} alt="foto"></img></div>
          <div className="col-md-4" style={{padding: "1em"}}><img src={"https://images.unsplash.com/photo-1594199544800-2d77ff671a58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"} width={"300"} height={"300"} alt="foto"></img></div>
          <div className="col-md-4" style={{padding: "1em"}}><img src={"https://images.unsplash.com/photo-1594199544800-2d77ff671a58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"} width={"300"} height={"300"} alt="foto"></img></div>
          <div className="col-md-4" style={{padding: "1em"}}><img src={"https://images.unsplash.com/photo-1594199544800-2d77ff671a58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"} width={"300"} height={"300"} alt="foto"></img></div>
          <div className="col-md-4" style={{padding: "1em"}}><img src={"https://images.unsplash.com/photo-1594199544800-2d77ff671a58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"} width={"300"} height={"300"} alt="foto"></img></div>
          </div>
      </div>
    </>
  )
}