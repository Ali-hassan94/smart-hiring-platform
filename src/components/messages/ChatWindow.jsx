import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import TypingIndicator from "./TypingIndicator";

export default function ChatWindow({
  user,
  messages,
}) {
  return (
    <div
      className="
      h-[80vh]
      border
      border-white/10
      rounded-3xl
      flex
      flex-col
      "
    >
      <ChatHeader user={user} />

      <div
        className="
        flex-1
        overflow-y-auto
        p-5
        space-y-4
        "
      >
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            message={msg}
          />
        ))}

        <TypingIndicator />
      </div>

      <MessageInput />
    </div>
  );
}