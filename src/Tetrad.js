/** @jsxImportSource theme-ui */
import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useReducer
} from 'react'
import TetradSVG from './Svgr'
import Content from './ElementContent'


export default function Tetrad({ portrait }) {
  const [content, setContent] = useState({visible:false,type:''})
  return (
    <div
      sx={{
        height:portrait ? '60vh' : '100vh',
        width:portrait ? '100vw' : '60vw',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        p:[3,4,5],
        bg:'light'
      }}
      >
      <TetradSVG viewBox={`-10 0 580 580`} showContent={setContent}/>
      {content.visible &&
        <Content
          type={content.type}
          portrait={portrait}
          setVisible={setContent}/>
      }
    </div>
  )
}
