import "@/styles/global.scss";

export const metadata = {
  icons: {
    icon: "/favcions/favicon.ico",
    shortcut: "/favcions/favicon-96x96.png",
    apple: "/favcions/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/favcions/favicon.svg",
      },
    ],
  },
  manifest: "/favcions/site.webmanifest",
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
