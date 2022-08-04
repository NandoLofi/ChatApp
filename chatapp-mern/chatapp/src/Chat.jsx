import {React, useState} from 'react'
import './Chat.css'
import { Avatar, IconButton } from "@mui/material"
import { SearchOutlined, MoreVert, AttachFile, InsertEmoticon, SettingsInputAntenna, AutoFixHighSharp } from '@mui/icons-material';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios'

export default function Chat({ messages }) {
  const [input, setInput] = useState("")
  const sendMessage = async (e) => {
    e.preventDefault();
    axios.post('/messages/new', {
      message: input,
      name: "ChatApp",
      timestamp: "Just Now",
      recieved: false
    });
    setInput("")
  }
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
           <p 
           className={`chat__message ${message.recieved && "chat__reciever"}`}
           >
           <span className="chat__name">{message.name}</span>
            {message.message}
           <span className="chat__timestamp"> {message.timestamp}</span>
         </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input value={input} onChange={(e)=> setInput(e.target.value)} placeholder='Type a message' type="text"/>
            <button onClick={sendMessage} type="submit">
              Send a message
            </button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}
