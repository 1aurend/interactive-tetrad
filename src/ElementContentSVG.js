/** @jsxImportSource theme-ui */
import React, {
  useContext
} from 'react'
// import Data from '../src/data/Store'
import theme from './theme'


export default function ElementContent({ type, cx, cy }) {
  // const data = useContext(Data)
  // const items = data[type]
  console.log(cx)

  return (
    <rect
      fill={theme.colors[type]}
      width={400}
      height={400}
      x={cx}
      y={cy}
      opacity={.75}
      >
    </rect>
  )
}
