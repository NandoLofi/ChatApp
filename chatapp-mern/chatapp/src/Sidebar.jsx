import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { IconButton, Avatar, Icon } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <Avatar src='https://external-preview.redd.it/Of20Cd3_f3Jep2nEaeTUOtElG4l7B8HdBGWYEQdOh5c.png?format=pjpg&auto=webp&s=1e4fd354212a32ba81ea9c8eb46be922c3ee089b'/>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon/>
          </IconButton>
          <IconButton>
            <ChatBubbleOutlineIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined/>
          <input placeholder='Search or start chat' type="text"/>
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>
    </div>
  )
}
