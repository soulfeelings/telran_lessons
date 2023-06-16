import "./App.css";
import ChatsHeader from "./components/ChatsHeader/ChatsHeader";
import ChatElement from "./components/ChatElement/ChatElement";
import { useState } from "react";
import UserInfo from "./components/UserInfo/UserInfo";
import chats from "./mock/chats";
import ChatBackground from "./components/ChatBackground/ChatBackground";
import NewMessage from "./components/NewMessage/NewMessage";
import ChatMessages from "./components/ChatMessages/ChatMessages";

function App() {
  const [currentID, setCurrentId] = useState(+localStorage.getItem("chatId"));
  const [chatsState, setChatsState] = useState(chats);

  const chat = chatsState.find((element) => element.id === currentID);

  return (
    <div className="App">
      <div className="Chats">
        <ChatsHeader />
        <div className="Chats__list">
          {chatsState.map((chatItem) => {
            return (
              <ChatElement
                key={chatItem.id}
                isBlue={chatItem.id === currentID}
                avatar={chatItem.avatar}
                title={chatItem.title}
                description={chatItem.description}
                time={chatItem.last_msg_time}
                handleClick={() => {
                  setCurrentId(chatItem.id);
                  localStorage.setItem("chatId", chatItem.id);
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="ChatWindow">
        <ChatBackground />
        <UserInfo title={chat.title} avatar={chat.avatar} />
        <ChatMessages messages={chat.messages} />
        <NewMessage
          chatsMessages={chat.messages}
          setChatMessages={(chat_messages) => {
            setChatsState(
              chatsState.map((element) => {
                if (element.id === currentID) {
                  return { ...element, messages: chat_messages };
                } else {
                  return element;
                }
              })
            );

            // Вариант 2 - чтобы быть уверенным в последнем состоянии
            // setChatsState((prevState) => {
            //   // console.log("prevState", prevState);
            //   return prevState.map((element) => {
            //     if (element.id === currentID) {
            //       return { ...element, messages: chat_messages };
            //     } else {
            //       return element;
            //     }
            //   });
            // });
          }}
        />
      </div>
    </div>
  );
}

function getElement(element) {
  
}

export default App;
