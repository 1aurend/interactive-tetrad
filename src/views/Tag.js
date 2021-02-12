/** @jsxImportSource theme-ui */
import React from 'react'
import firebase from 'firebase'
import { useDrag } from 'react-dnd'
import { DraggableTypes } from '../dndConsts'
import theme from '../theme'


export default function Tag({ item, id, i, el, uid }) {
  const [{ isDragging }, drag] = useDrag({
    item: { type:DraggableTypes.TAG, i:i, uid:id, el:el },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })
  const remove = e => id => {
    firebase.database().ref(`tetrads/${uid}/${el}/${id}`).remove()
    e.stopPropagation()
  }

  return (
    <div
      ref={drag}
      sx={{
        bg:'light',
        height:'3vmin',
        width:'48%',
        // border:`2px solid ${theme.colors.Grey}`,
        textAlign:'left',
        pl:'1%',
        pr:'1%',
        mb:'max(1vw, 20px)',
        filter:`drop-shadow(0 0 .25rem ${theme.colors.light})`,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
      }}>
      <div
        sx={{
          overflow:'scroll',
          width:'80%'
        }}>
        <p
          key={i}
          sx={{
            fontSize:'miniscule',
            lineHeight:'3vmin',
            fontFamily:'body',
            color:'Grey',
            m:0,
            p:0,
            whiteSpace:'nowrap'
          }}>
          {item}
        </p>
      </div>
      <button
        id='delete'
        onClick={e => remove(e)(id)}
        sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          height:'2vmin',
          width:'2vmin',
          fontSize:'miniscule',
          p:0,
          m:0,
          border:'none',
          bg:'none',
          cursor:'pointer'
        }}>
        🚫
      </button>
    </div>
  )
}
