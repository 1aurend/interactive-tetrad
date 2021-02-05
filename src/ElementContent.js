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
  console.log(items)

  useEffect(() => {
    const aspect = size.width/size.height
    if (portrait) {
      setLeft(`${(100-(36/aspect))/2}vw`)
      return
    }
    setTop(`${(100-(aspect*35))/2}vh`)
  }, [size, portrait, open])

  const save = (el, card) => {
    const uid = firebase.database().ref(`/tetrads/${data.uid}/${el}`)
      .push()
      .getKey()
    firebase.database().ref(`/tetrads/${data.uid}/${el}/${uid}`)
      .set(card, err => {
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
        top:portrait ? open ? '24vh' : '34vh' : top,
        left:portrait ? left : open ? '30vw' : '32.5vw',
        filter:`drop-shadow(0 0 1rem ${theme.colors.Grey})`,
        p:'max(1vw, 20px)',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignContent:'flex-start',
        zIndex:1000,
        transition:'height .5s ease-in, width .5s ease-in, top .5s ease-in, left .5s ease-in'
      }}>
      {Object.keys(items).map((item, i) => <Tag item={items[item]} id={item} i={i} el={type} uid={data.uid}/>)}
    </div>
  )
}
