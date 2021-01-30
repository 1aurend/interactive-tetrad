/** @jsxImportSource theme-ui */
import React, {
  useState
} from 'react'
import debounce from 'lodash.debounce'
import CardsList from './CardsList'


export default function Sidebar({ portrait }) {
  const [input, setInput] = useState('')
  const [cards, updateCards] = useState([])

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
        flexDirection:'column',
        p:[3,4,5]
      }}>
      <h2
        sx={{
          fontSize:'medium',
          fontFamily:'tetrad',
          fontWeight:'bold',
          color:'light'
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
          width:'20%',
          mt:[1,2,3]
        }}
        >
        create
      </button>
      <h3
        sx={{
          fontSize:'small',
          fontFamily:'tetrad',
          fontWeight:'bold',
          color:'light',
          mt:'7vmin',
          mb:0
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
      <CardsList cards={cards} />
    </div>
  )
}
