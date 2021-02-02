/** @jsxImportSource theme-ui */
import React, {
  useContext,
  useEffect,
  useState
} from 'react'
import { Data } from '../src/data/Store'
import theme from './theme'
import useRAFSize from './hooks/useRAFWindowSize'
import firebase from 'firebase'


export default function ElementContent({ type, portrait, setVisible }) {
  const data = useContext(Data)
  const items = data[type]
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

  const remove = e => i => {
    firebase.database().ref(`tetrads/${data.uid}/${type}/${i}`).remove()
    e.stopPropagation()
  }

  return (
    <div
      onClick={() => setVisible({visible:false,type:''})}
      sx={{
        bg:`${theme.colors[type]}CC`,
        height:portrait ? '30vh' : '30vw',
        width:portrait ? '30vh' : '30vw',
        position:'absolute',
        top:portrait ? '15vh' : top,
        left:portrait ? left : '15vw',
        zIndex:1,
        filter:`drop-shadow(0 0 1rem ${theme.colors.Grey})`,
        p:'max(1vw, 20px)',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignContent:'flex-start'
      }}>
      {items.map((item, i) => (
        <div
          sx={{
            bg:'light',
            height:'3vmin',
            width:'48%',
            // border:`2px solid ${theme.colors.Grey}`,
            textAlign:'left',
            pl:'1%',
            pr:'1%',
            mb:'max(1vw, 20px)',
            filter:`drop-shadow(0 0 .25rem ${theme.colors.light})`,
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
          }}>
          <div
            sx={{
              overflow:'scroll',
              width:'80%'
            }}>
            <p
              key={i}
              sx={{
                fontSize:'miniscule',
                lineHeight:'3vmin',
                fontFamily:'body',
                color:'Grey',
                m:0,
                p:0,
                whiteSpace:'nowrap'
              }}>
              {item}
            </p>
          </div>
          <button
            id='delete'
            onClick={e => remove(e)(i)}
            sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              height:'2vmin',
              width:'2vmin',
              fontSize:'miniscule',
              p:0,
              m:0,
              border:'none',
              bg:'none'
            }}>
            🚫
          </button>
        </div>))
      }
    </div>
  )
}
