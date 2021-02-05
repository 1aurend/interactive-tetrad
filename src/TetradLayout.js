/** @jsxImportSource theme-ui */
import React, {
  useContext,
  useEffect,
  useState
} from 'react'
import Sidebar from './Sidebar'
import Tetrad from './Tetrad'
import useMediaQueries from './hooks/useMediaQueries'
import { Data, TetradSave } from '../src/data/Store'
import firebase from 'firebase'
import CardTray from './CardTray'
import Inputs from './Inputs'


export default function TetradLayout({ fbInstance }) {
  const mQs = {portrait:'(orientation: portrait)'}
  const mediaVals = useMediaQueries(mQs)
  const data = useContext(Data)
  const save = useContext(TetradSave)
  const [open, toggleOpen] = useState(false)

  useEffect(() => {
    if (data.uid) {
      firebase.database().ref(`/tetrads/${data.uid}/story`).on('value', snapshot => {
      const update = snapshot.val() ? snapshot.val() : 'default'
      save({type:'STORY',update:update})
      })
      firebase.database().ref(`/tetrads/${data.uid}/aesth`).on('value', snapshot => {
      const update = snapshot.val() ? snapshot.val() : 'default'
      save({type:'AESTH',update:update})
      })
      firebase.database().ref(`/tetrads/${data.uid}/mech`).on('value', snapshot => {
      const update = snapshot.val() ? snapshot.val() : 'default'
      save({type:'MECH',update:update})
      })
      firebase.database().ref(`/tetrads/${data.uid}/tech`).on('value', snapshot => {
      const update = snapshot.val() ? snapshot.val() : 'default'
      save({type:'TECH',update:update})
      })
      return () => {
        firebase.database().ref(`/tetrads/${data.uid}/story`).off()
        firebase.database().ref(`/tetrads/${data.uid}/aesth`).off()
        firebase.database().ref(`/tetrads/${data.uid}/mech`).off()
        firebase.database().ref(`/tetrads/${data.uid}/tech`).off()
      }
    }
  }, [data.uid, save])

  console.log(data)


  return (
    <main
      sx={{
        display:'flex',
        flexDirection:mediaVals.portrait ? 'column' : 'row',
        justifyContent:'flex-start',
        height:'100vh',
        width:'100vw',
        bg:'none'
      }}
      >
      <Inputs toggleOpen={toggleOpen} portrait={mediaVals.portrait} fbInstance={fbInstance}/>
      <CardTray/>
      <Tetrad portrait={mediaVals.portrait}/>
      {false && <Sidebar portrait={mediaVals.portrait} fbInstance={fbInstance}/>}
    </main>
  )
}
