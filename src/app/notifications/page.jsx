"use client";

import { useState } from "react";

import { notifications } from "@/data/notifications";

import NotificationCard from "@/components/notifications/NotificationCard";

import NotificationFilters from "@/components/notifications/NotificationFilters";

import NotificationHeader from "@/components/notifications/NotificationHeader";

export default function NotificationsPage() {
  const [filter, setFilter] =
    useState("all");

  const filtered =
    filter === "all"
      ? notifications
      : notifications.filter(
          (item) =>
            item.type === filter
        );

  return (
    <div>
      <NotificationHeader />

      <NotificationFilters
        active={filter}
        setActive={setFilter}
      />

      <div className="mt-8 space-y-4">
        {filtered.map((item) => (
          <NotificationCard
            key={item.id}
            notification={item}
          />
        ))}
      </div>
    </div>
  );
}