/** @jsxImportSource theme-ui */
import React from 'react'
import { useDrag } from 'react-dnd'
import { DraggableTypes } from '../dndConsts'


const Card = ({ text, num, portrait, uid }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: DraggableTypes.CARD, uid: uid },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    <div
      ref={drag}
      sx={{
        width:portrait ? '17vw' : '13vw',
        height:portrait ? '10vw' : '8vw',
        background:'linear-gradient(to right bottom, #62c4d6,#a3509f,#db742b,#e0c73a)',
        fontFamily:'body',
        fontSize:'miniscule',
        color:'DarkGrey1',
        mt:'2vmin',
        mr:'1vw',
        p:'10px',
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        opacity: isDragging ? 0.5 : 1,
        ':hover': {border: !isDragging ? '2px solid white' : ''}
      }}
      >
      {text}
    </div>
  )
}

export default function CardsList({ cards, portrait }){
  return (
    <div
      sx={{
        display:'flex',
        flexDirection:portrait? 'row' : 'column',
        justifyContent:'flex-start',
        flexWrap:'wrap'
      }}
      >
      {Object.keys(cards).map((card, i) => <Card key={card} uid={card} num={i+1} text={cards[card]} portrait={portrait}/>)}
    </div>
  )
}
