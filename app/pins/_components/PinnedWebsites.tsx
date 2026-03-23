"use client";

import { useEffect, useState } from "react";
import { usePins } from "@/libs/use-pins";
import { createClient } from "@/prismicio";
import { WebsiteDocument } from "@/prismicio-types";
import Website from "@/components/ui/Website";

export default function PinnedWebsites() {
  const { pins, hydrated } = usePins();
  const [websites, setWebsites] = useState<WebsiteDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!hydrated) return;
    if (pins.length === 0) {
      setWebsites([]);
      setLoading(false);
      return;
    }

    const client = createClient();
    client
      .getByUIDs("website", pins)
      .then((response) => {
        setWebsites(response.results as WebsiteDocument[]);
      })
      .finally(() => setLoading(false));
  }, [pins, hydrated]);

  if (!hydrated || loading) {
    return <p>Chargement...</p>;
  }

  if (websites.length === 0) {
    return <p>Aucun site web épinglé.</p>;
  }

  return (
    <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 pt-12">
      {websites.map((w) => (
        <Website key={w.uid} website={w} />
      ))}
    </div>
  );
}
