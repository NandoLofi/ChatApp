import {React, useState} from 'react'
import './Chat.css'
import { Avatar, IconButton } from "@mui/material"
import { SearchOutlined, MoreVert, AttachFile, InsertEmoticon } from '@mui/icons-material';
import MicIcon from '@mui/icons-material/Mic';

export default function Chat({ messages }) {
  const [input, setInput] = useState("")
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
        {messages.map((message)=> (
           <p className={`chat__message ${message.recieved && "chat_reciever"}`}>
           <span className="chat__name">{message.name}</span>
             {message.message}
           <span className="chat__timestamp"> {message.timestamp}</span>
         </p>
        ))}
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
