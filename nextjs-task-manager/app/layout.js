import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Task Manager",
  description: "A small task manager built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <p className="site-name">Task Manager</p>
          <nav aria-label="Main">
            <Link href="/">Tasks</Link>
            <Link href="/about">About</Link>
            <Link href="/tips">Tips</Link>
          </nav>
        </header>
        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
