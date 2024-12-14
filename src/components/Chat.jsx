import React, { useState, useRef, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';
import { format } from 'date-fns';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you today?",
      sender: "admin",
      timestamp: new Date('2024-12-14T15:30:00')
    },
    {
      id: 2,
      text: "I need help with my vehicle",
      sender: "user",
      timestamp: new Date('2024-12-14T15:31:00')
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "user",
        timestamp: new Date()
      };
      
      setMessages([...messages, message]);
      setNewMessage('');

      // Simulate admin response after 1 second
      setTimeout(() => {
        const adminResponse = {
          id: messages.length + 2,
          text: "Thank you for your message. Our team will assist you shortly.",
          sender: "admin",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, adminResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-3xl overflow-hidden">
      {/* Chat Header */}
      <div className="bg-[#82CD47] p-4 text-white">
        <h3 className="font-medium">Customer Support</h3>
        <p className="text-sm opacity-80">Online</p>
      </div>

      {/* Messages Container */}
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.sender === 'user'
                  ? 'bg-[#82CD47] text-white rounded-tr-none'
                  : 'bg-white text-gray-800 rounded-tl-none shadow-sm'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-[10px] mt-1 ${
                message.sender === 'user' ? 'text-white/80' : 'text-gray-500'
              }`}>
                {format(message.timestamp, 'HH:mm')}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white border-t">
        <div className="flex items-center gap-2">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#82CD47] max-h-32 resize-none"
            rows="1"
          />
          <button
            onClick={handleSendMessage}
            className="p-3 bg-[#82CD47] text-white rounded-xl hover:bg-[#72bd37] transition-colors"
          >
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
