export const metadata = { title: "Game Store" };

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, background: "#0f1115", color: "#eee" }}>
        {children}
      </body>
    </html>
  );
}
