import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
