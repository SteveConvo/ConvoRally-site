import fs from "node:fs";
import path from "node:path";

export const metadata = {
  title: "ConvoRally for Georgia HOAs — Be Ready for SB 406, the Property Owners' Bill of Rights",
  description:
    "Georgia SB 406 — the Property Owners' Bill of Rights Act — fully takes effect January 1, 2027. ConvoRally gives your HOA the receipts: notices with citations and cure periods, 10-year records, board votes, and a clean audit pack the Secretary of State can read.",
  openGraph: {
    title: "Be Ready for Georgia SB 406 — ConvoRally for HOA Boards & Property Managers",
    description:
      "SB 406 requires registration with the Georgia Secretary of State, 10-year record retention, written notice with citation and cure period, and clean payment application. ConvoRally produces the receipt — automatically.",
    type: "website",
  },
};

const faqJsonLd = fs.readFileSync(
  path.join(process.cwd(), "app/sb406/_content/faq-jsonld.json"),
  "utf8"
);

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />
      {children}
    </>
  );
}
