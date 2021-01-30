/** @jsxImportSource theme-ui */
import React from 'react'
import { useDrag } from 'react-dnd'
import { DraggableTypes } from './dndConsts'


const Card = ({ text, num }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: DraggableTypes.CARD },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    <div
      ref={drag}
      sx={{
        width:'31%',
        height:'7.4vw',
        background:'linear-gradient(to right bottom, #62c4d6,#a3509f,#db742b,#e0c73a)',
        fontFamily:'body',
        fontSize:'miniscule',
        color:'DarkGrey1',
        mt:'2vmin',
        mr:(num % 3) === 0? '' : '1vw',
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

export default function CardsList({ cards }){
  return (
    <div
      sx={{
        display:'flex',
        justifyContent:'flex-start',
        flexWrap:'wrap'
      }}
      >
      {cards.map((card, i) => <Card key={i} num={i+1} text={card}/>)}
    </div>
  )
}
