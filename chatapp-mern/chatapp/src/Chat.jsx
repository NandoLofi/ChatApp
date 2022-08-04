import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from "@mui/material"
import { SearchOutlined, MoreVert, AttachFile, InsertEmoticon } from '@mui/icons-material';
import MicIcon from '@mui/icons-material/Mic';

export default function Chat() {
  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p> Last seen at... </p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div> 
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Nando</span>
            This is a message
          <span className="chat__timestamp"> {new Date().toUTCString()}  </span>
        </p>
        <p className="chat__reciever chat__message">
          <span className="chat__name">Nando</span>
            This is a message
          <span className="chat__timestamp"> {new Date().toUTCString()}  </span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Nando</span>
            This is a message
          <span className="chat__timestamp"> {new Date().toUTCString()}  </span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input placeholder='Type a message' type="text"/>
            <button>
              Send a message
            </button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}
