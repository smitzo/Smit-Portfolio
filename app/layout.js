import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
