/** @jsxImportSource theme-ui */
import React, {
  useState,
  useContext
} from 'react'
import CardsList from './CardsList'
import {
  Cards,
  UpdateCards,
  TetradSave,
  Data
} from '../src/data/Store'


export default function Sidebar({ portrait }) {
  const [cardInput, setCardInput] = useState('')
  const [nameInput, setNameInput] = useState('')
  const cards = useContext(Cards)
  const updateCards = useContext(UpdateCards)
  const save = useContext(TetradSave)
  const data = useContext(Data)

  const createCard = e => {
    updateCards([...cards, cardInput])
    setCardInput('')
  }

  const addToDB = () => {
    save({type:'CREATE',name:nameInput})
    setNameInput('')
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
          pl:portrait ? 0 : '10%',
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
          The Tetrad
        </h2>
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
          <input
            type='select'
            maxLength='50'
            placeholder='select'
            value={nameInput}
            onChange={e=>setNameInput(e.target.value)}
            sx={{
              width:'90%',
              fontSize:'teensy',
              fontFamily:'tetrad'
            }}/>
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
          <input
            type='text'
            maxLength='50'
            placeholder=''
            value={nameInput}
            onChange={e=>setNameInput(e.target.value)}
            sx={{
              width:'90%',
              fontSize:'teensy',
              fontFamily:'tetrad'
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
              width:portrait ? '50%' : '20%',
              mt:[2,3,4]
            }}
            >
            start
          </button>
          </>
        }
        {data.uid &&
          <>
          <input
            type='text'
            maxLength='50'
            placeholder='Create a new card...'
            value={cardInput}
            onChange={e=>setCardInput(e.target.value)}
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
                }}>
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
            </div>
        <CardsList cards={cards} portrait={portrait} />
        </>
        }
      </div>
    </div>
  )
}
