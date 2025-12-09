import "@/styles/global.scss";

export const metadata = {
  icons: {
    // Standard favicons
    icon: [
      { url: "/favcions/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favcions/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favcions/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/favcions/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      { url: "/favcions/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],

    // Desktop shortcuts (Chrome)
    shortcut: [
      { url: "/favcions/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],

    // Apple touch icons
    apple: [
      { url: "/favcions/apple-icon.png" }, // 180×180 maskable
      { url: "/favcions/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/favcions/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/favcions/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/favcions/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/favcions/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/favcions/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/favcions/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/favcions/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/favcions/apple-icon-180x180.png", sizes: "180x180" },
    ],

    // Safari pinned tab / mask icon
    other: [
      { rel: "mask-icon", url: "/favcions/favicon.svg", color: "#f7eee3" },
      // Microsoft tiles
      { rel: "msapplication-TileImage", url: "/favcions/ms-icon-144x144.png" },
    ],
  },

  // PWA / Android manifest
  manifest: "/favcions/manifest.json",
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
