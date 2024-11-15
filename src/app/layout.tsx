import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kanban",
  description: "Signboard that show all hot takes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={noto_sans.className} suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
