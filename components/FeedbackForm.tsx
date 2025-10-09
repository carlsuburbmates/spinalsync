import React, { useState } from "react";

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem("user_feedback", feedback);
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded-xl shadow-card bg-white max-w-md mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-2">Your Feedback</h2>
      <textarea
        className="w-full min-h-[80px] p-2 rounded border border-base-300 mb-2"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Share your thoughts or suggestions..."
        required
      />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Submit</button>
      {submitted && <p className="mt-2 text-success">Thank you for your feedback!</p>}
    </form>
  );
}
