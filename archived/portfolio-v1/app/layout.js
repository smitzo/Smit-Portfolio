import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Smit Joshi | Backend & AI Engineer",
  description:
    "Smit Joshi builds reliable backend systems, data-intensive products, and practical AI workflows.",
  openGraph: {
    title: "Smit Joshi | Backend & AI Engineer",
    description:
      "Backend systems, data-intensive products, and practical AI workflows.",
    images: ["/hero-systems.png"],
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const stored = localStorage.getItem("portfolio-theme");
                const theme = stored || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
                document.documentElement.dataset.theme = theme;
              } catch {}
            })();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
