/** @jsxImportSource theme-ui */
import React from 'react'
import Sidebar from './Sidebar'
import Tetrad from './Tetrad'
import useMediaQueries from './hooks/useMediaQueries'


export default function TetradLayout({ fbInstance }) {
  const mQs = {portrait:'(orientation: portrait)'}
  const mediaVals = useMediaQueries(mQs)


  return (
    <main
      sx={{
        display:'flex',
        flexDirection:mediaVals.portrait ? 'column' : 'row',
        justifyContent:'flex-start',
        height:'100vh',
        width:'100vw',
        bg:'none'
      }}
      >
      <Tetrad portrait={mediaVals.portrait}/>
      <Sidebar portrait={mediaVals.portrait}/>
    </main>
  )
}
