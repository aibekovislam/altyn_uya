import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  "English": {
    translation: {
      "home": "Home",
      "about": "About us",
      "faq": "Question/answer",
      "form": "Questionnaire",
      "gallery": "Gallery",
      "contacts": "Contacts",
      "choose_language": "Choose language",
      "title1": "Sacrifice is the command of Allah!",
      "title2": "Because Allah Almighty told our Prophet (SA) to order and said, 'O Muhammad! Pray for your Lord and save the creature!'.",
      "title3": "(Surah Kavsar, verse 2)",
      "title4": "You can donate and help those in need through this website.",
      "btn_charity": "Donate",
      "video_title": "Presentation video",
      "about_us_text1": "The “Altyn Uya” Public Foundation has been providing assistance to needy families since 2020. The Foundation aims to improve the well-being of society by providing social, charitable, and educational programs, as well as assisting orphaned children and families in need. For more information about the Foundation, visit www.altynuya.org.",
      "about_us_text2": "The Qurban.org website is an initiative launched through the “Altyn Uya” Public Foundation to facilitate charitable contributions for our fellow citizens in Kyrgyzstan and abroad. Its goal is to simplify and streamline our charitable efforts both locally and internationally.",
      "about_us_text3": "Through www.qurban.org, you can quickly and easily make your contributions reach those in need. We have a wide range of beneficiaries, including the economically disadvantaged, those affected by natural disasters, and other charitable causes.",
      "different_charity": "TYPES OF CHARITY",
      "back": "Back",
      "footer_text1": "Also, you can find us at: 80 Michurin Street, Bishkek (corner of Jibek-Jolu and Erkindik Boulevard), and personally contact the Foundation's staff.",
      "footer_text2": "CONTACT US",
      "footer_text3": "If you have any questions or suggestions, you can submit them through our website Qurban.org, section 'Notify'.",
      "notification": "Notification",
      "up": "Up",
      "different_charity2": "THE SACRIFICE OF HEALING",
      "form_text": "To register on our website, you need to fill in the fields.",
      "input_placeholder1": "Your full name",
      "input_placeholder2": "Your phone number",
      "input_placeholder3": "Intention of donation",
      "registration": "Registration",
      "form_title1": "FOR TRANSFERRING FUNDS FOR THE TREATMENT OF KURMANDYK, OFFICIAL FUND DETAILS"
    }
  },
  "Русский": {
    translation: {
      "home": "Главная",
      "about": "О нас",
      "faq": "Вопрос/ответ",
      "form": "Анкета",
      "gallery": "Галерея",
      "contacts": "Контакты",
      "choose_language": "Выберите язык",
      "title1": "Жертва – это повеление Аллаха",
      "title2": "Потому что Всевышний Аллах сказал нашему Пророку (С.А.в) приказал И сказал: 'О Мухаммад! Молитесь за своего Господа и сой существо!'.",
      "title3": "(Сура Кавсар, аят 2)",
      "title4": "Вы можете пожертвовать и помочь нуждающимся через этот сайт.",
      "btn_charity": "Пожертвовать",
      "video_title": "Презентационный ролик",
      "about_us_text1": "Общественный фонд «Алтын Уя» с 2020 года оказывает помощь нуждающимся семьям. Фонд направлен на улучшение благосостояния общества путем реализации социальных, благотворительных и образовательных программ, а также помощи детям-сиротам и семьям в трудной жизненной ситуации. Дополнительную информацию о Фонде можно получить на сайте www.altynuya.org.",
      "about_us_text2": "Сайт Qurban.org – это инициатива, запущенная Общественным фондом «Алтын Уя» для облегчения благотворительных взносов для наших соотечественников в Кыргызстане и за рубежом. Его целью является упрощение и оптимизация благотворительной деятельности как на местном, так и на международном уровне.",
      "about_us_text3": "Через сайт www.qurban.org вы можете быстро и легко направить свои взносы нуждающимся. У нас широкий круг получателей, включая людей с низким достатком, пострадавших от стихийных бедствий и другие благотворительные цели.",
      "different_charity": "ВИДЫ БЛАГОТВОРИТЕЛЬНОСТИ",
      "back": "Назад",
      "footer_text1": "Также вы можете найти нас по адресу: г. Бишкек, ул. Мичурина 80 (пересечение ул. Жибек-Жолу и бульвара Эркиндик), и лично обратиться к сотрудникам Фонда.",
      "footer_text2": "СВЯЗАТЬСЯ С НАМИ",
      "footer_text3": "Если у вас есть вопросы или предложения, вы можете отправить их через наш сайт Qurban.org, раздел 'Сообщить'.",
      "notification": "Уведомить",
      "up": "Вверх",
      "different_charity2": "ЖЕРТВА ИСЦЕЛЕНИЯ",
      "form_text": "Чтобы зарегистрироваться на нашем сайте, вам необходимо заполнить поля.",
      "input_placeholder1": "Ваше имя и фамилия",
      "input_placeholder2": "Ваш номер телефона",
      "input_placeholder3": "Намерение жертвования",
      "registration": "Регистрация",
      "form_title1": "ДЛЯ ПЕРЕДАЧИ СРЕДСТВ НА ЦЕЛИ ЛЕЧЕНИЯ КУРМАНДЫКА, ОФИЦИАЛЬНЫЕ РЕКВИЗИТЫ ФОНДА"
    }
  },
  "Кыргызча": {
    translation: {
        "home": "Башкы бет",
        "about": "Биз жөнүндө",
        "faq": "Суроо/жооп",
        "form": "Анкета",
        "gallery": "Галерея",
        "contacts": "Байланыш",
        "choose_language": "Тилди тандаңыз",
        "title1": "Курмандык бул – Аллахтын буйругу!",
        "title2": "Себеби Аллах Таала Пайгамбарыбызга (с.а.в) буйрук кылып айткан: 'Эй, Мухаммад! Роббиң үчүн намаз оку жана жандык сой!'.",
        "title3": "(Кавсар сүрөөсү, 2-аят)",
        "title4": "Бул сайт аркылуу курмандык чалдырып, муктаждарга жардам берсеңиз болот.",
        "btn_charity": "Кайрымдуулук",
        "video_title": "Презентация ролик",
        "about_us_text1": "“Алтын Уя” Коомдук Фонду ыктыярдуу мүлктүк салымдардын жардамы менен уюшулуп, 2020-жылдан бери элге кызмат көрсөтүп келет. Фонд социалдык, кайрымдуулук, билим берүү долбоорлорун ишке ашыруу аркылуу калктын аярлуу катмарына, жетим балдарга, муктаж үй-бүлөлөргө жардам көрсөтөт. Фонд тууралуу www.altynuya.org сайтынан толук маалымат алсаңыз болот.",
        "about_us_text2": "Qurban.org сайты – бул “Алтын Уя” Коомдук Фонду аркылуу курмандык чалдырууну каалаган ак көңүл байке-эжелер үчүн түзүлгөн аянтча. Максаты – Кыргызстанда жана чет өлкөлөрдө жүргөн мекендештерибиздин курмандык чалуу амалын жеңилдетүү, аларга так, тез жана ачык-айкын кызмат көрсөтүү.",
        "about_us_text3": "www.qurban.org сайты аркылуу сиз өз убактыңызды коротпостон, тез арада курман чалдыра аласыз. Себеби бизде мал-жандык, мал союлчу жай, касапчылар жана курмандык этин муктаждарга тарата турчу, сообун сизге багыштай турчу кызматкерлер бар",
        "different_charity": "КУРМАНДЫКТЫН ТҮРЛӨРҮ",
        "back": "Аркага",
        "footer_text1": "Ошондой эле, Бишкек шаары, Мичурин көчөсү 80 (Жибек-Жолу/Эркиндик бульвары тарап) дареги боюнча жайгашкан Фонддун кеңсесине келип, кызматкерлерге жекеме-жеке жолугуу мүмкүн.",
        "footer_text2": "БИЗ МЕНЕН БАЙЛАНЫШУУ",
        "footer_text3": "Биздин ушул Qurban.org сайты аркылуу “билдирме” таштасаңыз болот.",
        "notification": "Билдирме",
        "up": "Жогору",
        "different_charity2": "ШЫПАА КУРМАНДЫГЫ",
        "form_text": "Биздин веб-сайттагы тизмеге катышуу үчүн, сизге маалыматтарды толтуруп көрүңүз керек.",
        "input_placeholder1": "Аты-жөнүңүз",
        "input_placeholder2": "Телефон номериңиз",
        "input_placeholder3": "Курмандык чалдыруунун ниети",
        "registration": "Регистрация",
        "form_title1": "КУРМАНДЫК МАЛЫНЫН АКЧАСЫН КОТОРУУ ҮЧҮН, ФОНДДУН РАСМИЙ РЕКВИЗИТТЕРИ:"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'Кыргызча',
    fallbackLng: 'Кыргызча',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;