import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const centuryGothic = localFont({
  src: [
    {
      path: "../static/font/CenturyGothic.ttf",
      // weight: "700",
    },
  ],
  variable: "--font-century",
});
export const metadata: Metadata = {
  title: {
    template: "%s | AnonymizeCare",
    default: "AnonymizeCare",
  },
  description:
    "Be the first to experience the future of secure, anonymous healthcare. Sign up now to join the AnonymizeCare waitlist and get early access to exclusive features and updates.",
  applicationName: "AnonymizeCare Waitlist",
  referrer: "origin-when-cross-origin",
  keywords: [
    "telemedicine",
    "medical app",
    "health care app",
    "health",
    "privacy",
    "anonymous",
  ],
  manifest: "https://www.anonymizecare.com/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${centuryGothic.variable} antialiased w-full bg-white dark:bg-dark-ash-500`}
      >
        {children}
      </body>
    </html>
  );
}
