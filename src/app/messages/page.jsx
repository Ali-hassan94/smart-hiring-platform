"use client";

import { useState } from "react";

import {
  conversations,
  messages,
} from "@/data/messages";

import ConversationList from "@/components/messages/ConversationList";

import ChatWindow from "@/components/messages/ChatWindow";

export default function MessagesPage() {
  const [activeId, setActiveId] =
    useState(1);

  const activeUser =
    conversations.find(
      (user) =>
        user.id === activeId
    );

  return (
    <div
      className="
      grid
      lg:grid-cols-[320px_1fr]
      gap-6
      "
    >
      <div>
        <ConversationList
          conversations={
            conversations
          }
          activeId={activeId}
          setActiveId={
            setActiveId
          }
        />
      </div>

      <ChatWindow
        user={activeUser}
        messages={messages}
      />
    </div>
  );
}