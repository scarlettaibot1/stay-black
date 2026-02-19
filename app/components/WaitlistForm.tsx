'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-white/10 p-8 max-w-lg mx-auto">
        <p className="text-lg font-semibold mb-2">You&apos;re in.</p>
        <p className="text-gray-400 text-sm">We&apos;ll email you when we launch. Stay black.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
    >
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-transparent border border-white/20 px-4 py-3 text-sm placeholder:text-gray-600 focus:outline-none focus:border-white/40 transition-colors"
      />
      <button
        type="submit"
        className="bg-white text-black px-8 py-3 text-sm font-semibold tracking-[0.1em] hover:bg-gray-200 transition-colors"
      >
        JOIN
      </button>
    </form>
  );
}
