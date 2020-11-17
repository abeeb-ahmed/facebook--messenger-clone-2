import React, {useState, useEffect} from "react";
import Message from "./Message.jsx";
import { Button, Input, FormControl, InputLabel, IconButton} from '@material-ui/core';
import "./App.css";
import db from "./firebase.js";
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';


function App() {

  
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{
    username: "",
    message: ""
  }]);
  const [username, setUsername] = useState("");
  useEffect(()=>{
    db.collection("messages")
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc=> ({id: doc.id, message: doc.data()})))
    })

  }, []);

  useEffect(()=>{
    setUsername(prompt("Enter your name: "))
  }, [])
  

  const sendMessage = (event) =>{
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()



    })
    setMessages([...messages, {username: username, message: input}]);
    setInput("");


  }
  return (
    <div id="app">
      <h1>Facebook Messenger</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" onChange={event =>setInput(event.target.value)} type="text" value={input} placeholder="Enter message here"  />
          <IconButton className="app__iconButton" variant="contained" color="primary" type="submit" onClick={sendMessage} ondisabled={!input}>
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({message, id}) => (
          <Message key={id} message={message} username={username} /> 
          ))
          
        }

      </FlipMove>
        
          
      
    
      
    </div>
    
    
  );


    

 
 

  
  
 
}

export default App;
