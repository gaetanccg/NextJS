import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PinsState {
  pins: string[];
  togglePin: (uid: string) => void;
  isPinned: (uid: string) => boolean;
}

export const usePinsStore = create<PinsState>()(
  persist(
    (set, get) => ({
      pins: [],
      togglePin: (uid) =>
        set((state) => ({
          pins: state.pins.includes(uid)
            ? state.pins.filter((id) => id !== uid)
            : [...state.pins, uid],
        })),
      isPinned: (uid) => get().pins.includes(uid),
    }),
    { name: "pins-storage" },
  ),
);
