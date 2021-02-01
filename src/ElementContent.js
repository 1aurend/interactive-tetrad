/** @jsxImportSource theme-ui */
import React, {
  useContext,
  useEffect,
  useState
} from 'react'
// import Data from '../src/data/Store'
import theme from './theme'
import useRAFSize from './hooks/useRAFWindowSize'


export default function ElementContent({ type, portrait, setVisible }) {
  // const data = useContext(Data)
  // const items = data[type]
  const size = useRAFSize()
  const [top, setTop] = useState()
  const [left, setLeft] = useState()

  useEffect(() => {
    const aspect = size.width/size.height
    if (portrait) {
      setLeft(`${(100-(30/aspect))/2}vw`)
      return
    }
    setTop(`${(100-(aspect*30))/2}vh`)
  }, [size, portrait])

  return (
    <div
      onClick={() => setVisible({visible:false,type:''})}
      sx={{
        bg:theme.colors[type],
        height:portrait ? '30vh' : '30vw',
        width:portrait ? '30vh' : '30vw',
        position:'absolute',
        top:portrait ? '15vh' : top,
        left:portrait ? left : '15vw',
        zIndex:1,
        opacity:.9,
        filter:`drop-shadow(0 0 1rem ${theme.colors.Grey})`
      }}>
      {type}
    </div>
  )
}
