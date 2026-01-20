import "@/styles/tailwind.css";
import "@/styles/global.scss";

export const metadata = {
  icons: {
    // Standard favicons
    icon: [
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],

    // Apple touch icon
    apple: [{ url: "/favicons/apple-touch-icon.png" }],

    // Safari pinned tab / mask icon
    other: [
      { rel: "mask-icon", url: "/favicons/favicon.svg", color: "#f7eee3" },
    ],
  },

  // PWA / Android manifest
  manifest: "/favicons/site.webmanifest",
};

export const viewport = {
  themeColor: "#f7eee3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div id="modal-root" />
      </body>
    </html>
  );
}
