import React, {
  useReducer,
  useEffect,
  useState
} from 'react'
import firebase from 'firebase'
import { firebaseConfig } from './config'
// import tetradSave from './tetradSave'
import Router from '../Router'

export const Data = React.createContext()
export const TetradSave = React.createContext()


export default function Store() {
  const [instance, setInstance] = useState(null)
  const initialData = {
    uid:null,
    name:null,
    mech:[],
    tech:[],
    story:[],
    aesth:[],
  }
  const [data, saveData] = useReducer(setInstance, initialData)

  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()
    firebase.auth().onAuthStateChanged(() => {
      setInstance(true)
    })
    return () => firebase.app().delete()
  }, [])

  return (
    <Data.Provider value={data}>
      <TetradSave.Provider value={saveData}>
          <Router fbInstance={instance}/>
      </TetradSave.Provider>
    </Data.Provider>
  )
}
