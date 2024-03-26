"use client";

import { useState } from "react";
import ChatBotNavigator from "./ChatBotNavigator";

export default function ChatBot() {
  const [isChatVisible, setChatVisibility] = useState(false);
  return (
    <>
      {isChatVisible && (
        <div className="fixed inset-0 overflow-hidden">
          <div className="flex w-full h-full items-center justify-end gap-4 pointer-events-none">
            {/* <div className="bg-black/40 w-full h-full dark:bg-white/40" /> */}
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-t-3xl flex flex-col gap-4 p-4 pointer-events-auto">
              <header className="flex items-center gap-4 py-4 -mt-2">
                <h1 className="text-2xl font-bold -mt-1">Chat with Us</h1>
                <button
                  className="black_btn"
                  onClick={() => setChatVisibility(false)}
                  size="sm"
                  variant="outline"
                >
                  Close
                </button>
              </header>
              <div className="grid grid-cols-12 gap-4 min-h-[200px] flex-1">
                <div className="col-start-1 col-span-12 flex flex-col gap-2">
                  <div className="rounded-lg bg-gray-100 px-4 py-3 ">
                    Hi there! How can we help you today?
                  </div>
                  <div className="rounded-lg bg-gray-100 px-4 py-3 ">
                    Do you have any questions about our pricing plans?
                  </div>
                </div>
                <div className="col-start-1 col-span-12 flex items-end">
                  <div className="flex flex-1 gap-2">
                    <input
                      className="search_input"
                      autoComplete="off"
                      id="message"
                      placeholder="Type a message..."
                    />
                    <button className="black_btn">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isChatVisible && <ChatBotNavigator handleClick={setChatVisibility} />}
    </>
  );
}
