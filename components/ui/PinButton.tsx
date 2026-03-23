"use client";

import { usePins } from "@/libs/use-pins";
import clsx from "clsx";

export default function PinButton({ uid }: { uid: string }) {
  const { togglePin, isPinned } = usePins();
  const pinned = isPinned(uid);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        togglePin(uid);
      }}
      aria-label={pinned ? "Retirer des favoris" : "Ajouter aux favoris"}
      className="cursor-pointer"
    >
      <span
        className={clsx(
          "material-symbols-outlined",
          pinned && "material-symbols-filled",
        )}
      >
        keep
      </span>
    </button>
  );
}
