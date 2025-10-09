import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 flex flex-col gap-6 max-w-2xl mx-auto">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Welcome to SpinalSync</h1>
        <p className="text-base text-base-700">
          An interactive learning companion for primary nurses in spinal
          rehabilitation.
        </p>
      </header>
      <section className="flex flex-col gap-4">
        <Link
          href="/education"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl text-white bg-primary-dark hover:bg-primary group focus:outline-none focus:ring-4 focus:ring-accent-light"
        >
          Start Learning
        </Link>
        <p className="text-sm text-base-600">
          Or access quick reference protocols directly via the Quick‑Ref tab.
        </p>
      </section>
    </main>
  );
}
