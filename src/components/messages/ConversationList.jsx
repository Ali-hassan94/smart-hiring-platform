import ConversationItem from "./ConversationItem";

export default function ConversationList({
  conversations,
  activeId,
  setActiveId,
}) {
  return (
    <div className="space-y-3">
      {conversations.map(
        (conversation) => (
          <ConversationItem
            key={conversation.id}
            conversation={conversation}
            active={
              activeId ===
              conversation.id
            }
            onClick={() =>
              setActiveId(
                conversation.id
              )
            }
          />
        )
      )}
    </div>
  );
}