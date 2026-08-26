export const supportedLanguages = ["Arabic", "Indonesian", "Urdu", "Bengali", "Turkish", "French"] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number];

type InstructionTranslations = Record<SupportedLanguage, string>;

export const instructionTranslations: Record<string, InstructionTranslations> = {
  "Take 1 capsule three times daily after meals.": {
    Arabic: "تناول كبسولة واحدة ثلاث مرات يوميًا بعد الوجبات.",
    Indonesian: "Minum 1 kapsul tiga kali sehari sesudah makan.",
    Urdu: "کھانے کے بعد روزانہ تین بار 1 کیپسول لیں۔",
    Bengali: "খাবারের পর প্রতিদিন তিনবার ১টি করে ক্যাপসুল নিন।",
    Turkish: "Yemeklerden sonra günde üç kez 1 kapsül alınız.",
    French: "Prendre 1 gélule trois fois par jour après les repas.",
  },
  "Take 2 tablets when needed for pain.": {
    Arabic: "تناول قرصين عند الحاجة لتسكين الألم.",
    Indonesian: "Minum 2 tablet bila diperlukan untuk meredakan nyeri.",
    Urdu: "درد کی صورت میں ضرورت پڑنے پر 2 گولیاں لیں۔",
    Bengali: "ব্যথার প্রয়োজনে ২টি করে ট্যাবলেট নিন।",
    Turkish: "Ağrı için gerektiğinde 2 tablet alınız.",
    French: "Prendre 2 comprimés au besoin en cas de douleur.",
  },
  "Take 1 tablet at bedtime. May cause drowsiness.": {
    Arabic: "تناول قرصًا واحدًا عند النوم. قد يسبب النعاس.",
    Indonesian: "Minum 1 tablet sebelum tidur. Dapat menyebabkan kantuk.",
    Urdu: "سوتے وقت 1 گولی لیں۔ غنودگی ہو سکتی ہے۔",
    Bengali: "ঘুমানোর সময় ১টি ট্যাবলেট নিন। তন্দ্রাচ্ছন্নতা হতে পারে।",
    Turkish: "Yatmadan önce 1 tablet alınız. Uyuşukluğa neden olabilir.",
    French: "Prendre 1 comprimé au coucher. Peut provoquer de la somnolence.",
  },
  "Take 1 tablet twice daily with meals.": {
    Arabic: "تناول قرصًا واحدًا مرتين يوميًا مع الوجبات.",
    Indonesian: "Minum 1 tablet dua kali sehari bersama makanan.",
    Urdu: "کھانے کے ساتھ روزانہ دو بار 1 گولی لیں۔",
    Bengali: "খাবারের সাথে প্রতিদিন দুইবার ১টি করে ট্যাবলেট নিন।",
    Turkish: "Yemeklerle birlikte günde iki kez 1 tablet alınız.",
    French: "Prendre 1 comprimé deux fois par jour avec les repas.",
  },
  "Take 1 capsule once daily before breakfast.": {
    Arabic: "تناول كبسولة واحدة يوميًا قبل الإفطار.",
    Indonesian: "Minum 1 kapsul sekali sehari sebelum sarapan.",
    Urdu: "ناشتے سے پہلے روزانہ ایک بار 1 کیپسول لیں۔",
    Bengali: "প্রাতঃরাশের আগে প্রতিদিন একবার ১টি করে ক্যাপসুল নিন।",
    Turkish: "Kahvaltıdan önce günde bir kez 1 kapsül alınız.",
    French: "Prendre 1 gélule une fois par jour avant le petit-déjeuner.",
  },
};

export const languageCodes: Record<SupportedLanguage, string> = {
  Arabic: "AR",
  Indonesian: "ID",
  Urdu: "UR",
  Bengali: "BN",
  Turkish: "TR",
  French: "FR",
};

export const rtlLanguages = new Set<SupportedLanguage>(["Arabic", "Urdu"]);

export function isSupportedLanguage(language: string): language is SupportedLanguage {
  return supportedLanguages.some((supportedLanguage) => supportedLanguage === language);
}

export function getTranslation(instruction: string, language: string): string | undefined {
  if (!isSupportedLanguage(language)) return undefined;
  return instructionTranslations[instruction]?.[language];
}
