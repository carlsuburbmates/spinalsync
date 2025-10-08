
import "../styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "SpinalSync",
  description: "Interactive education for spinal rehabilitation primary nurses",
};

function TopBar() {
  return (
    <header className="w-full px-4 py-3 flex items-center justify-between bg-white shadow-sm border-b border-base-100 sticky top-0 z-20">
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl text-primary">SpinalSync</span>
        <span className="ml-2 text-xs text-base-500">Primary Nursing</span>
      </div>
      <div className="flex items-center gap-4">
        {/* Progress indicator placeholder */}
        <span className="text-sm text-base-600">Module Progress</span>
      </div>
    </header>
  );
}

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 bg-white border-t border-base-100 flex items-center justify-around z-30 shadow-lg">
      {/* Example tab bar, replace icons/labels as needed */}
      <button className="flex flex-col items-center text-xs text-base-700 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Home">
        <span className="material-symbols-outlined">home</span>
        Home
      </button>
      <button className="flex flex-col items-center text-xs text-base-700 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Education">
        <span className="material-symbols-outlined">school</span>
        Education
      </button>
      <button className="flex flex-col items-center text-xs text-base-700 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Quick-Ref">
        <span className="material-symbols-outlined">bolt</span>
        Quick-Ref
      </button>
      <button className="flex flex-col items-center text-xs text-base-700 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Resources">
        <span className="material-symbols-outlined">library_books</span>
        Resources
      </button>
      <button className="flex flex-col items-center text-xs text-base-700 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Profile">
        <span className="material-symbols-outlined">person</span>
        Profile
      </button>
    </nav>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-base-50 text-base-900 focus:outline-none focus:ring-2 focus:ring-primary">
        <TopBar />
        <main className="pt-4 pb-20 px-4 max-w-3xl mx-auto w-full">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
