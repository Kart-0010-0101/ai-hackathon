import "./globals.css";
import LayoutContent from "@/components/LayoutContent";
import { metadata } from "./metadata";

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LayoutContent>
        {children}
        </LayoutContent>
      </body>
    </html>
  );
}
