let supportedLang = {};

//------------------------------------

function addToSupportedLang (info) {
  supportedLang[info[0]] = {};  // ISO 689 language locale code
  supportedLang[info[0]]['asrEngine'] = info[1]; // ASR engine
  supportedLang[info[0]]['ttsEngine'] = info[2]; // TTS engine
  // to be added in the future
  // translation engine as src, as dst, as src/dst pair,
  // speech to speech engine,
  // ...
}

//------------------------------------

const vg_tts_bgBG = ['bg-BG', 'DG', 'VG']; // Bulgarian
addToSupportedLang (vg_tts_bgBG);

const vg_tts_csCZ = ['cs-CZ', 'DG', 'VG']; // Czech
addToSupportedLang (vg_tts_csCZ);

const vg_tts_daDK = ['da-DK', 'DG', 'VG']; // Danish
addToSupportedLang (vg_tts_daDK);

const vg_tts_deDE = ['de-DE', 'DG', 'VG']; // German
addToSupportedLang (vg_tts_deDE);

const vg_tts_elGR = ['el-GR', 'DG', 'VG']; // Greek
addToSupportedLang (vg_tts_elGR);

const vg_tts_enAU = ['en-AU', 'DG', 'VG']; // English - Australia
addToSupportedLang (vg_tts_enAU);

const vg_tts_enGB = ['en-GB', 'DG', 'VG']; // English - United Kingdom
addToSupportedLang (vg_tts_enGB);

const vg_tts_enIN = ['en-IN', 'DG', 'VG']; // English - India
addToSupportedLang (vg_tts_enIN);

const vg_tts_enNZ = ['en-NZ', 'DG', 'VG']; // English - New Zealand
addToSupportedLang (vg_tts_enNZ);

const vg_tts_enUS = ['en-US', 'DG', 'VG']; // English - United States
addToSupportedLang (vg_tts_enUS);

const vg_tts_esES = ['es-ES', 'DG', 'VG']; // Spanish - Spain
addToSupportedLang (vg_tts_esES);

const vg_tts_esMX = ['es-MX', 'DG', 'VG']; // Spanish - Mexico
addToSupportedLang (vg_tts_esMX);

const vg_tts_esUS = ['es-US', 'DG', 'VG']; // Spanish - United States
addToSupportedLang (vg_tts_esUS);

const vg_tts_fiFL = ['fi-FL', 'DG', 'VG']; // Finnish
addToSupportedLang (vg_tts_fiFL);

const vg_tts_frCA = ['fr-CA', 'DG', 'VG']; // French - Canada
addToSupportedLang (vg_tts_frCA);

const vg_tts_frFR = ['fr-FR', 'DG', 'VG']; // French - France
addToSupportedLang (vg_tts_frFR);

const vg_tts_huHU = ['hu-HU', 'DG', 'VG']; // Hungarian
addToSupportedLang (vg_tts_huHU);

const vg_tts_idID = ['id-ID', 'DG', 'VG']; // Indonesian
addToSupportedLang (vg_tts_idID);

const vg_tts_itIT = ['it-IT', 'DG', 'VG']; // Italian
addToSupportedLang (vg_tts_itIT);

const vg_tts_jaJP = ['ja-JP', 'DG', 'VG']; // Japanese
addToSupportedLang (vg_tts_jaJP);

const vg_tts_koKR = ['ko-KR', 'DG', 'VG']; // Korean
addToSupportedLang (vg_tts_koKR);

const vg_tts_ltLT = ['lt-LT', 'DG', 'VG']; // Lithuanian
addToSupportedLang (vg_tts_ltLT);

const vg_tts_lvLV = ['lv-LV', 'DG', 'VG']; // Latvian
addToSupportedLang (vg_tts_lvLV);

const vg_tts_nbNO = ['nb-NO', 'DG', 'VG']; // Norwegian
addToSupportedLang (vg_tts_nbNO);

const vg_tts_nlBE = ['nl-BE', 'DG', 'VG']; // Flemish
addToSupportedLang (vg_tts_nlBE);

const vg_tts_nlNL = ['nl-NL', 'DG', 'VG']; // Dutch
addToSupportedLang (vg_tts_nlNL);

const vg_tts_plPL = ['pl-PL', 'DG', 'VG']; // Polish
addToSupportedLang (vg_tts_plPL);

const vg_tts_ptBR = ['pt-BR', 'DG', 'VG']; // Portuguese - Brazil
addToSupportedLang (vg_tts_ptBR);

const vg_tts_ptPT = ['pt-PT', 'DG', 'VG']; // Portuguese - Portugal
addToSupportedLang (vg_tts_ptPT);

const vg_tts_roRO = ['ro-RO', 'DG', 'VG']; // Romanian
addToSupportedLang (vg_tts_roRO);

const vg_tts_ruRU = ['ru-RU', 'DG', 'VG']; // Russian
addToSupportedLang (vg_tts_ruRU);

const vg_tts_skSK = ['sk-SK', 'DG', 'VG']; // Slovak
addToSupportedLang (vg_tts_skSK);

const vg_tts_svSE = ['sv-SE', 'DG', 'VG']; // Swedish
addToSupportedLang (vg_tts_svSE);

const vg_tts_trTR = ['tr-TR', 'DG', 'VG']; // Turkish
addToSupportedLang (vg_tts_trTR);

const vg_tts_ukUA = ['uk-UA', 'DG', 'VG']; // Ukrainian
addToSupportedLang (vg_tts_ukUA);

const vg_tts_yue = ['yue', 'DG', 'VG']; // Chinese Cantonese
addToSupportedLang (vg_tts_yue);

const vg_tts_yueHantHK = ['yue-Hant-HK', 'DG', 'VG']; // Chinese Cantonese
addToSupportedLang (vg_tts_yueHantHK);

const vg_tts_zh = ['zh', 'DG', 'VG']; // Chinese Mandarin
addToSupportedLang (vg_tts_zh);

const vg_tts_zhHantTW = ['zh-Hant-TW', 'DG', 'VG']; // Chinese Mandarin - Taiwan
addToSupportedLang (vg_tts_zhHantTW);

//------------------------------------

module.exports = supportedLang;