/** @jsxImportSource theme-ui */
import React from 'react'
import Sidebar from './Sidebar'
import Tetrad from './Tetrad'


export default function TetradLayout({ fbInstance }) {
  return (
    <main
      sx={{
        display:'flex',
        justifyContent:'flex-start',
        height:'100vh',
        width:'100vw'
      }}
      >
      <Tetrad />
    </main>
  )
}
