import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "./redux/provider";

export const metadata: Metadata = {
  title: "Алтын уя - пожертвование в Курбан",
  description: "Сделайте доброе дело и совершите пожертвование в курбан айт. Поддержите благотворительность прямо сейчас! Помогите нуждающимся и сделайте пожертвование в курбан айт. Ваш вклад в благотворительность важен! Поддержите благотворительный проект и совершите пожертвование в курбан айт. Вместе мы можем помочь тем, кто в беде.",
  keywords: "Алтын уя, алтын уя, курбан, курбан алтын уя, курбан айт, altyn uya, qurban, kyrgyz charity, qurban altyn uya, charity, пожертвование, пожертвования, курман айт, курман, алтын уя курман, курман алтын уя, пожертвовать в благотворительность, благотворительность",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel='canonical' href='https://www.qurban.kg/' />
      <meta name="description" content="Сделайте доброе дело и совершите пожертвование в курбан айт. Поддержите благотворительность прямо сейчас! Помогите нуждающимся и сделайте пожертвование в курбан айт. Ваш вклад в благотворительность важен! Поддержите благотворительный проект и совершите пожертвование в курбан айт. Вместе мы можем помочь тем, кто в беде." />
      <meta name="keywords" content="Алтын уя, алтын уя, курбан, курбан алтын уя, курбан айт, altyn uya, qurban, kyrgyz charity, qurban altyn uya, charity, пожертвование, пожертвования, курман айт, курман, алтын уя курман, курман алтын уя, пожертвовать в благотворительность, благотворительность" />
      <title>Алтын уя - пожертвование в Курбан</title>
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout;