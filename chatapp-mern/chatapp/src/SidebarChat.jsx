import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'

export default function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className="sidebarChat__info">
            <h2>Room Name</h2>
            <p> This is the last message in room</p>
        </div>
    </div>
  )
}
