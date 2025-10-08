import "../styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "SpinalSync",
  description: "Interactive education for spinal rehabilitation primary nurses",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-base-50 text-base-900">{children}</body>
    </html>
  );
}
