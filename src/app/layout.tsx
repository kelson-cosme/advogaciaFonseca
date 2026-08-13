import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const georgia = localFont({
  src: [
    {
      path: '../../public/fonts/georgia.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/georgiab.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-georgia'
});

const madeTommy = localFont({
  src: '../../public/fonts/MADE TOMMY Bold_PERSONAL USE.otf',
  variable: '--font-madetommy'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fonsecaadvocacia.com.br'), // Ajuste se for outro domínio
  title: "Fonseca Advocacia | Excelência e Dedicação",
  description: "Escritório de advocacia focado em excelência, ética e dedicação na defesa dos seus direitos. Atendimento especializado presencial e online para todo o Brasil.",
  keywords: ["Advocacia", "Advogado", "Direito", "Fonseca Advocacia", "Cuiabá", "Mato Grosso", "Direito Agrário", "Direito de Família", "Regularização Ambiental", "Inventário"],
  openGraph: {
    title: "Fonseca Advocacia | Excelência e Dedicação",
    description: "Escritório de advocacia focado em excelência, ética e dedicação na defesa dos seus direitos.",
    url: 'https://fonsecaadvocacia.com.br',
    siteName: 'Fonseca Advocacia',
    images: [
      {
        url: '/assets/banner2.webp',
        width: 1200,
        height: 630,
        alt: 'Fonseca Advocacia',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fonseca Advocacia",
    description: "Escritório de advocacia focado em excelência e ética na defesa dos seus direitos.",
    images: ['/assets/banner2.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} ${georgia.variable} ${madeTommy.variable}`}>
      <head>
        <link rel="preload" as="image" href="/assets/hero2.webp" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KEW9MWE068"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KEW9MWE068');
          `}
        </Script>
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xwb9rb4rfq");
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <SmoothScrolling>
          <SplashScreen />
          <Navbar />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
