import React, {
  useContext
} from 'react'
import { useDrop } from 'react-dnd'
import { DraggableTypes } from './dndConsts'
import { Cards, UpdateCards, TetradSave } from '../src/data/Store'


export default function Element(props) {
  const {
    fill,
    cx,
    cy,
    type,
    showContent
  } = props
  const updateCards = useContext(UpdateCards)
  const cards = useContext(Cards)
  const save = useContext(TetradSave)
  const [{ isOver }, drop] = useDrop({
    accept: DraggableTypes.CARD,
    drop: (monitor) => {
      const update = [...cards]
      update.splice(monitor.i, 1)
      updateCards(update)
      save({type:'ADD',el:type,card:cards[monitor.i]})
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })
  const handleClick = () => {
    showContent(prevContent => {
      if (prevContent.type === type) {
        return {visible:!prevContent.visible,type:type}
      }
      return {visible:true,type:type}
    })
  }

  return (
    <>
    <g ref={drop}>
      <circle
        cx={cx}
        cy={cy}
        r={isOver? 80 : 70.3}
        fill={fill}
        opacity={isOver? .8 : 1}
        onClick={handleClick}
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
          fontFamily="KohinoorBangla-Semibold,Kohinoor Bangla"
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
