/** @jsxImportSource theme-ui */
import React, {
  useContext
} from 'react'
import CardsList from './CardsList'
import {
  Cards,
  UpdateCards,
  TetradSave,
  Data
} from '../src/data/Store'


export default function CardTray({ portrait }) {
  const cards = useContext(Cards)
  const open = cards.length > 0 ? true : false

  return (
    <div
      sx={{
        position:'absolute',
        right:0,
        top:0,
        width:open ? '15vw' : 0,
        height:'100vh',
        transition:'width 1s ease-in',
        bg:'light'
      }}>
      <h3
        sx={{
          fontSize:'tiny',
          fontFamily:'tetrad',
          fontWeight:'bold',
          color:'Grey',
          mt:portrait ? 0 : '7vh',
          mb:0,
          overflow:'hidden',
          whiteSpace:'nowrap'
        }}>
          Available Cards
        </h3>
        <p
          sx={{
            fontSize:'miniscule',
            fontFamily:'body',
            color:'Grey',
            mt:'1vmin',
            overflow:'hidden',
            whiteSpace:'nowrap'
          }}
          >
          Drag to add to tetrad
        </p>
        <CardsList cards={cards} portrait={portrait} />
    </div>
  )
}
