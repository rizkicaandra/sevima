const initialState = {
  loadingPost: false,
  post: [],
  loadingAllPost: false,
  allPost: [],
  loadingDetailPost: false,
  detailPost: [],
  statusLike: false
}

function reducer(state = initialState, actions){
  const {type, payload} = actions

  switch (type) {
    case 'LOADINGPOST/SETLOADINGPOST':
      return { ...state, loadingPost: payload}
    case 'POST/SETPOST':
      return { ...state, post: payload}
    case 'ALLPOST/SETALLPOST':
      return { ...state, allPost: payload}
    case 'LOADINGALLPOST/SETLOADINGALLPOST':
      return { ...state, loadingAllPost: payload}
    case 'LOADINGDETAILPOST/SETLOADINGDETAILPOST':
      return { ...state, loadingDetailPost: payload}
    case 'DETAILPOST/SETDETAILPOST':
      return { ...state, detailPost: payload}
    case 'STATUSLIKE/SETSTATUSLIKE':
      return { ...state, statusLike: payload}
    default :
      return state
  }
}

export default reducer