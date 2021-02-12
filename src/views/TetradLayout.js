/** @jsxImportSource theme-ui */
import React, {
  useContext,
  useEffect,
} from 'react'
import Tetrad from './Tetrad'
import useMediaQueries from '../hooks/useMediaQueries'
import { Data, TetradSave, UpdateCards  } from '../data/Store'
import firebase from 'firebase'
import CardTray from './CardTray'
import Inputs from './Inputs'


export default function TetradLayout({ fbInstance }) {
  const mQs = {portrait:'(orientation: portrait)'}
  const mediaVals = useMediaQueries(mQs)
  const data = useContext(Data)
  const save = useContext(TetradSave)
  const updateCards = useContext(UpdateCards)

  useEffect(() => {
    if (data.uid) {
      firebase.database().ref(`/tetrads/${data.uid}/story`).on('value', snapshot => {
      const update = snapshot.val() ? snapshot.val() : []
      save({type:'STORY',update:update})
      })
      firebase.database().ref(`/tetrads/${data.uid}/aesth`).on('value', snapshot => {
      const update = snapshot.val() ? snapshot.val() : []
      save({type:'AESTH',update:update})
      })
      firebase.database().ref(`/tetrads/${data.uid}/mech`).on('value', snapshot => {
      const update = snapshot.val() ? snapshot.val() : []
      save({type:'MECH',update:update})
      })
      firebase.database().ref(`/tetrads/${data.uid}/tech`).on('value', snapshot => {
      const update = snapshot.val() ? snapshot.val() : []
      save({type:'TECH',update:update})
      })
      firebase.database().ref(`/tetrads/${data.uid}/cards`).on('value', snapshot => {
      const update = snapshot.val() ? snapshot.val() : []
      updateCards(update)
      })
      return () => {
        firebase.database().ref(`/tetrads/${data.uid}/story`).off()
        firebase.database().ref(`/tetrads/${data.uid}/aesth`).off()
        firebase.database().ref(`/tetrads/${data.uid}/mech`).off()
        firebase.database().ref(`/tetrads/${data.uid}/tech`).off()
        firebase.database().ref(`/tetrads/${data.uid}/cards`).off()
      }
    }
  }, [data.uid, save, updateCards])


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
      <Inputs portrait={mediaVals.portrait} fbInstance={fbInstance}/>
      <CardTray portrait={mediaVals.portrait}/>
      <Tetrad portrait={mediaVals.portrait}/>
    </main>
  )
}
