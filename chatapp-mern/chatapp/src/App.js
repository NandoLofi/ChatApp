import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { React, useEffect, useState } from 'react'
import Pusher from 'pusher-js'
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([])

  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response => {
      setMessages(response.data)
    })
  }, [])

  useEffect(()=> {
    const pusher = new Pusher('a6d179ec27a42763028a', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setMessages([...messages, data])
    });
  }, [messages])

  return (
    <div className='app'>
      <div className="app_body">
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
