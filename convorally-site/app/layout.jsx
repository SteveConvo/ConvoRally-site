import "./globals.css";

export const metadata = {
  title: "ConvoRally — The Truth Ledger for Multi-Party Projects",
  description: "Every conversation, agreement, and milestone — time-stamped, verified, and immutable. If it's not written, it's not real.",
  openGraph: {
    title: "ConvoRally — The Truth Ledger",
    description: "Every conversation, agreement, and milestone — time-stamped, verified, and immutable.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
