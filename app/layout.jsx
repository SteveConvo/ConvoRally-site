import "./globals.css";
export const metadata = {
  title: "ConvoRally — Trust Infrastructure for Multi-Party Projects",
  description: "ConvoRally keeps conversations, approvals, changes, and payments in one place — so nobody can say 'that's not what we agreed to.'",
};
export default function RootLayout({ children }) {
  return (<html lang="en"><body>{children}</body></html>);
}
