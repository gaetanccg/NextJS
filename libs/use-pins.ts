"use client";

import { useEffect, useState } from "react";
import { usePinsStore } from "./pins-store";

export function usePins() {
  const store = usePinsStore();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return {
    pins: hydrated ? store.pins : [],
    count: hydrated ? store.pins.length : 0,
    togglePin: store.togglePin,
    isPinned: (uid: string) => hydrated && store.pins.includes(uid),
    hydrated,
  };
}
