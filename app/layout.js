export const metadata = {
  title: "Gavin Prior | Full stack developer",
  description: "A Portfolio website for Gavin Prior",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
