import { Poppins } from "next/font/google";
import "highlight.js/styles/github-dark.css";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'pled',
  description: "just a simple portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
