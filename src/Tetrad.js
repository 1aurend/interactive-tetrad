/** @jsxImportSource theme-ui */
import React, {
  useRef,
  useEffect,
  useContext,
  useMemo
} from 'react'

const toPx = (val, size, x, param) => {
  const max = x ? size.width : size.height
  const basePx = max*val
  const finalPx = !!param ? basePx+param : basePx
  return finalPx
}


export default function Tetrad() {
  return (
    <div
      sx={{
        height:'100vh',
        width:'inherit',
        display:'flex',
        justifyContent:'center',
        alignItems:'space-around'
      }}
      >
      <svg>
        <g>
          <line x1="0" y1="80" x2="100" y2="20" stroke="black"/>
          <line x1="0" y1="80" x2="100" y2="20" stroke="black"/>
          <line x1="0" y1="80" x2="100" y2="20" stroke="black"/>
          <line x1="0" y1="80" x2="100" y2="20" stroke="black"/>
          <line x1="0" y1="80" x2="100" y2="20" stroke="black"/>
          <line x1="0" y1="80" x2="100" y2="20" stroke="black"/>
          <g>
            <circle cx={100} cy={100} r={40} fill={'blue'}/>
            <text x={100} y={100} fill='white'>test</text>
          </g>
          <g>
            <circle cx={100} cy={100} r={40} fill={'blue'}/>
          </g>
          <g>
            <circle cx={100} cy={100} r={40} fill={'blue'}/>
            <text x={5} y={5} fill='black'>test</text>
          </g>
          <g>
            <circle cx={100} cy={100} r={40} fill={'blue'} onClick={()=>{alert('click')}}/>
            <text x={100} y={100} textAnchor='middle' fill='black'>test</text>
          </g>
        </g>
      </svg>
    </div>
  )
}
