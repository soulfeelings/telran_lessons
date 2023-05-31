import "./ChatElement.css";

const time = "13:10";

export default function ChatElement() {
  return (
    <div className="ChatElement">
      <img
        className="ChatElement__avatar"
        src="https://amiel.club/uploads/posts/2022-03/1647766434_9-amiel-club-p-kartinki-chat-10.png"
      />
      <div className="ChatElement__content">
        <p className="ChatElement__title">Title</p>
        <p className="ChatElement__description">
          {"Мама пошла в магазин за яблоками"}
        </p>
      </div>
      <div className="ChatElement__time">{time}</div>
    </div>
  );
}
