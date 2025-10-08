import Link from "next/link";
import modules from "../../data/modules.json";

export default function Education() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Education Modules</h1>
      <ul className="space-y-4">
        {modules.map((mod) => (
          <li key={mod.slug}>
            <Link
              href={`/education/${mod.slug}`}
              className="block p-4 rounded-xl shadow-card bg-white hover:bg-base-100 focus:outline-none focus:ring-4 focus:ring-accent-light"
            >
              <div className="font-medium text-lg mb-1 text-base-900">
                {mod.title}
              </div>
              <div className="text-sm text-base-600">{mod.summary}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
