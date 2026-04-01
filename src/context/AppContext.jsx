import { createContext, useReducer, useContext } from 'react'

const initialState = {
  videoModal: { open: false, url: null },
  projectModal: { open: false, project: null },
}

function reducer(state, action) {
  switch (action.type) {
    case 'showVideo':
      return { ...state, videoModal: { open: true, url: action.url } }
    case 'hideVideo':
      return { ...state, videoModal: { open: false, url: null } }
    case 'showProject':
      return { ...state, projectModal: { open: true, project: action.project } }
    case 'hideProject':
      return { ...state, projectModal: { open: false, project: null } }
    default:
      return state
  }
}

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
