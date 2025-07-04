let vonageTtsLang = {};

//------------------------------------

function addToVonageTtsLang (info) {
  vonageTtsLang[info[0]] = {};  // ISO 689 language locale code
  vonageTtsLang[info[0]]["ttsLanguageCode"] = info[1]; // Vonage TTS language, e.g. "bg-BG", "cs-CZ", "da-DK"
}

//------------------------------------

const vg_tts_bgBG = ['bg-BG', 'bg-BG']; // Bulgarian
addToVonageTtsLang (vg_tts_bgBG);

const vg_tts_csCZ = ['cs-CZ', 'cs-CZ']; // Czech
addToVonageTtsLang (vg_tts_csCZ);

const vg_tts_daDK = ['da-DK', 'da-DK']; // Danish
addToVonageTtsLang (vg_tts_daDK);

const vg_tts_deDE = ['de-DE', 'de-DE']; // German
addToVonageTtsLang (vg_tts_deDE);

const vg_tts_elGR = ['el-GR', 'el-GR']; // Greek
addToVonageTtsLang (vg_tts_elGR);

const vg_tts_enAU = ['en-AU', 'en-AU']; // English - Australia
addToVonageTtsLang (vg_tts_enAU);

const vg_tts_enGB = ['en-GB', 'en-GB']; // English - United Kingdom
addToVonageTtsLang (vg_tts_enGB);

const vg_tts_enIN = ['en-IN', 'en-IN']; // English - India
addToVonageTtsLang (vg_tts_enIN);

const vg_tts_enNZ = ['en-NZ', 'en-NZ']; // English - New Zealand
addToVonageTtsLang (vg_tts_enNZ);

const vg_tts_enUS = ['en-US', 'en-US']; // English - United States
addToVonageTtsLang (vg_tts_enUS);

const vg_tts_esES = ['es-ES', 'es-ES']; // Spanish - Spain
addToVonageTtsLang (vg_tts_esES);

const vg_tts_esMX = ['es-MX', 'es-MX']; // Spanish - Mexico
addToVonageTtsLang (vg_tts_esMX);

const vg_tts_esUS = ['es-US', 'es-US']; // Spanish - United States
addToVonageTtsLang (vg_tts_esUS);

const vg_tts_fiFL = ['fi-FL', 'fi-FI']; // Finnish
addToVonageTtsLang (vg_tts_fiFL);

const vg_tts_frCA = ['fr-CA', 'fr-CA']; // French - Canada
addToVonageTtsLang (vg_tts_frCA);

const vg_tts_frFR = ['fr-FR', 'fr-FR']; // French - France
addToVonageTtsLang (vg_tts_frFR);

const vg_tts_huHU = ['hu-HU', 'hu-HU']; // Hungarian
addToVonageTtsLang (vg_tts_huHU);

const vg_tts_idID = ['id-ID', 'id-ID']; // Indonesian
addToVonageTtsLang (vg_tts_idID);

const vg_tts_itIT = ['it-IT', 'it-IT']; // Italian
addToVonageTtsLang (vg_tts_itIT);

const vg_tts_jaJP = ['ja-JP', 'ja-JP']; // Japanese
addToVonageTtsLang (vg_tts_jaJP);

const vg_tts_koKR = ['ko-KR', 'ko-KR']; // Korean
addToVonageTtsLang (vg_tts_koKR);

const vg_tts_ltLT = ['lt-LT', 'lt-LT']; // Lithuanian
addToVonageTtsLang (vg_tts_ltLT);

const vg_tts_lvLV = ['lv-LV', 'lv-LV']; // Latvian
addToVonageTtsLang (vg_tts_lvLV);

const vg_tts_nbNO = ['nb-NO', 'nb-NO']; // Norwegian
addToVonageTtsLang (vg_tts_nbNO);

const vg_tts_nlBE = ['nl-BE', 'nl-BE']; // Flemish
addToVonageTtsLang (vg_tts_nlBE);

const vg_tts_nlNL = ['nl-NL', 'nl-NL']; // Dutch
addToVonageTtsLang (vg_tts_nlNL);

const vg_tts_plPL = ['pl-PL', 'pl-PL']; // Polish
addToVonageTtsLang (vg_tts_plPL);

const vg_tts_ptBR = ['pt-BR', 'pt-BR']; // Portuguese - Brazil
addToVonageTtsLang (vg_tts_ptBR);

const vg_tts_ptPT = ['pt-PT', 'pt-PT']; // Portuguese - Portugal
addToVonageTtsLang (vg_tts_ptPT);

const vg_tts_roRO = ['ro-RO', 'ro-RO']; // Romanian
addToVonageTtsLang (vg_tts_roRO);

const vg_tts_ruRU = ['ru-RU', 'ru-RU']; // Russian
addToVonageTtsLang (vg_tts_ruRU);

const vg_tts_skSK = ['sk-SK', 'sk-SK']; // Slovak
addToVonageTtsLang (vg_tts_skSK);

const vg_tts_svSE = ['sv-SE', 'sv-SE']; // Swedish
addToVonageTtsLang (vg_tts_svSE);

const vg_tts_trTR = ['tr-TR', 'tr-TR']; // Turkish
addToVonageTtsLang (vg_tts_trTR);

const vg_tts_ukUA = ['uk-UA', 'uk-UA']; // Ukrainian
addToVonageTtsLang (vg_tts_ukUA);

const vg_tts_yue = ['yue', 'yue-CN']; // Chinese Cantonese
addToVonageTtsLang (vg_tts_yue);

const vg_tts_yueHantHK = ['yue-Hant-HK', 'yue-HK']; // Chinese Cantonese - Hong Kong
addToVonageTtsLang (vg_tts_yueHantHK);

const vg_tts_zh = ['zh', 'cmn-CN']; // Chinese Mandarin
addToVonageTtsLang (vg_tts_zh);

const vg_tts_zhHantTW = ['zh-Hant-TW', 'cmn-TW']; // Chinese Mandarin - Taiwan
addToVonageTtsLang (vg_tts_zhHantTW);

//------------------------------------

module.exports = vonageTtsLang;