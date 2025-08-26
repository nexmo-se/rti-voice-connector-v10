let deepgramAsrLang = {};

//------------------------------------

function addToDeepgramAsrLang (info) {
  deepgramAsrLang[info[0]] = {};  // ISO 689 language locale code - dictionary
  deepgramAsrLang[info[0]]["sttLanguageCode"] = info[1]; // Deepgram ASR language, e.g. "bg", "cs", "da-DK"
}

//------------------------------------

const dg_asr_automulti = ['auto', 'multi']; // Auto-detect language among English, Spanish, French, German, Hindi, Russian, Portuguese, Japanese, Italian, and Dutch
addToDeepgramAsrLang (dg_asr_automulti);

const dg_asr_bgBG = ['bg-BG', 'bg']; // Bulgarian
addToDeepgramAsrLang (dg_asr_bgBG);

const dg_asr_csCZ = ['cs-CZ', 'cs']; // Czech
addToDeepgramAsrLang (dg_asr_csCZ);

const dg_asr_daDK = ['da-DK', 'da-DK']; // Danish
addToDeepgramAsrLang (dg_asr_daDK);

const dg_asr_deDE = ['de-DE', 'de']; // German
addToDeepgramAsrLang (dg_asr_deDE);

const dg_asr_elGR = ['el-GR', 'el']; // Greek
addToDeepgramAsrLang (dg_asr_elGR);

const dg_asr_enAU = ['en-AU', 'en-AU']; // English - Australia
addToDeepgramAsrLang (dg_asr_enAU);

const dg_asr_enGB = ['en-GB', 'en-GB']; // English - United Kingdom
addToDeepgramAsrLang (dg_asr_enGB);

const dg_asr_enIN = ['en-IN', 'en-IN']; // English - India
addToDeepgramAsrLang (dg_asr_enIN);

const dg_asr_enNZ = ['en-NZ', 'en-NZ']; // English - New Zealand
addToDeepgramAsrLang (dg_asr_enNZ);

const dg_asr_enUS = ['en-US', 'en-US']; // English - United States
addToDeepgramAsrLang (dg_asr_enUS);

const dg_asr_es419 = ['es-419', 'es-419']; // Spanish - Mexico
addToDeepgramAsrLang (dg_asr_es419);

const dg_asr_esES = ['es-ES', 'es']; // Spanish - Spain
addToDeepgramAsrLang (dg_asr_esES);

const dg_asr_esMX = ['es-MX', 'es-419']; // Spanish - Mexico
addToDeepgramAsrLang (dg_asr_esMX);

const dg_asr_esUS = ['es-US', 'es-419']; // Spanish - United States
addToDeepgramAsrLang (dg_asr_esUS);

const dg_asr_fiFL = ['fi-FL', 'fi']; // Finnish
addToDeepgramAsrLang (dg_asr_fiFL);

const dg_asr_frCA = ['fr-CA', 'fr-CA']; // French - Canada
addToDeepgramAsrLang (dg_asr_frCA);

const dg_asr_frFR = ['fr-FR', 'fr']; // French - France
addToDeepgramAsrLang (dg_asr_frFR);

const dg_asr_hiIN = ['hi-IN', 'hi']; // Hindi
addToDeepgramAsrLang (dg_asr_hiIN);

const dg_asr_huHU = ['hu-HU', 'hu']; // Hungarian
addToDeepgramAsrLang (dg_asr_huHU);

const dg_asr_idID = ['id-ID', 'id']; // Indonesian
addToDeepgramAsrLang (dg_asr_idID);

const dg_asr_itIT = ['it-IT', 'it']; // Italian
addToDeepgramAsrLang (dg_asr_itIT);

const dg_asr_jaJP = ['ja-JP', 'ja']; // Japanese
addToDeepgramAsrLang (dg_asr_jaJP);

const dg_asr_koKR = ['ko-KR', 'ko-KR']; // Korean
addToDeepgramAsrLang (dg_asr_koKR);

const dg_asr_ltLT = ['lt-LT', 'lt']; // Lithuanian
addToDeepgramAsrLang (dg_asr_ltLT);

const dg_asr_lvLV = ['lv-LV', 'lv']; // Latvian
addToDeepgramAsrLang (dg_asr_lvLV);

const dg_asr_nbNO = ['nb-NO', 'no']; // Norwegian
addToDeepgramAsrLang (dg_asr_nbNO);

const dg_asr_nlBE = ['nl-BE', 'nl']; // Flemish
addToDeepgramAsrLang (dg_asr_nlBE);

const dg_asr_nlNL = ['nl-NL', 'nl']; // Dutch
addToDeepgramAsrLang (dg_asr_nlNL);

const dg_asr_plPL = ['pl-PL', 'pl']; // Polish
addToDeepgramAsrLang (dg_asr_plPL);

const dg_asr_ptBR = ['pt-BR', 'pt-BR']; // Portuguese - Brazil
addToDeepgramAsrLang (dg_asr_ptBR);

const dg_asr_ptPT = ['pt-PT', 'pt-PT']; // Portuguese - Portugal
addToDeepgramAsrLang (dg_asr_ptPT);

const dg_asr_roRO = ['ro-RO', 'ro']; // Romanian
addToDeepgramAsrLang (dg_asr_roRO);

const dg_asr_ruRU = ['ru-RU', 'ru']; // Russian
addToDeepgramAsrLang (dg_asr_ruRU);

const dg_asr_skSK = ['sk-SK', 'sk']; // Slovak
addToDeepgramAsrLang (dg_asr_skSK);

const dg_asr_svSE = ['sv-SE', 'sv-SE']; // Swedish
addToDeepgramAsrLang (dg_asr_svSE);

const dg_asr_trTR = ['tr-TR', 'tr']; // Turkish
addToDeepgramAsrLang (dg_asr_trTR);

const dg_asr_ukUA = ['uk-UA', 'uk']; // Ukrainian
addToDeepgramAsrLang (dg_asr_ukUA);

const dg_asr_yueCN = ['yue-CN', 'zh']; // Chinese Cantonese - Mainland
addToDeepgramAsrLang (dg_asr_yueCN);

const dg_asr_yueHK = ['yue-HK', 'zh-HK']; // Chinese Cantonese - Hong Kong
addToDeepgramAsrLang (dg_asr_yueHK);

const dg_asr_zhCN = ['zh-CN', 'zh']; // Chinese Mandarin - Mainland
addToDeepgramAsrLang (dg_asr_zhCN);

const dg_asr_zhTW = ['zh-TW', 'zh-TW']; // Chinese Mandarin - Taiwan
addToDeepgramAsrLang (dg_asr_zhTW);

//------------------------------------

module.exports = deepgramAsrLang;