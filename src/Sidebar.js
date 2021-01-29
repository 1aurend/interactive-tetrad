/** @jsxImportSource theme-ui */
import React from 'react'


export default function Sidebar({ portrait }) {
  return (
    <div
      sx={{
        height:portrait ? '30vh' : '100vh',
        width:portrait ? '100vw' : '30vw',
        bg:'Grey'
      }}>
    </div>
  )
}
