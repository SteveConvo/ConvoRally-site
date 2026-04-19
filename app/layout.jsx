import "./globals.css";
export const metadata = {
  title: "ConvoRally — Trust Infrastructure for Multi-Party Projects",
  description: "ConvoRally keeps conversations, approvals, changes, and payments in one place — so nobody can say that's not what we agreed to.",
  icons: { 
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ConvoRally — If it's not written, it's not real.",
    description: "ConvoRally keeps conversations, approvals, changes, and payments in one place. Trust infrastructure for multi-party projects.",
    url: "https://convorally.com",
    siteName: "ConvoRally",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ConvoRally — If it's not written, it's not real.",
    description: "Trust infrastructure for multi-party projects.",
  },
  metadataBase: new URL("https://convorally.com"),
};
export default function RootLayout({ children }) {
  return (<html lang="en"><head><link rel="icon" href="/favicon.ico" sizes="any" /><link rel="apple-touch-icon" href="/apple-touch-icon.png" /></head><body>{children}</body></html>);
}
