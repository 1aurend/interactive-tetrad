/** @jsxImportSource theme-ui */
import React, {
  useContext
} from 'react'
import { useDrop } from 'react-dnd'
import { DraggableTypes } from '../dndConsts'
import { Cards, Data } from '../data/Store'
import firebase from 'firebase'


export default function Element(props) {
  const {
    fill,
    cx,
    cy,
    type,
    showContent
  } = props
  const cards = useContext(Cards)
  const data = useContext(Data)

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
  const onDropCard = monitor => {
    firebase.database().ref(`tetrads/${data.uid}/cards/${monitor.uid}`).remove()
    save(type, cards[monitor.uid])
  }
  const onDropTag = monitor => {
    save(type, data[monitor.el][monitor.uid])
    firebase.database().ref(`tetrads/${data.uid}/${monitor.el}/${monitor.uid}`).remove()
  }
  const [{ isOver }, drop] = useDrop({
    accept: [DraggableTypes.CARD, DraggableTypes.TAG],
    drop: (monitor) => {
      if (monitor.type === 'card') {
        onDropCard(monitor)
        return
      }
      onDropTag(monitor)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  const handleClick = e => {
    e.stopPropagation()
    showContent(prevContent => {
      if (prevContent.type === type) {
        return {visible:!prevContent.visible,type:type}
      }
      return {visible:true,type:type}
    })
  }

  return (
    <>
    <g
      ref={drop}
      sx={{cursor:'pointer'}}
      onClick={handleClick}
      >
      <circle
        cx={cx}
        cy={cy}
        r={isOver? 80 : 70.3}
        fill={fill}
        opacity={isOver? .8 : 1}
        />
      {type === 'aesth' &&
        <text
          transform="translate(241.37 74.22)"
          letterSpacing=".09em"
          fontWeight={700}
          fontFamily="KohinoorDevanagari-Bold,Kohinoor Devanagari"
          fontSize={12}
          fill="#fff"
          >
            {"A"}
          <tspan x={8.39} y={0} letterSpacing=".1em">
            {"E"}
          </tspan>
          <tspan x={15.45} y={0} letterSpacing=".1em">
            {"S"}
          </tspan>
          <tspan letterSpacing=".1em" x={22.58} y={0}>
            {"T"}
          </tspan>
          <tspan x={29.73} y={0}>
            {"H"}
          </tspan>
          <tspan x={38.69} y={0} letterSpacing=".11em">
            {"E"}
          </tspan>
          <tspan x={45.93} y={0} letterSpacing=".1em">
            {"T"}
          </tspan>
          <tspan x={53.07} y={0} letterSpacing=".1em">
            {"I"}
          </tspan>
          <tspan letterSpacing=".1em" x={57.09} y={0}>
            {"C"}
          </tspan>
          <tspan letterSpacing=".1em" x={65.24} y={0}>
            {"S"}
          </tspan>
        </text>
      }
      {type === 'mech' &&
        <text
          transform="translate(32.49 281.44)"
          fontFamily="KohinoorDevanagari-Bold,Kohinoor Devanagari"
          fontWeight={600}
          letterSpacing=".09em"
          fontSize={12}
          fill="#fff"
          >
            {"M"}
          <tspan x={11.67} y={0} letterSpacing=".08em">
            {"E"}
          </tspan>
          <tspan x={19.18} y={0} letterSpacing=".1em">
            {"C"}
          </tspan>
          <tspan x={27.32} y={0} letterSpacing=".1em">
            {"H"}
          </tspan>
          <tspan x={37.07} y={0} letterSpacing=".1em">
            {"A"}
          </tspan>
          <tspan x={45.95} y={0}>
            {"N"}
          </tspan>
          <tspan x={55.62} y={0}>
            {"I"}
          </tspan>
          <tspan x={60.48} y={0} letterSpacing=".12em">
            {"C"}
          </tspan>
          <tspan letterSpacing=".1em" x={68.94} y={0}>
            {"S"}
          </tspan>
        </text>
      }
      {type === 'tech' &&
        <text
          transform="translate(234.23 487.75)"
          fontFamily="KohinoorDevanagari-Bold,Kohinoor Devanagari"
          letterSpacing=".1em"
          fontWeight={700}
          fontSize={12}
          fill="#fff"
          >
            {"T"}
          <tspan x={7.33} y={0} letterSpacing=".08em">
            {"E"}
          </tspan>
          <tspan letterSpacing=".1em" x={15.07} y={0}>
            {"C"}
          </tspan>
          <tspan x={23.33} y={0} letterSpacing=".09em">
            {"H"}
          </tspan>
          <tspan x={33.1} y={0}>
            {"N"}
          </tspan>
          <tspan x={43.02} y={0} letterSpacing=".09em">
            {"O"}
          </tspan>
          <tspan letterSpacing=".1em" x={52.24} y={0}>
            {"L"}
          </tspan>
          <tspan letterSpacing=".1em" x={59.5} y={0}>
            {"O"}
          </tspan>
          <tspan x={68.78} y={0}>
            {"G"}
          </tspan>
          <tspan letterSpacing=".1em" x={77.91} y={0}>
            {"Y"}
          </tspan>
        </text>
      }
      {type === 'story' &&
        <text
          transform="translate(464.93 280.86)"
          letterSpacing=".1em"
          fontWeight={700}
          fontFamily="KohinoorDevanagari-Bold,Kohinoor Devanagari"
          fontSize={12}
          fill="#fff"
          >
            {"S"}
          <tspan x={7.13} y={0} letterSpacing=".08em">
            {"T"}
          </tspan>
          <tspan letterSpacing=".1em" x={14} y={0}>
            {"O"}
          </tspan>
          <tspan x={22.14} y={0} letterSpacing=".08em">
            {"R"}
          </tspan>
          <tspan letterSpacing=".1em" x={30.81} y={0}>
            {"Y"}
          </tspan>
        </text>
      }
    </g>
    </>
  )
}
