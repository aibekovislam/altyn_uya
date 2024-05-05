import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "./redux/provider";

export const metadata: Metadata = {
  title: "Алтын уя - пожертвование в Курбан",
  description: "Добро пожаловать на сайт 'Алтын Уя'! Мы - платформа, посвященная добрым делам и поддержке тех, кто в нужде. Здесь вы можете совершить доброе дело и сделать пожертвование на курбан. Курбан - это один из важнейших обрядов в мусульманском мире, символизирующий жертвенность и сострадание к нуждающимся. Ваше пожертвование поможет нам оказать помощь тем, кто нуждается в нашей поддержке. На нашем сайте вы можете выбрать сумму для пожертвования и участвовать в этом благородном деле, приносящем радость и облегчение людям в трудной жизненной ситуации. Присоединяйтесь к нам на 'Алтын Уя' и вместе мы сделаем мир добрее и светлее!",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel='canonical' href='https://www.qurban.kg/' />
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout;