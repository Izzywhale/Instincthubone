import "./globals.css";

export const metadata = {
  title: "Job Test",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
