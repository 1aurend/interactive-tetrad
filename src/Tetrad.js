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
import { Cards } from '../src/data/Store'


export default function Tetrad({ portrait }) {
  const [content, setContent] = useState({visible:false,type:''})
  const cards = useContext(Cards)
  const open = cards.length > 0 ? true : false
  const viewBox = portrait ? `-10 -25 580 580` : `-10 -10 580 580`

  const closeContentPane = () => {
    if (content.visible) {
      setContent({visible:false,type:''})
    }
  }

  return (
    <div
      onClick={closeContentPane}
      sx={{
        height:portrait ? open ? '80vh' : '100vh' : '100vh',
        width:portrait ? '100vw' : open ? '95vw' : '100vw',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        p:[3,4,5],
        bg:'light',
        transition:'width 1s ease-in'
      }}
      >
      <TetradSVG viewBox={viewBox} showContent={setContent}/>
      {content.visible &&
        <Content
          type={content.type}
          portrait={portrait}
          setVisible={setContent}
          />
      }
    </div>
  )
}
