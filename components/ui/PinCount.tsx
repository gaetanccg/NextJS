"use client";

import { usePins } from "@/libs/use-pins";

export default function PinCount() {
  const { count } = usePins();
  return <>{count}</>;
}
