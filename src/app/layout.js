import "./globals.css";

export const metadata = {
  title: "Vista",
  description: "Track, Analyze, and Predict cryptocurrency market",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
