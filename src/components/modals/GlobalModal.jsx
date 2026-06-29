"use client";

import {
  useModalStore,
} from "@/store/modalStore";

export default function GlobalModal() {
  const {
    open,
    setOpen,
  } = useModalStore();

  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/80
      flex
      items-center
      justify-center
      z-50
      "
    >
      <div
        className="
        bg-black
        border
        border-white/10
        rounded-3xl
        p-10
        "
      >
        <h2>
          Global Modal
        </h2>

        <button
          onClick={() =>
            setOpen(false)
          }
        >
          Close
        </button>
      </div>
    </div>
  );
}