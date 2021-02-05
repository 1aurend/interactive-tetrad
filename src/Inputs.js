/** @jsxImportSource theme-ui */
import React, {
  useState,
  useContext,
  useEffect
} from 'react'
import CardsList from './CardsList'
import {
  Cards,
  UpdateCards,
  TetradSave,
  Data
} from '../src/data/Store'
import firebase from 'firebase'
import { Select, Input } from 'theme-ui'


export default function Inputs({ portrait, fbInstance }) {
  const [cardInput, setCardInput] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [nameSelect, setNameSelect] = useState('')
  const cards = useContext(Cards)
  const updateCards = useContext(UpdateCards)
  const save = useContext(TetradSave)
  const data = useContext(Data)
  const [tetradList, setList] = useState([])

  const createCard = e => {
    updateCards([...cards, cardInput])
    setCardInput('')
  }

  const addToDB = () => {
    if (nameSelect) {
      const find = tetradList.filter(item => item.uid === nameSelect)[0]
      save({type:'OPEN',uid:nameSelect,name:find.name})
      return
    }
    save({type:'CREATE',name:nameInput})
    setNameInput('')
  }

  useEffect(() => {
    if (!data.uid && fbInstance) {
      firebase.database().ref(`/tetrads`).once('value', snapshot => {
        const list = snapshot.val() ? snapshot.val() : null
        if (list) {
          const options = Object.keys(list).map(item => ({uid:item,name:list[item].name}))
          setList(options)
        }
      })
    }
  }, [data.uid, fbInstance])

  return (
    <div
      sx={{
        position:'absolute',
        top:'3vh',
        left:'3vw',
        zIndex:1000,
        width:portrait? '35vw' : '25vw'
      }}>
      <div
        sx={{
          display:'flex',
          flexDirection:'column',
          width:'100%',
          pl:portrait ? 0 : '10%',
        }}>
        {!data.uid && <h2
          sx={{
            fontSize:'medium',
            fontFamily:'tetrad',
            fontWeight:'bold',
            color:'Grey',
            mt:portrait ? 0 : '.83em',
            mb:0,
            lineHeight:'3vmin',
          }}
          >
          The Tetrad
        </h2>}
        {!data.uid &&
          <>
          <h2
            sx={{
              fontSize:'tiny',
              fontFamily:'tetrad',
              fontWeight:'bold',
              color:'aesth',
              mt:portrait ? 0 : '.83em',
              lineHeight:'3vmin',
            }}
            >
            Choose a game or class to explore
          </h2>
          <Select
            value={nameSelect}
            onChange={e=>{setNameSelect(e.target.value);setNameInput('')}}
            sx={{
              width:'min(90%, 400px)',
              fontSize:'teensy',
              fontFamily:'tetrad',
              bg:'light'
            }}>
            <option value={''}>select...</option>
            {tetradList.map((item, i) => <option value={item.uid} key={i}>{item.name}</option>)}
          </Select>
          <h2
            sx={{
              fontSize:'tiny',
              fontFamily:'tetrad',
              fontWeight:'bold',
              color:'aesth',
              mt:portrait ? 0 : '.83em',
              lineHeight:'3vmin',
            }}
            >
            ...or add a new one
          </h2>
          <Input
            type='text'
            maxLength='50'
            placeholder=''
            value={nameInput}
            onChange={e=>{setNameInput(e.target.value);setNameSelect('')}}
            sx={{
              width:'min(90%, 400px)',
              fontSize:'teensy',
              fontFamily:'tetrad',
              bg:'light'
            }}/>
          <button
            onClick={addToDB}
            sx={{
              borderRadius:'1vmin',
              border:'none',
              bg:'aesth',
              color:'light',
              fontSize:'teensy',
              fontFamily:'body',
              width:portrait ? '50%' : 'min(30%, 135px)',
              height:'4vmin',
              mt:[2,3,4],
              cursor:'pointer'
            }}
            >
            start
          </button>
          </>
        }
        {data.uid &&
          <>
          <h2
            sx={{
              fontSize:'medium',
              fontFamily:'tetrad',
              fontWeight:'bold',
              color:'aesth',
              mt:portrait ? 0 : '.83em',
              lineHeight:'3vmin',
            }}
            >
            {data.name}
          </h2>
          <h2
            sx={{
              fontSize:'teensy',
              fontFamily:'body',
              color:'Grey',
              fontWeight:'normal',
              mt:0,
              mb:'1em'
            }}
            >
            Create cards and drag and drop to fill out the tetrad
          </h2>
          <Input
            type='text'
            maxLength='50'
            placeholder='Create a new card...'
            value={cardInput}
            onChange={e=>setCardInput(e.target.value)}
            sx={{
              width:'min(90%, 400px)',
              fontSize:'teensy',
              fontFamily:'tetrad',
              bg:'light'
            }}/>
          <button
            onClick={createCard}
            sx={{
              borderRadius:'1vmin',
              border:'none',
              bg:'aesth',
              color:'light',
              fontSize:'teensy',
              fontFamily:'body',
              width:portrait ? '50%' : 'min(30%, 135px)',
              height:'4vmin',
              mt:[2,3,4],
              cursor:'pointer'
            }}
            >
            create
          </button>
          </>
        }
      </div>
    </div>
  )
}
