import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AWS CLF-02 Practice Exam",
  description: "Practice exam questions for the AWS Certified Cloud Practitioner exam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navigation Pane */}
        <nav className="bg-gray-800 text-white p-4 shadow-md">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="text-lg font-semibold hover:text-blue-300 transition-colors"
            >
              AWS Quiz
            </Link>
          </div>

        </nav>
        
        {/* Main Content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
