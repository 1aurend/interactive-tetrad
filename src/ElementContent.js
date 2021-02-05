/** @jsxImportSource theme-ui */
import React, {
  useContext,
  useEffect,
  useState
} from 'react'
import { Cards, UpdateCards, Data } from '../src/data/Store'
import theme from './theme'
import useRAFSize from './hooks/useRAFWindowSize'
import firebase from 'firebase'
import { useDrop } from 'react-dnd'
import { DraggableTypes } from './dndConsts'
import Tag from './Tag'


export default function ElementContent({ type, portrait, setVisible }) {
  const data = useContext(Data)
  const items = data[type]
  const size = useRAFSize()
  const [top, setTop] = useState()
  const [left, setLeft] = useState()
  const updateCards = useContext(UpdateCards)
  const cards = useContext(Cards)
  const open = cards.length > 0 ? true : false

  useEffect(() => {
    const aspect = size.width/size.height
    if (portrait) {
      setLeft(`${(100-(36/aspect))/2}vw`)
      return
    }
    setTop(`${(100-(aspect*35))/2}vh`)
  }, [size, portrait, open])

  const save = (el, card) => {
    firebase.database().ref(`/tetrads/${data.uid}/${el}`)
      .update({[data[el].length]: card}, err => {
        if (err) {
          alert('We had an issue connecting to the database. Sorry about that! Please try again.')
          return
        }
      })
  }
  const [{ isOver }, drop] = useDrop({
    accept: DraggableTypes.CARD,
    drop: (monitor) => {
      const update = [...cards]
      update.splice(monitor.i, 1)
      updateCards(update)
      save(type, cards[monitor.i])
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  return (
    <div
      ref={drop}
      onClick={e => e.stopPropagation()}
      sx={{
        bg:`${theme.colors[type]}CC`,
        height:portrait ? '35vh' : '35vw',
        width:portrait ? '35vh' : '35vw',
        position:'absolute',
        top:portrait ? '24vh' : top,
        left:portrait ? left : '30vw',
        filter:`drop-shadow(0 0 1rem ${theme.colors.Grey})`,
        p:'max(1vw, 20px)',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignContent:'flex-start',
        zIndex:1000,
        transition:'height 1s ease-in, width 1s ease-in, top 1s ease-in, left 1s ease-in'
      }}>
      {items.map((item, i) => <Tag item={item} i={i} el={type} uid={data.uid}/>)}
    </div>
  )
}
