import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TodoList",
  description: "CRUD feito com Next JS , Tailwindcss e TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-Br">
      <body>{children}</body>
    </html>
  );
}
