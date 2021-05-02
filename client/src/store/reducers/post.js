const initialState = {
  loadingPost: false,
  post: []
}

function reducer(state = initialState, actions){
  const {type, payload} = actions

  switch (type) {
    case 'LOADINGPOST/SETLOADINGPOST':
      return { ...state, loadingPost: payload}
    case 'POST/SETPOST':
      return { ...state, post: payload}
    default :
      return state
  }
}

export default reducer