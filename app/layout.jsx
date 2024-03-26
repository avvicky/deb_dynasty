import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import ChatBot from "@components/Chatbot";

export const metadata = {
  title: "Find'it",
  description: "Find Optimized Route",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
            <ChatBot />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Rootlayout;
