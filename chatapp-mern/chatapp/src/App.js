import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { React, useEffect, useState } from 'react'
import Pusher from 'pusher-js'
import instance from './axios'

function App() {
  const [messages, setMessages] = useState([])

  useEffect(()=>{
    instance.get('/messages/sync')
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
      alert(JSON.stringify(data));
      setMessages([...messages], data)
    });
    return () => {
      channel.unsubscribe.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  return (
    <div className='app'>
      <div className="app_body">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
