import React, { useEffect, useState, useRef } from 'react';
import './chat.css';
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (emojiObject,e) => {
    setText((prev) => prev + emojiObject.emoji);
    setOpen(false);
  };

  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
          <img src="./avatar.png" alt="avatar" />
          <div className='texts'>
            <span>Jane Doe</span>
            <p>Hello I am Adwitya</p>
          </div>
        </div>
        <div className='icons'>
          <img src="./phone.png" alt="phone" />
          <img src="./video.png" alt="video" />
          <img src="./info.png" alt="info" />
        </div>
      </div>
      <div className='center'>
        <div className='message'>
          <img src="./avatar.png" alt="avatar" />
          <div className='texts'>
            <p>The development time for the front-end of a website is typically shorter than the development time for the back-end. The front-end involves the user interface, visual design, and client-side functionality, which can often be implemented more quickly than the complex business logic, data processing, and server-side functionality that make up the back-end. However, the relative development times can vary significantly depending on the specific requirements and complexity of the website or application.</p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6L8JAkJnZj9v9kFF7CiffGBPJKp8A9tDtyg&s" alt="avatar" />
            <p>The development time for the front-end of a website is typically shorter than the development time for the back-end. The front-end involves the user interface, visual design, and client-side functionality, which can often be implemented more quickly than the complex business logic, data processing, and server-side functionality that make up the back-end. However, the relative development times can vary significantly depending on the specific requirements and complexity of the website or application.</p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className='message'>
          <img src="./avatar.png" alt="avatar" />
          <div className='texts'>
            <p>The development time for the front-end of a website is typically shorter than the development time for the back-end. The front-end involves the user interface, visual design, and client-side functionality, which can often be implemented more quickly than the complex business logic, data processing, and server-side functionality that make up the back-end. However, the relative development times can vary significantly depending on the specific requirements and complexity of the website or application.</p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <p>The development time for the front-end of a website is typically shorter than the development time for the back-end. The front-end involves the user interface, visual design, and client-side functionality, which can often be implemented more quickly than the complex business logic, data processing, and server-side functionality that make up the back-end. However, the relative development times can vary significantly depending on the specific requirements and complexity of the website or application.</p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className='bottom'>
        <div className='icons'>
          <img src="./img.png" alt="img" />
          <img src="./camera.png" alt="camera" />
          <img src="./mic.png" alt="mic" />
        </div>
        <input type="text" placeholder="Type a message..." value={text} onChange={e => setText(e.target.value)} />
        <div className="emoji">
          <img src="./emoji.png" alt="emoji" onClick={() => setOpen(prev => !prev)} />
          {open && (
            <div className='picker'>
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
          )}
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default Chat;
