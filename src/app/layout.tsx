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
  title: "Advocacia Fonseca | Excelência e Dedicação",
  description: "Escritório de advocacia focado em excelência, ética e dedicação na defesa dos seus direitos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} ${georgia.variable} ${madeTommy.variable}`}>
      <head>
        <Script id="microsoft-clarity" strategy="afterInteractive">
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
