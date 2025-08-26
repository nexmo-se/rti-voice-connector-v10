let languageioTranslationLang = {};

//------------------------------------

function addTolanguageioTranslationLang (info) {
  languageioTranslationLang[info[0]] = {};  // ISO 689 language locale code
  languageioTranslationLang[info[0]]["srcTranslationLanguage"] = info[1]; // languageio source language, e.g. "FR", "EN"
  languageioTranslationLang[info[0]]["dstTranslationLanguage"] = info[2]; // languageio target language, e.g. "FR", "EN-US", "EN-GB"
}

//------------------------------------

const lio_tr_afZA = ['af-ZA', 'af-za', 'af-za']; // Afrikaans
addTolanguageioTranslationLang(lio_tr_afZA);

const lio_tr_sqAL = ['sq-AL', 'sq-al', 'sq-al']; // Albanian
addTolanguageioTranslationLang(lio_tr_sqAL);

const lio_tr_arEG = ['ar-EG', 'ar-eg', 'ar-eg']; // Arabic (Egypt)
addTolanguageioTranslationLang(lio_tr_arEG);

const lio_tr_arSA = ['ar-SA', 'ar-sa', 'ar-sa']; // Arabic (Saudi Arabia)
addTolanguageioTranslationLang(lio_tr_arSA);

const lio_tr_hyAM = ['hy-AM', 'hy-am', 'hy-am']; // Armenian
addTolanguageioTranslationLang(lio_tr_hyAM);

const lio_tr_azAZ = ['az-AZ', 'az-az', 'az-az']; // Azerbaijani
addTolanguageioTranslationLang(lio_tr_azAZ);

const lio_tr_euES = ['eu-ES', 'eu-es', 'eu-es']; // Basque
addTolanguageioTranslationLang(lio_tr_euES);

const lio_tr_beBY = ['be-BY', 'be-by', 'be-by']; // Belarusian
addTolanguageioTranslationLang(lio_tr_beBY);

const lio_tr_bnBD = ['bn-BD', 'bn-bd', 'bn-bd']; // Bengali (Bangladesh)
addTolanguageioTranslationLang(lio_tr_bnBD);

const lio_tr_bsBA = ['bs-BA', 'bs-ba', 'bs-ba']; // Bosnian
addTolanguageioTranslationLang(lio_tr_bsBA);

const lio_tr_bgBG = ['bg-BG', 'bg-bg', 'bg-bg']; // Bulgarian
addTolanguageioTranslationLang(lio_tr_bgBG);

const lio_tr_myMM = ['my-MM', 'my-mm', 'my-mm']; // Burmese
addTolanguageioTranslationLang(lio_tr_myMM);

const lio_tr_caES = ['ca-ES', 'ca-es', 'ca-es']; // Catalan
addTolanguageioTranslationLang(lio_tr_caES);

const lio_tr_yueCN = ['yue-CN', 'zh-cn', 'zh-cn']; // Chinese Cantonese - Mainland China (Simplified)
addTolanguageioTranslationLang (lio_tr_yueCN);

const lio_tr_yueHK = ['yue-HK', 'zh-tw', 'zh-tw']; // Chinese Cantonese - Hong Kong - Macau (Traditional)
addTolanguageioTranslationLang (lio_tr_yueHK);

const lio_tr_zhCN = ['zh-CN', 'zh-cn', 'zh-cn']; // Chinese Mandarin (Simplified)
addTolanguageioTranslationLang (lio_tr_zhCN);

const lio_tr_zhTW = ['zh-TW', 'zh-tw', 'zh-tw']; // Chinese Mandarin - Taiwan (Traditional)
addTolanguageioTranslationLang (lio_tr_zhTW);

const lio_tr_hrHR = ['hr-HR', 'hr-hr', 'hr-hr']; // Croatian
addTolanguageioTranslationLang(lio_tr_hrHR);

const lio_tr_csCZ = ['cs-CZ', 'cs-cz', 'cs-cz']; // Czech
addTolanguageioTranslationLang(lio_tr_csCZ);

const lio_tr_daDK = ['da-DK', 'da-dk', 'da-dk']; // Danish
addTolanguageioTranslationLang(lio_tr_daDK);

const lio_tr_nlNL = ['nl-NL', 'nl-nl', 'nl-nl']; // Dutch
addTolanguageioTranslationLang(lio_tr_nlNL);

const lio_tr_enAU = ['en-AU', 'en-gb', 'en-gb']; // English - Australia
addTolanguageioTranslationLang (lio_tr_enAU);

const lio_tr_enGB = ['en-GB', 'en-gb', 'en-gb']; // English - United Kingdom
addTolanguageioTranslationLang(lio_tr_enGB);

const lio_tr_enIN = ['en-IN', 'en-gb', 'en-gb']; // English - India
addTolanguageioTranslationLang (lio_tr_enIN);

const lio_tr_enNZ = ['en-NZ', 'en-gb', 'en-gb']; // English - New Zealand
addTolanguageioTranslationLang (lio_tr_enNZ);

const lio_tr_enUS = ['en-US', 'en-us', 'en-us']; // English - United States
addTolanguageioTranslationLang(lio_tr_enUS);

const lio_tr_etEE = ['et-EE', 'et-ee', 'et-ee']; // Estonian
addTolanguageioTranslationLang(lio_tr_etEE);

const lio_tr_fiFI = ['fi-FI', 'fi-fi', 'fi-fi']; // Finnish
addTolanguageioTranslationLang(lio_tr_fiFI);

const lio_tr_nlBE = ['nl-BE', 'nl-nl', 'nl-nl']; // Flemish
addTolanguageioTranslationLang (lio_tr_nlBE);

const lio_tr_frCA = ['fr-CA', 'fr-fr', 'fr-fr']; // French - Canada
addTolanguageioTranslationLang (lio_tr_frCA);

const lio_tr_frFR = ['fr-FR', 'fr-fr', 'fr-fr']; // French - France
addTolanguageioTranslationLang(lio_tr_frFR);

const lio_tr_kaGE = ['ka-GE', 'ka-ge', 'ka-ge']; // Georgian
addTolanguageioTranslationLang(lio_tr_kaGE);

const lio_tr_deDE = ['de-DE', 'de-de', 'de-de']; // German
addTolanguageioTranslationLang(lio_tr_deDE);

const lio_tr_elGR = ['el-GR', 'el-gr', 'el-gr']; // Greek
addTolanguageioTranslationLang(lio_tr_elGR);

const lio_tr_guIN = ['gu-IN', 'gu-in', 'gu-in']; // Gujarati
addTolanguageioTranslationLang(lio_tr_guIN);

const lio_tr_heIL = ['he-IL', 'he-il', 'he-il']; // Hebrew
addTolanguageioTranslationLang(lio_tr_heIL);

const lio_tr_hiIN = ['hi-IN', 'hi-in', 'hi-in']; // Hindi
addTolanguageioTranslationLang(lio_tr_hiIN);

const lio_tr_huHU = ['hu-HU', 'hu-hu', 'hu-hu']; // Hungarian
addTolanguageioTranslationLang(lio_tr_huHU);

const lio_tr_isIS = ['is-IS', 'is-is', 'is-is']; // Icelandic
addTolanguageioTranslationLang(lio_tr_isIS);

const lio_tr_idID = ['id-ID', 'id-id', 'id-id']; // Indonesian
addTolanguageioTranslationLang(lio_tr_idID);

const lio_tr_gaIE = ['ga-IE', 'ga-ie', 'ga-ie']; // Irish
addTolanguageioTranslationLang(lio_tr_gaIE);

const lio_tr_itIT = ['it-IT', 'it-it', 'it-it']; // Italian
addTolanguageioTranslationLang(lio_tr_itIT);

const lio_tr_jaJP = ['ja-JP', 'ja-jp', 'ja-jp']; // Japanese
addTolanguageioTranslationLang(lio_tr_jaJP);

const lio_tr_jvID = ['jv-ID', 'jv-id', 'jv-id']; // Javanese
addTolanguageioTranslationLang(lio_tr_jvID);

const lio_tr_knIN = ['kn-IN', 'kn-in', 'kn-in']; // Kannada
addTolanguageioTranslationLang(lio_tr_knIN);

const lio_tr_kkKZ = ['kk-KZ', 'kk-kz', 'kk-kz']; // Kazakh
addTolanguageioTranslationLang(lio_tr_kkKZ);

const lio_tr_kmKH = ['km-KH', 'km-kh', 'km-kh']; // Khmer
addTolanguageioTranslationLang(lio_tr_kmKH);

const lio_tr_koKR = ['ko-KR', 'ko-kr', 'ko-kr']; // Korean
addTolanguageioTranslationLang(lio_tr_koKR);

const lio_tr_kyKG = ['ky-KG', 'ky-kg', 'ky-kg']; // Kyrgyz
addTolanguageioTranslationLang(lio_tr_kyKG);

const lio_tr_loLA = ['lo-LA', 'lo-la', 'lo-la']; // Lao
addTolanguageioTranslationLang(lio_tr_loLA);

const lio_tr_lvLV = ['lv-LV', 'lv-lv', 'lv-lv']; // Latvian
addTolanguageioTranslationLang(lio_tr_lvLV);

const lio_tr_ltLT = ['lt-LT', 'lt-lt', 'lt-lt']; // Lithuanian
addTolanguageioTranslationLang(lio_tr_ltLT);

const lio_tr_mkMK = ['mk-MK', 'mk-mk', 'mk-mk']; // Macedonian
addTolanguageioTranslationLang(lio_tr_mkMK);

const lio_tr_msMY = ['ms-MY', 'ms-my', 'ms-my']; // Malay
addTolanguageioTranslationLang(lio_tr_msMY);

const lio_tr_mlIN = ['ml-IN', 'ml-in', 'ml-in']; // Malayalam
addTolanguageioTranslationLang(lio_tr_mlIN);

const lio_tr_mtMT = ['mt-MT', 'mt-mt', 'mt-mt']; // Maltese
addTolanguageioTranslationLang(lio_tr_mtMT);

const lio_tr_mrIN = ['mr-IN', 'mr-in', 'mr-in']; // Marathi
addTolanguageioTranslationLang(lio_tr_mrIN);

const lio_tr_mnMN = ['mn-MN', 'mn-mn', 'mn-mn']; // Mongolian
addTolanguageioTranslationLang(lio_tr_mnMN);

const lio_tr_neNP = ['ne-NP', 'ne-np', 'ne-np']; // Nepali
addTolanguageioTranslationLang(lio_tr_neNP);

const lio_tr_noNO = ['no-NO', 'no-no', 'no-no']; // Norwegian
addTolanguageioTranslationLang(lio_tr_noNO);

const lio_tr_faIR = ['fa-IR', 'fa-ir', 'fa-ir']; // Persian
addTolanguageioTranslationLang(lio_tr_faIR);

const lio_tr_plPL = ['pl-PL', 'pl-pl', 'pl-pl']; // Polish
addTolanguageioTranslationLang(lio_tr_plPL);

const lio_tr_ptBR = ['pt-BR', 'pt-br', 'pt-br']; // Portuguese (Brazil)
addTolanguageioTranslationLang(lio_tr_ptBR);

const lio_tr_ptPT = ['pt-PT', 'pt-pt', 'pt-pt']; // Portuguese (Portugal)
addTolanguageioTranslationLang(lio_tr_ptPT);

const lio_tr_paIN = ['pa-IN', 'pa-in', 'pa-in']; // Punjabi
addTolanguageioTranslationLang(lio_tr_paIN);

const lio_tr_roRO = ['ro-RO', 'ro-ro', 'ro-ro']; // Romanian
addTolanguageioTranslationLang(lio_tr_roRO);

const lio_tr_ruRU = ['ru-RU', 'ru-ru', 'ru-ru']; // Russian
addTolanguageioTranslationLang(lio_tr_ruRU);

const lio_tr_srRS = ['sr-RS', 'sr-rs', 'sr-rs']; // Serbian
addTolanguageioTranslationLang(lio_tr_srRS);

const lio_tr_siLK = ['si-LK', 'si-lk', 'si-lk']; // Sinhala
addTolanguageioTranslationLang(lio_tr_siLK);

const lio_tr_skSK = ['sk-SK', 'sk-sk', 'sk-sk']; // Slovak
addTolanguageioTranslationLang(lio_tr_skSK);

const lio_tr_slSI = ['sl-SI', 'sl-si', 'sl-si']; // Slovenian
addTolanguageioTranslationLang(lio_tr_slSI);

const lio_tr_es419 = ['es-419', 'es-ar', 'es-ar']; // Spanish - Latin America
addTolanguageioTranslationLang(lio_tr_es419);

const lio_tr_esES = ['es-ES', 'es-es', 'es-es']; // Spanish
addTolanguageioTranslationLang(lio_tr_esES);

const lio_tr_esMX = ['es-MX', 'es-ar', 'es-ar']; // Spanish - Mexico
addTolanguageioTranslationLang(lio_tr_esMX);

const lio_tr_esUS = ['es-US', 'es-ar', 'es-ar']; // Spanish - United States
addTolanguageioTranslationLang (lio_tr_esUS);

const lio_tr_swKE = ['sw-KE', 'sw-ke', 'sw-ke']; // Swahili
addTolanguageioTranslationLang(lio_tr_swKE);

const lio_tr_svSE = ['sv-SE', 'sv-se', 'sv-se']; // Swedish
addTolanguageioTranslationLang(lio_tr_svSE);

const lio_tr_taIN = ['ta-IN', 'ta-in', 'ta-in']; // Tamil
addTolanguageioTranslationLang(lio_tr_taIN);

const lio_tr_teIN = ['te-IN', 'te-in', 'te-in']; // Telugu
addTolanguageioTranslationLang(lio_tr_teIN);

const lio_tr_thTH = ['th-TH', 'th-th', 'th-th']; // Thai
addTolanguageioTranslationLang(lio_tr_thTH);

const lio_tr_trTR = ['tr-TR', 'tr-tr', 'tr-tr']; // Turkish
addTolanguageioTranslationLang(lio_tr_trTR);

const lio_tr_ukUA = ['uk-UA', 'uk-ua', 'uk-ua']; // Ukrainian
addTolanguageioTranslationLang(lio_tr_ukUA);

const lio_tr_urPK = ['ur-PK', 'ur-pk', 'ur-pk']; // Urdu
addTolanguageioTranslationLang(lio_tr_urPK);

const lio_tr_uzUZ = ['uz-UZ', 'uz-uz', 'uz-uz']; // Uzbek
addTolanguageioTranslationLang(lio_tr_uzUZ);

const lio_tr_viVN = ['vi-VN', 'vi-vn', 'vi-vn']; // Vietnamese
addTolanguageioTranslationLang(lio_tr_viVN);

const lio_tr_cyGB = ['cy-GB', 'cy-gb', 'cy-gb']; // Welsh
addTolanguageioTranslationLang(lio_tr_cyGB);

//------------------------------------

module.exports = languageioTranslationLang;