/** @jsxImportSource theme-ui */
import React, {
  useRef,
  useEffect,
  useContext,
  useMemo
} from 'react'
import TetradSVG from './Svgr'


export default function Tetrad({ portrait }) {
  return (
    <div
      sx={{
        height:portrait ? '70vh' : '100vh',
        width:portrait ? '100vw' : '70vw',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        p:[3,4,5],
        bg:'light'
      }}
      >
      <TetradSVG viewBox={`0 0 553.89 553.89`}/>
    </div>
  )
}
