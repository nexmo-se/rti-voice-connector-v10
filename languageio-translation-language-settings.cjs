let languageioTranslationLang = {};

//------------------------------------

function addTolanguageioTranslationLang (info) {
  languageioTranslationLang[info[0]] = {};  // ISO 689 language locale code
  languageioTranslationLang[info[0]]["srcTranslationLanguage"] = info[1]; // languageio source language, e.g. "FR", "EN"
  languageioTranslationLang[info[0]]["dstTranslationLanguage"] = info[2]; // languageio target language, e.g. "FR", "EN-US", "EN-GB"
}

//------------------------------------

const lio_tr_afZA = ['af-ZA', 'af', 'af']; // Afrikaans
addTolanguageioTranslationLang(lio_tr_afZA);

const lio_tr_sqAL = ['sq-AL', 'sq', 'sq']; // Albanian
addTolanguageioTranslationLang(lio_tr_sqAL);

const lio_tr_arEG = ['ar-EG', 'ar', 'ar']; // Arabic (Egypt)
addTolanguageioTranslationLang(lio_tr_arEG);

const lio_tr_arSA = ['ar-SA', 'ar', 'ar']; // Arabic (Saudi Arabia)
addTolanguageioTranslationLang(lio_tr_arSA);

const lio_tr_hyAM = ['hy-AM', 'hy', 'hy']; // Armenian
addTolanguageioTranslationLang(lio_tr_hyAM);

const lio_tr_azAZ = ['az-AZ', 'az', 'az']; // Azerbaijani
addTolanguageioTranslationLang(lio_tr_azAZ);

const lio_tr_euES = ['eu-ES', 'eu', 'eu']; // Basque
addTolanguageioTranslationLang(lio_tr_euES);

const lio_tr_beBY = ['be-BY', 'be', 'be']; // Belarusian
addTolanguageioTranslationLang(lio_tr_beBY);

const lio_tr_bnBD = ['bn-BD', 'bn', 'bn']; // Bengali (Bangladesh)
addTolanguageioTranslationLang(lio_tr_bnBD);

const lio_tr_bsBA = ['bs-BA', 'bs', 'bs']; // Bosnian
addTolanguageioTranslationLang(lio_tr_bsBA);

const lio_tr_bgBG = ['bg-BG', 'bg', 'bg']; // Bulgarian
addTolanguageioTranslationLang(lio_tr_bgBG);

const lio_tr_myMM = ['my-MM', 'my', 'my']; // Burmese
addTolanguageioTranslationLang(lio_tr_myMM);

const lio_tr_caES = ['ca-ES', 'ca', 'ca']; // Catalan
addTolanguageioTranslationLang(lio_tr_caES);

const lio_tr_yueCN = ['yue-CN', 'zh-cn', 'zh-cn']; // Chinese Cantonese - Mainland China (Simplified)
addTolanguageioTranslationLang (lio_tr_yueCN);

const lio_tr_yueHK = ['yue-HK', 'yue', 'yue']; // Chinese Cantonese - Hong Kong - Macau (Traditional)
addTolanguageioTranslationLang (lio_tr_yueHK);

const lio_tr_zhCN = ['zh-CN', 'zh-cn', 'zh-cn']; // Chinese Mandarin (Simplified)
addTolanguageioTranslationLang (lio_tr_zhCN);

const lio_tr_zhTW = ['zh-TW', 'zh-tw', 'zh-tw']; // Chinese Mandarin - Taiwan (Traditional)
addTolanguageioTranslationLang (lio_tr_zhTW);

const lio_tr_hrHR = ['hr-HR', 'hr', 'hr']; // Croatian
addTolanguageioTranslationLang(lio_tr_hrHR);

const lio_tr_csCZ = ['cs-CZ', 'cs', 'cs']; // Czech
addTolanguageioTranslationLang(lio_tr_csCZ);

const lio_tr_daDK = ['da-DK', 'da', 'da']; // Danish
addTolanguageioTranslationLang(lio_tr_daDK);

const lio_tr_nlNL = ['nl-NL', 'nl', 'nl']; // Dutch
addTolanguageioTranslationLang(lio_tr_nlNL);

const lio_tr_enAU = ['en-AU', 'en', 'en']; // English - Australia
addTolanguageioTranslationLang (lio_tr_enAU);

const lio_tr_enGB = ['en-GB', 'en', 'en']; // English - United Kingdom
addTolanguageioTranslationLang(lio_tr_enGB);

const lio_tr_enIN = ['en-IN', 'en', 'en']; // English - India
addTolanguageioTranslationLang (lio_tr_enIN);

const lio_tr_enNZ = ['en-NZ', 'en', 'en']; // English - New Zealand
addTolanguageioTranslationLang (lio_tr_enNZ);

const lio_tr_enUS = ['en-US', 'en', 'en']; // English - United States
addTolanguageioTranslationLang(lio_tr_enUS);

const lio_tr_etEE = ['et-EE', 'et', 'et']; // Estonian
addTolanguageioTranslationLang(lio_tr_etEE);

const lio_tr_fiFI = ['fi-FI', 'fi', 'fi']; // Finnish
addTolanguageioTranslationLang(lio_tr_fiFI);

const lio_tr_nlBE = ['nl-BE', 'nl', 'nl']; // Flemish
addTolanguageioTranslationLang (lio_tr_nlBE);

const lio_tr_frCA = ['fr-CA', 'fr-ca', 'fr-ca']; // French - Canada
addTolanguageioTranslationLang (lio_tr_frCA);

const lio_tr_frFR = ['fr-FR', 'fr', 'fr']; // French - France
addTolanguageioTranslationLang(lio_tr_frFR);

const lio_tr_kaGE = ['ka-GE', 'ka', 'ka']; // Georgian
addTolanguageioTranslationLang(lio_tr_kaGE);

const lio_tr_deDE = ['de-DE', 'de', 'de']; // German
addTolanguageioTranslationLang(lio_tr_deDE);

const lio_tr_elGR = ['el-GR', 'el', 'el']; // Greek
addTolanguageioTranslationLang(lio_tr_elGR);

const lio_tr_guIN = ['gu-IN', 'gu', 'gu']; // Gujarati
addTolanguageioTranslationLang(lio_tr_guIN);

const lio_tr_heIL = ['he-IL', 'he', 'he']; // Hebrew
addTolanguageioTranslationLang(lio_tr_heIL);

const lio_tr_hiIN = ['hi-IN', 'hi', 'hi']; // Hindi
addTolanguageioTranslationLang(lio_tr_hiIN);

const lio_tr_huHU = ['hu-HU', 'hu', 'hu']; // Hungarian
addTolanguageioTranslationLang(lio_tr_huHU);

const lio_tr_isIS = ['is-IS', 'is', 'is']; // Icelandic
addTolanguageioTranslationLang(lio_tr_isIS);

const lio_tr_idID = ['id-ID', 'id', 'id']; // Indonesian
addTolanguageioTranslationLang(lio_tr_idID);

const lio_tr_gaIE = ['ga-IE', 'ga', 'ga']; // Irish
addTolanguageioTranslationLang(lio_tr_gaIE);

const lio_tr_itIT = ['it-IT', 'it', 'it']; // Italian
addTolanguageioTranslationLang(lio_tr_itIT);

const lio_tr_jaJP = ['ja-JP', 'ja', 'ja']; // Japanese
addTolanguageioTranslationLang(lio_tr_jaJP);

const lio_tr_jvID = ['jv-ID', 'jv', 'jv']; // Javanese
addTolanguageioTranslationLang(lio_tr_jvID);

const lio_tr_knIN = ['kn-IN', 'kn', 'kn']; // Kannada
addTolanguageioTranslationLang(lio_tr_knIN);

const lio_tr_kkKZ = ['kk-KZ', 'kk', 'kk']; // Kazakh
addTolanguageioTranslationLang(lio_tr_kkKZ);

const lio_tr_kmKH = ['km-KH', 'km', 'km']; // Khmer
addTolanguageioTranslationLang(lio_tr_kmKH);

const lio_tr_koKR = ['ko-KR', 'ko', 'ko']; // Korean
addTolanguageioTranslationLang(lio_tr_koKR);

const lio_tr_kyKG = ['ky-KG', 'ky', 'ky']; // Kyrgyz
addTolanguageioTranslationLang(lio_tr_kyKG);

const lio_tr_loLA = ['lo-LA', 'lo', 'lo']; // Lao
addTolanguageioTranslationLang(lio_tr_loLA);

const lio_tr_lvLV = ['lv-LV', 'lv', 'lv']; // Latvian
addTolanguageioTranslationLang(lio_tr_lvLV);

const lio_tr_ltLT = ['lt-LT', 'lt', 'lt']; // Lithuanian
addTolanguageioTranslationLang(lio_tr_ltLT);

const lio_tr_mkMK = ['mk-MK', 'mk', 'mk']; // Macedonian
addTolanguageioTranslationLang(lio_tr_mkMK);

const lio_tr_msMY = ['ms-MY', 'ms', 'ms']; // Malay
addTolanguageioTranslationLang(lio_tr_msMY);

const lio_tr_mlIN = ['ml-IN', 'ml', 'ml']; // Malayalam
addTolanguageioTranslationLang(lio_tr_mlIN);

const lio_tr_mtMT = ['mt-MT', 'mt', 'mt']; // Maltese
addTolanguageioTranslationLang(lio_tr_mtMT);

const lio_tr_mrIN = ['mr-IN', 'mr', 'mr']; // Marathi
addTolanguageioTranslationLang(lio_tr_mrIN);

const lio_tr_mnMN = ['mn-MN', 'mn', 'mn']; // Mongolian (Cyrillic)
addTolanguageioTranslationLang(lio_tr_mnMN);

const lio_tr_neNP = ['ne-NP', 'ne', 'ne']; // Nepali
addTolanguageioTranslationLang(lio_tr_neNP);

const lio_tr_noNO = ['no-NO', 'no', 'no']; // Norwegian
addTolanguageioTranslationLang(lio_tr_noNO);

const lio_tr_faIR = ['fa-IR', 'fa', 'fa']; // Persian
addTolanguageioTranslationLang(lio_tr_faIR);

const lio_tr_plPL = ['pl-PL', 'pl', 'pl']; // Polish
addTolanguageioTranslationLang(lio_tr_plPL);

const lio_tr_ptBR = ['pt-BR', 'pt', 'pt']; // Portuguese (Brazil)
addTolanguageioTranslationLang(lio_tr_ptBR);

const lio_tr_ptPT = ['pt-PT', 'pt-pt', 'pt-pt']; // Portuguese (Portugal)
addTolanguageioTranslationLang(lio_tr_ptPT);

const lio_tr_paIN = ['pa-IN', 'pa', 'pa']; // Punjabi
addTolanguageioTranslationLang(lio_tr_paIN);

const lio_tr_roRO = ['ro-RO', 'ro', 'ro']; // Romanian
addTolanguageioTranslationLang(lio_tr_roRO);

const lio_tr_ruRU = ['ru-RU', 'ru', 'ru']; // Russian
addTolanguageioTranslationLang(lio_tr_ruRU);

const lio_tr_srRS = ['sr-RS', 'sr', 'sr']; // Serbian (Cyrillic
addTolanguageioTranslationLang(lio_tr_srRS);

const lio_tr_siLK = ['si-LK', 'si', 'si']; // Sinhala
addTolanguageioTranslationLang(lio_tr_siLK);

const lio_tr_skSK = ['sk-SK', 'sk', 'sk']; // Slovak
addTolanguageioTranslationLang(lio_tr_skSK);

const lio_tr_slSI = ['sl-SI', 'sl', 'sl']; // Slovenian
addTolanguageioTranslationLang(lio_tr_slSI);

const lio_tr_es419 = ['es-419', 'es-mx', 'es-mx']; // Spanish - Latin America
addTolanguageioTranslationLang(lio_tr_es419);

const lio_tr_esES = ['es-ES', 'es', 'es']; // Spanish
addTolanguageioTranslationLang(lio_tr_esES);

const lio_tr_esMX = ['es-MX', 'es-mx', 'es-mx']; // Spanish - Mexico
addTolanguageioTranslationLang(lio_tr_esMX);

const lio_tr_esUS = ['es-US', 'es-mx', 'es-mx']; // Spanish - United States
addTolanguageioTranslationLang (lio_tr_esUS);

const lio_tr_swKE = ['sw-KE', 'sw', 'sw']; // Swahili
addTolanguageioTranslationLang(lio_tr_swKE);

const lio_tr_svSE = ['sv-SE', 'sv', 'sv']; // Swedish
addTolanguageioTranslationLang(lio_tr_svSE);

const lio_tr_taIN = ['ta-IN', 'ta', 'ta']; // Tamil
addTolanguageioTranslationLang(lio_tr_taIN);

const lio_tr_teIN = ['te-IN', 'te', 'te']; // Telugu
addTolanguageioTranslationLang(lio_tr_teIN);

const lio_tr_thTH = ['th-TH', 'th', 'th']; // Thai
addTolanguageioTranslationLang(lio_tr_thTH);

const lio_tr_trTR = ['tr-TR', 'tr', 'tr']; // Turkish
addTolanguageioTranslationLang(lio_tr_trTR);

const lio_tr_ukUA = ['uk-UA', 'uk', 'uk']; // Ukrainian
addTolanguageioTranslationLang(lio_tr_ukUA);

const lio_tr_urPK = ['ur-PK', 'ur', 'ur']; // Urdu
addTolanguageioTranslationLang(lio_tr_urPK);

const lio_tr_uzUZ = ['uz-UZ', 'uz', 'uz']; // Uzbek
addTolanguageioTranslationLang(lio_tr_uzUZ);

const lio_tr_viVN = ['vi-VN', 'vi', 'vi']; // Vietnamese
addTolanguageioTranslationLang(lio_tr_viVN);

const lio_tr_cyGB = ['cy-GB', 'cy', 'cy']; // Welsh
addTolanguageioTranslationLang(lio_tr_cyGB);

//------------------------------------

module.exports = languageioTranslationLang;