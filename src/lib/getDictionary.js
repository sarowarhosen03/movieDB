const dictionaries = {
    en: () => import("../db/dictionaries/en.json").then((module) => module.default),
    bn: () => import("../db/dictionaries/bn.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();