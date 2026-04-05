import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXUS AI — Intelligence That Moves Business Forward",
  description:
    "We build AI-powered software and enterprise automation solutions. From problem discovery to full integration — we architect the intelligence behind your business.",
  keywords: [
    "AI consulting",
    "enterprise automation",
    "AI integration",
    "n8n automation",
    "software development",
    "AI solutions",
  ],
  openGraph: {
    title: "NEXUS AI — Intelligence That Moves Business Forward",
    description:
      "AI integration and enterprise process automation consulting agency.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
