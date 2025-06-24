let deepLTranslationLang = {};

//------------------------------------

function addToDeepLTranslationLang (info) {
  deepLTranslationLang[info[0]] = {};  // ISO 689 language locale code
  deepLTranslationLang[info[0]]["srcTranslationLanguage"] = info[1]; // DeepL source language, e.g. "FR", "EN"
  deepLTranslationLang[info[0]]["dstTranslationLanguage"] = info[2]; // DeepL target language, e.g. "FR", "EN-US", "EN-GB"
}

//------------------------------------

const dl_tr_bgBG = ['bg-BG', 'BG', 'BG']; // Bulgarian
addToDeepLTranslationLang (dl_tr_bgBG);

const dl_tr_csCZ = ['cs-CZ', 'CS', 'CS']; // Czech
addToDeepLTranslationLang (dl_tr_csCZ);

const dl_tr_daDK = ['da-DK', 'DA', 'DA']; // Danish
addToDeepLTranslationLang (dl_tr_daDK);

const dl_tr_deDE = ['de-DE', 'DE', 'DE']; // German
addToDeepLTranslationLang (dl_tr_deDE);

const dl_tr_elGR = ['el-GR', 'EL', 'EL']; // Greek
addToDeepLTranslationLang (dl_tr_elGR);

const dl_tr_enAU = ['en-AU', 'EN', 'EN-GB']; // English - Australia
addToDeepLTranslationLang (dl_tr_enAU);

const dl_tr_enGB = ['en-GB', 'EN', 'EN-GB']; // English - United Kingdom
addToDeepLTranslationLang (dl_tr_enGB);

const dl_tr_enIN = ['en-IN', 'EN', 'EN-GB']; // English - India
addToDeepLTranslationLang (dl_tr_enIN);

const dl_tr_enNZ = ['en-NZ', 'EN', 'EN-GB']; // English - New Zealand
addToDeepLTranslationLang (dl_tr_enNZ);

const dl_tr_enUS = ['en-US', 'EN', 'EN-US']; // English - United States
addToDeepLTranslationLang (dl_tr_enUS);

const dl_tr_esES = ['es-ES', 'ES', 'ES']; // Spanish - Spain
addToDeepLTranslationLang (dl_tr_esES);

const dl_tr_esMX = ['es-MX', 'ES', 'ES']; // Spanish - Mexico
addToDeepLTranslationLang (dl_tr_esMX);

const dl_tr_esUS = ['es-US', 'ES', 'ES']; // Spanish - United States
addToDeepLTranslationLang (dl_tr_esUS);

const dl_tr_fiFL = ['fi-FL', 'FL', 'FL']; // Finnish
addToDeepLTranslationLang (dl_tr_fiFL);

const dl_tr_frCA = ['fr-CA', 'FR', 'FR']; // French - Canada
addToDeepLTranslationLang (dl_tr_frCA);

const dl_tr_frFR = ['fr-FR', 'FR', 'FR']; // French - France
addToDeepLTranslationLang (dl_tr_frFR);

const dl_tr_huHU = ['hu-HU', 'HU', 'HU']; // Hungarian
addToDeepLTranslationLang (dl_tr_huHU);

const dl_tr_idID = ['id-ID', 'ID', 'ID']; // Indonesian
addToDeepLTranslationLang (dl_tr_idID);

const dl_tr_itIT = ['it-IT', 'IT', 'IT']; // Italian
addToDeepLTranslationLang (dl_tr_itIT);

const dl_tr_jaJP = ['ja-JP', 'JA', 'JA']; // Japanese
addToDeepLTranslationLang (dl_tr_jaJP);

const dl_tr_koKR = ['ko-KR', 'KO', 'KO']; // Korean
addToDeepLTranslationLang (dl_tr_koKR);

const dl_tr_ltLT = ['lt-LT', 'LT', 'lt-LT']; // Lithuanian
addToDeepLTranslationLang (dl_tr_ltLT);

const dl_tr_lvLV = ['lv-LV', 'LV', 'LV']; // Latvian
addToDeepLTranslationLang (dl_tr_lvLV);

const dl_tr_nbNO = ['nb-NO', 'NB', 'NB']; // Norwegian
addToDeepLTranslationLang (dl_tr_nbNO);

const dl_tr_nlBE = ['nl-BE', 'NL', 'NL']; // Flemish
addToDeepLTranslationLang (dl_tr_nlBE);

const dl_tr_nlNL = ['nl-NL', 'NL', 'NL']; // Dutch
addToDeepLTranslationLang (dl_tr_nlNL);

const dl_tr_plPL = ['pl-PL', 'PL', 'PL']; // Polish
addToDeepLTranslationLang (dl_tr_plPL);

const dl_tr_ptBR = ['pt-BR', 'PT', 'PT-BR']; // Portuguese - Brazil
addToDeepLTranslationLang (dl_tr_ptBR);

const dl_tr_ptPT = ['pt-PT', 'PT', 'PT']; // Portuguese - Portugal
addToDeepLTranslationLang (dl_tr_ptPT);

const dl_tr_roRO = ['ro-RO', 'RO', 'RO']; // Romanian
addToDeepLTranslationLang (dl_tr_roRO);

const dl_tr_ruRU = ['ru-RU', 'RU', 'RU']; // Russian
addToDeepLTranslationLang (dl_tr_ruRU);

const dl_tr_skSK = ['sk-SK', 'SK', 'SK']; // Slovak
addToDeepLTranslationLang (dl_tr_skSK);

const dl_tr_svSE = ['sv-SE', 'SV', 'SV']; // Swedish
addToDeepLTranslationLang (dl_tr_svSE);

const dl_tr_trTR = ['tr-TR', 'TR', 'TR']; // Turkish
addToDeepLTranslationLang (dl_tr_trTR);

const dl_tr_ukUA = ['uk-UA', 'UK', 'UK']; // Ukrainian
addToDeepLTranslationLang (dl_tr_ukUA);

const dl_tr_yue = ['yue', 'ZH', 'ZH-HANT']; // Chinese Cantonese
addToDeepLTranslationLang (dl_tr_yue);

const dl_tr_yueHantHK = ['yue-Hant-HK', 'ZH', 'ZH-HANT']; // Chinese Cantonese - Hong Kong
addToDeepLTranslationLang (dl_tr_yueHantHK);

const dl_tr_zh = ['zh', 'ZH', 'ZH-HANS']; // Chinese Mandarin
addToDeepLTranslationLang (dl_tr_zh);

const dl_tr_zhHantTW = ['zh-Hant-TW', 'ZH', 'ZH-HANT']; // Chinese Mandarin - Taiwan
addToDeepLTranslationLang (dl_tr_zhHantTW);

//------------------------------------

module.exports = deepLTranslationLang;