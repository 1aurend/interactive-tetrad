/** @jsxImportSource theme-ui */
import React, {
  useContext
} from 'react'
import CardsList from './CardsList'
import { Cards } from '../src/data/Store'


export default function CardTray({ portrait }) {
  const cards = useContext(Cards)
  const open = cards.length > 0 ? true : false

  return (
    <div
      sx={{
        position:'absolute',
        right:portrait ? '' : 0,
        left:portrait ? '3vw' : '',
        top:portrait ? open ? '78vh' : '100vh' : 0,
        width:portrait ? '100vw' : open ? '17vw' : 0,
        height:portrait ? open ? '20vh' : 0 : '100vh',
        transition:portrait ? 'height .5s ease-in-out' : 'width .5s ease-in-out',
        bg:'light',
        zIndex:1000
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
