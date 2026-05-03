export const metadata = {
  title: "OPC Next SSR B6 Fixture",
  description: "Minimal Next.js server-rendered fixture for OPC staging validation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
