import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "./redux/provider";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Алтын уя - пожертвование в Курбан",
  description: "Сделайте доброе дело и совершите пожертвование в курбан айт Алтын уя. Поддержите благотворительность Алтын уя прямо сейчас! Помогите нуждающимся и сделайте пожертвование Алтын уя в курбан айт Алтын уя. Ваш вклад в благотворительность важен! Поддержите благотворительный проект Алтын уя и совершите пожертвование в курбан айт Алтын уя. Вместе мы можем помочь Алтын уя тем, кто в беде.",
  keywords: "Алтын уя, алтын уя, курбан, курбан алтын уя, курбан айт, altyn uya, qurban, kyrgyz charity, qurban altyn uya, charity, пожертвование, пожертвования, курман айт, курман, алтын уя курман, курман алтын уя, пожертвовать в благотворительность, благотворительность, kurbanbereket Kurbankechirim Kurbanshipaa Kurbanjakındoo Kurbanshugur Kurbaniygilik Kurbankalkan Kurbanakiyka Kurbanmaksat kurbandyk.bereket Kurbandyk.kechirim Kurbandyk.shipaa Kurbandyk.jakındoo Kurbandyk.shugur Kurbandyk.iygilik Kurbandyk.kalkan Kurbandyk.akiyka Kurbandyk.maksat Курмандык шыпаа Курмандык береке Курмандык калкан Курмандык шугур Курмандык акыйка Курмандык кечирим Курмандык Максат Курмандык ийгилик Курмандык жакындоо Курмандык биримдик Курмандык камкордук Курмандык ынтымак",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Алтын уя Курбан",
    "alternateName": "Курбан",
    "url": "https://www.qurban.kg/",
    "logo": "https://www.qurban.kg/favicon.ico"
}

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel='canonical' href='https://www.qurban.kg/' />
        <meta name="description" content="Сделайте доброе дело и совершите пожертвование в курбан айт. Поддержите благотворительность прямо сейчас! Помогите нуждающимся и сделайте пожертвование в курбан айт. Ваш вклад в благотворительность важен! Поддержите благотворительный проект и совершите пожертвование в курбан айт. Вместе мы можем помочь тем, кто в беде." />
        <meta name="keywords" content="Алтын уя, алтын уя, курбан, курбан алтын уя, курбан айт, altyn uya, qurban, kyrgyz charity, qurban altyn uya, charity, пожертвование, пожертвования, курман айт, курман, алтын уя курман, курман алтын уя, пожертвовать в благотворительность, благотворительность, kurbanbereket Kurbankechirim Kurbanshipaa Kurbanjakındoo Kurbanshugur Kurbaniygilik Kurbankalkan Kurbanakiyka Kurbanmaksat kurbandyk.bereket Kurbandyk.kechirim Kurbandyk.shipaa Kurbandyk.jakındoo Kurbandyk.shugur Kurbandyk.iygilik Kurbandyk.kalkan Kurbandyk.akiyka Kurbandyk.maksat Курмандык шыпаа Курмандык береке Курмандык калкан Курмандык шугур Курмандык акыйка Курмандык кечирим Курмандык Максат Курмандык ийгилик Курмандык жакындоо Курмандык биримдик Курмандык камкордук Курмандык ынтымак" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <title>Алтын уя - сбор пожертвование в Курбан</title>
      </Head>
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout;