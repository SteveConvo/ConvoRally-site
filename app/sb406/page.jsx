import fs from "node:fs";
import path from "node:path";

const contentDir = path.join(process.cwd(), "app/sb406/_content");
const styles = fs.readFileSync(path.join(contentDir, "styles.css"), "utf8");
const body = fs.readFileSync(path.join(contentDir, "body.html"), "utf8");

export default function SB406Page() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
