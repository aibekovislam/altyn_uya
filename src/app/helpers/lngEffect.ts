import confetti from "canvas-confetti";

export const getTextByLanguage = (data: any, currentLanguage: string) => {
    switch (currentLanguage) {
      case 'Кыргызча':
        return data.text_kg;
      case 'English':
        return data.text_en;
      case 'Русский':
        return data.text_ru;
    }
};

export const getMainTextByLanguage = (data: any, currentLanguage: string) => {
    switch (currentLanguage) {
      case 'Кыргызча':
        return data.main_text_kg;
      case 'English':
        return data.main_text_en;
      case 'Русский':
        return data.main_text_ru;
    }
};

export const getMainThemeByLanguage = (data: any, currentLanguage: string) => {
  switch (currentLanguage) {
    case 'Кыргызча':
      return data.theme_kg;
    case 'English':
      return data.theme_en;
    case 'Русский':
      return data.theme_ru;
  }
};

var end = Date.now() + (10 * 1000);

var colors = ['#203F7D', '#1AABBE'];

export function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
};