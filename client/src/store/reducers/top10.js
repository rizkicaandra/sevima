
const initialState = {
  loadingtop10: false,
  top10Film: []
}

function reducer(state = initialState, actions){
  const {type, payload} = actions

  switch (type) {
    case 'LOADINGTOP10/SETLOADINGTOP10':
      return { ...state, loadingHeroes: payload}
    case 'TOP10FILM/SETTOP10FILM':
      return { ...state, top10Film: payload}
    default :
      return state
  }
}

export default reducer