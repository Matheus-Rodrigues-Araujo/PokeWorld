const getTranslatedName = (defaultName, translations, currentLanguage) => {
  try {
    const translation = translations.filter((item) => {
      if (item.language.name === currentLanguage.value) {
        return item.name;
      }
    });
    if (!translation.length) {
      return defaultName;
    }
    return translation[0].name;
  } catch (error) {
    console.error("error", error);
  }
};

export default getTranslatedName;
