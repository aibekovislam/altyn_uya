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