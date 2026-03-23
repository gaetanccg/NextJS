"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type TagSearchProps = {
  tags?: string[];
};

export default function TagSearch({ tags: initialTags }: TagSearchProps) {
  const router = useRouter();
  const [tags, setTags] = useState<string[]>(initialTags || []);
  const [selectedTag, setSelectedTag] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!initialTags) {
      fetch("/api/tags")
        .then((res) => res.json())
        .then((data) => setTags(data))
        .catch(() => {});
    }
  }, [initialTags]);

  const handleSelectTag = (tag: string) => {
    setSelectedTag(tag);
    setIsOpen(false);
    router.push(`/search?tag=${encodeURIComponent(tag)}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTag) {
      router.push(`/search?tag=${encodeURIComponent(selectedTag)}`);
    }
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="w-full flex gap-2 items-center bg-soft rounded-md p-2 relative"
    >
      <button type="submit" className="flex">
        <span className="material-symbols-outlined">search</span>
      </button>
      <input
        type="text"
        placeholder="Rechercher par tags"
        className="flex-1 bg-transparent outline-none"
        value={selectedTag}
        onChange={(e) => {
          setSelectedTag(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      />
      {isOpen && tags.length > 0 && (
        <ul className="absolute top-full left-0 right-0 bg-white border border-soft rounded-md mt-1 max-h-60 overflow-y-auto z-50 shadow-lg">
          {tags
            .filter((tag) =>
              tag.toLowerCase().includes(selectedTag.toLowerCase()),
            )
            .map((tag) => (
              <li key={tag}>
                <button
                  type="button"
                  className="w-full text-left px-4 py-2 hover:bg-soft transition-colors"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleSelectTag(tag);
                  }}
                >
                  {tag}
                </button>
              </li>
            ))}
        </ul>
      )}
    </form>
  );
}
