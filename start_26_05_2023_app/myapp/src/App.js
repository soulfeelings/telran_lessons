import "./App.css";
import ChatsHeader from "./components/ChatsHeader/ChatsHeader";
import ChatElement from "./components/ChatElement/ChatElement";

const chats = [
  {
    avatar:
      "https://amiel.club/uploads/posts/2022-03/1647766434_9-amiel-club-p-kartinki-chat-10.png",
    title: "Chat number 1",
    description: "aelr aketkhjanetkhalkntehklslkrlhms;lrm ;mrljmdl;tymj",
    last_msg_time: "23:59",
  },
  {
    avatar:
      "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
    title: "Presidents chat",
    description: "010101010101101010101001001010 0101 010 0101010010",
    last_msg_time: "01:11",
  },
  {
    avatar:
      "https://amiel.club/uploads/posts/2022-03/1647766434_9-amiel-club-p-kartinki-chat-10.png",
    title: "Chat number 1",
    description: "aelr aketkhjanetkhalkntehklslkrlhms;lrm ;mrljmdl;tymj",
    last_msg_time: "23:59",
  },
  {
    avatar:
      "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
    title: "Presidents chat",
    description: "010101010101101010101001001010 0101 010 0101010010",
    last_msg_time: "01:11",
  },
];

function App() {
  return (
    <div className="App">
      <div className="Chats">
        <ChatsHeader />
        <div className="Chats__list">
          {chats.map(() => {
            return <ChatElement />;
          })}
        </div>
      </div>
      <div className="ChatWindow"></div>
    </div>
  );
}

export default App;
