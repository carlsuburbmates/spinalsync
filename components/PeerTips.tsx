import React, { useState } from "react";

export default function PeerTips({ moduleSlug }: { moduleSlug: string }) {
  const [tips, setTips] = useState<string[]>(() => {
    const saved = localStorage.getItem(`peer_tips_${moduleSlug}`);
    return saved ? JSON.parse(saved) : [];
  });
  const [tip, setTip] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newTips = [...tips, tip];
    setTips(newTips);
    localStorage.setItem(`peer_tips_${moduleSlug}`, JSON.stringify(newTips));
    setTip("");
  }

  return (
    <div className="mt-6" role="region" aria-label="Peer Tips and Comments">
      <h3 className="text-base font-semibold mb-2" tabIndex={0}>Peer Tips & Comments</h3>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-2" aria-label="Add a peer tip">
        <input
          type="text"
          value={tip}
          onChange={e => setTip(e.target.value)}
          className="flex-1 px-2 py-1 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark"
          placeholder="Share a tip or comment..."
          required
          aria-label="Peer tip input"
        />
        <button
          type="submit"
          className="bg-primary-dark text-white px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
          aria-label="Add tip"
        >
          Add
        </button>
      </form>
      <ul className="space-y-1" aria-label="Peer tips list">
        {tips.map((t, i) => (
          <li key={i} className="bg-base-50 px-3 py-2 rounded-lg text-sm border border-base-100" tabIndex={0} aria-label={`Peer tip ${i + 1}`}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
