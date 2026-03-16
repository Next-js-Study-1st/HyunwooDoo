import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "SSR vs CSR",
  description: "SSR이 CSR보다 빠른 경우 / CSR이 SSR보다 빠른 경우 비교",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
