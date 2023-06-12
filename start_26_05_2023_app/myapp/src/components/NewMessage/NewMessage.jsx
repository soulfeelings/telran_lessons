import RecordButton from "../RecordButton/RecordButton";
import "./NewMessage.css";

export default function NewMessage() {
  return (
    <div className="NewMessage">
      <div className="MessageWrapper">
        <i className="fa-regular fa-face-smile"></i>
        <input placeholder="Message"/>
        <i className="fa-solid fa-paperclip"></i>
      </div>
      <RecordButton />
    </div>
  );
}
