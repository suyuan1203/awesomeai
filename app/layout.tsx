import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import { LanguageProvider } from "@/lib/i18n";

const GA_ID = "G-WZHF7HCBKP";
const SITE_URL = "https://ai.suyuan.me";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AwesomeAI · AI 导航站",
    template: "%s · AwesomeAI",
  },
  description:
    "一站式 AI 导航：AI 公司、AI 模型、AI 工具大全，发现最好用的人工智能产品与资讯。",
  keywords: [
    "AI 导航",
    "AI 公司",
    "AI 模型",
    "AI 工具",
    "人工智能",
    "大模型",
    "ChatGPT",
    "Claude",
  ],
  applicationName: "AwesomeAI",
  creator: "AwesomeAI",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "AwesomeAI · AI 导航站",
    description: "AI 公司、AI 模型、AI 工具一站式导航",
    url: SITE_URL,
    siteName: "AwesomeAI",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary",
    title: "AwesomeAI · AI 导航站",
    description: "AI 公司、AI 模型、AI 工具一站式导航",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AwesomeAI",
  alternateName: "AI 导航站",
  url: SITE_URL,
  description: "一站式 AI 导航：AI 公司、AI 模型、AI 工具大全",
  inLanguage: "zh-CN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
        <LanguageProvider>
          <JsonLd data={websiteSchema} />
          <Header />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </LanguageProvider>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
