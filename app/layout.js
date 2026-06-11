import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Smit Joshi | Software Developer",
  description:
    "Portfolio of Smit Joshi, a software developer building Python based apps, interested in automation workflows, and analytics.",
  openGraph: {
    title: "Smit Joshi | Software Developer",
    description:
      "Interested in Python based apps, automation workflows, and analytics.",
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
      <body className={geist.className}>{children}</body>
    </html>
  );
}
