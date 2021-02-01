/** @jsxImportSource theme-ui */
import React, {
  useState,
  useContext
} from 'react'
import debounce from 'lodash.debounce'
import CardsList from './CardsList'
import { Cards, UpdateCards } from '../src/data/Store'


export default function Sidebar({ portrait }) {
  const [input, setInput] = useState('')
  const cards = useContext(Cards)
  const updateCards = useContext(UpdateCards)

  const createCard = e => {
    updateCards([...cards, input])
    setInput('')
  }

  return (
    <div
      sx={{
        height:portrait ? '40vh' : '100vh',
        width:portrait ? '100vw' : '40vw',
        bg:'Grey',
        display:'flex',
        flexDirection:portrait ? 'row' : 'column',
        p:[3,4,5]
      }}>
      <div
        sx={{
          display:'flex',
          flexDirection:'column',
          width:portrait ? '30%' : '100%',
          pl:portrait ? 0 : 0
        }}>
        <h2
          sx={{
            fontSize:'medium',
            fontFamily:'tetrad',
            fontWeight:'bold',
            color:'light',
            mt:portrait ? 0 : '.83em',
            lineHeight:'3vmin',
          }}
          >
          Build A Tetrad
        </h2>
        <input
          type='text'
          maxLength='50'
          placeholder='Create a new card...'
          value={input}
          onChange={e=>setInput(e.target.value)}
          sx={{
            width:'80%',
            fontSize:'teensy',
            fontFamily:'tetrad'
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
            width:portrait ? '50%' : '20%',
            mt:[1,2,3]
          }}
          >
          create
        </button>
      </div>
      <div
        sx={{
          display:'flex',
          flexDirection:'column',
          width:portrait ? '70%' : '100%',
          pl:portrait ? '3%' : 0
        }}>
        {!portrait &&
          <>
          <h3
            sx={{
              fontSize:'small',
              fontFamily:'tetrad',
              fontWeight:'bold',
              color:'light',
              mt:portrait ? 0 : '7vmin',
              mb:0,
            }}
            >
              Available Cards
            </h3>
            <p
              sx={{
                fontSize:'miniscule',
                fontFamily:'body',
                color:'DarkGrey2',
                mt:'1vmin'
              }}
              >
              Drag to add to tetrad
            </p>
            </>
          }
          {portrait &&
            <div
              sx={{
                display:'flex',
                justifyContent:'flex-start',
                alignItems:'flex-end',
              }}>
            <h3
              sx={{
                fontSize:'small',
                fontFamily:'tetrad',
                fontWeight:'bold',
                color:'light',
                m:0,
                lineHeight:'3vmin'
              }}
              >
                Available Cards
                <span
                  sx={{
                    fontSize:'miniscule',
                    fontFamily:'body',
                    fontWeight:'normal',
                    color:'DarkGrey2',
                    m:0,
                    pl:'1em'
                  }}
                  >
                  (Drag to add to tetrad)
                </span>
              </h3>
            </div>
            }
        <CardsList cards={cards} portrait={portrait} />
      </div>
    </div>
  )
}
