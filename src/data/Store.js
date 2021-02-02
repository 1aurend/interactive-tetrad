import React, {
  useReducer,
  useEffect,
  useState
} from 'react'
import firebase from 'firebase'
import { firebaseConfig } from './firebaseConfig'
import tetradSave from './tetradSave'
import Router from '../Router'

export const Data = React.createContext()
export const TetradSave = React.createContext()
export const Cards = React.createContext()
export const UpdateCards = React.createContext()


export default function Store() {
  const [instance, setInstance] = useState(null)
  const [cards, updateCards] = useState([])
  const initialData = {
    uid:null,
    name:null,
    mech:[],
    tech:[],
    story:[],
    aesth:[],
  }
  const [data, saveData] = useReducer(tetradSave, initialData)

  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()
    firebase.auth().onAuthStateChanged(() => {
      setInstance(true)
    })
    return () => firebase.app().delete()
  }, [])

  useEffect(() => {
    firebase.database().ref(`/${data.uid}/story`).on('value', snapshot => {
    const update = snapshot.val() ? snapshot.val() : []
    console.log(update)
    saveData({type:'STORY',update:update})
    })
    return () => firebase.database().ref(`/${data.uid}/story`).off()
  }, [data.uid])

  console.log(data)

  return (
    <Data.Provider value={data}>
      <TetradSave.Provider value={saveData}>
        <Cards.Provider value={cards}>
          <UpdateCards.Provider value={updateCards}>
            <Router fbInstance={instance}/>
          </UpdateCards.Provider>
        </Cards.Provider>
      </TetradSave.Provider>
    </Data.Provider>
  )
}
