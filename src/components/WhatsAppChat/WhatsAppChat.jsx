import React, { useState, useEffect, useRef } from "react";
import { FiSend, FiCheck } from "react-icons/fi";

const WhatsAppChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey I my name is noxuan and I am in group accuracy and wadnesday want to ask you if I can replace my schedule with another group ministry.",
      sender: "received",
      time: "1:03 PM",
      status: "read",
    },
    {
      id: 2,
      text: "Thanks for reaching out .",
      sender: "sent",
      time: "1:05 PM",
      status: "read",
    },
    {
      id: 3,
      text: "Thanks for reaching out, I understand you want to stretch your schedule from the Saturday and Wednesday group to the Monday group. In information checking within the group coordinates or your intention to see it that possible. They can provide the best guidance on any available options.",
      sender: "sent",
      time: "1:05 PM",
      status: "read",
    },
    {
      id: 4,
      text: "Thanks for reaching out, I understand you want to stretch your schedule from the Saturday and.",
      sender: "sent",
      time: "1:05 PM",
      status: "read",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Scroll to bottom
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: "sent",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "sent",
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMsg.id ? { ...msg, status: "delivered" } : msg
        )
      );
    }, 1000);

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMsg.id ? { ...msg, status: "read" } : msg
        )
      );
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md flex flex-col h-screen">
        {/* Chat Messages */}
        <div
          ref={messagesContainerRef}
          className="flex-1 p-3 overflow-y-auto min-h-0"
        >
          {/* Date */}
          <div className="text-center text-gray-500 text-xs my-2">
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>

          {/* Messages */}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`max-w-xs md:max-w-md lg:max-w-lg mx-2 my-1 p-3 rounded-lg ${
                message.sender === "sent"
                  ? "bg-green-100 ml-auto rounded-tr-none"
                  : "bg-white mr-auto rounded-tl-none"
              } shadow`}
            >
              <p className="text-gray-800">{message.text}</p>
              <div className="flex justify-end items-center mt-1">
                <span className="text-xs text-gray-500 mr-1">
                  {message.time}
                </span>
                {message.sender === "sent" && (
                  <span
                    className={`text-xs ${
                      message.status === "read"
                        ? "text-blue-400"
                        : "text-gray-400"
                    }`}
                  >
                    <FiCheck className="inline" />
                    {message.status === "delivered" ||
                    message.status === "read" ? (
                      <FiCheck className="inline -ml-1" />
                    ) : null}
                  </span>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className=" p-3 flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message"
            className="flex-1 py-2 px-4 rounded-full bg-white focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 bg-green-700 text-white p-2 rounded-full hover:bg-green-800 focus:outline-none"
          >
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChat;
