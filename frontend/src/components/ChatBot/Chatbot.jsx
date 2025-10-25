import React, { useState } from "react";
import { Groq } from "@groq/groq-sdk";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await Groq.chat({
        messages: [{ role: "user", content: input }],
      });

      const botMessage = {
        text: response.choices[0].message.content,
        sender: "bot",
      };

      setMessages((prev) => [...prev, userMessage, botMessage]);
    } catch (error) {
      console.error("GROQ API error:", error);
      const errorMessage = { text: "Oops! Something went wrong.", sender: "bot" };
      setMessages((prev) => [...prev, userMessage, errorMessage]);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white shadow-lg rounded-xl flex flex-col overflow-hidden z-50">
      <div className="bg-blue-600 text-white p-3 font-semibold">Chat with AI</div>

      <div className="flex-1 p-3 overflow-y-auto max-h-96">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-lg max-w-xs break-words ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex border-t border-gray-300">
        <input
          className="flex-1 p-2 outline-none"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
