import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { randomMessageGenerator } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    const [LiveMessage,setLiveMessage] = useState("");

    useEffect(() =>{
        const i = setInterval(()=>{
            //API polling
            dispatch(addMessage({
                name: "Mahima",
                message: randomMessageGenerator(),
            }));
            console.log("Mahima");
        },2000);

        return () => clearInterval(i);
    },[]);

  return (
    <>
        <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-sm overflow-y-scroll flex flex-col-reverse'>
       {
            chatMessages.map((msg,index) => 
                (<ChatMessage key={index} name={msg.name} message={msg.message}/>
                ))
       } 
    </div>
    <form className='border w-full border-black ml-2 justify-between' onSubmit={(e) => {
         e.preventDefault();
         dispatch(addMessage({
             name: "Mahi",
             message: LiveMessage,
         }))
         setLiveMessage("");
    }}>
        <input value={LiveMessage} onChange={(e) => setLiveMessage(e.target.value) } type="text" className='m-1 w-[23vw] border border-black'/>
        <button className='p-1 mx-2 bg-green-200 rounded-sm'>Send</button>
    </form>
    </>
  )
}

export default LiveChat;