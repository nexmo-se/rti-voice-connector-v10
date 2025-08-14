'use strict'

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
 
const moment = require('moment');

const { v4: uuidv4 } = require('uuid');

const expressWs = require('express-ws')(app);

const fs = require('fs');
const fsp = require('fs').promises;

const axios = require('axios');

//-- AI engines and languages --

const deepgramAsrLang = require('./deepgram-asr-language-settings.cjs');
console.log ("\nDeepgram STT dictionary:", deepgramAsrLang);

// const deepLTranslationLang = require('./deepl_translation_language_settings.cjs');
// console.log ("\nDeepL Translation dictionary:", deepLTranslationLang);

const languageioTranslationLang = require('./languageio-translation-language-settings.cjs');
console.log ("\nLanguageIO Translation dictionary:", languageioTranslationLang);

const vonageTtsLang = require('./vonage-tts-language-settings.cjs');
console.log ("\nVonage TTS dictionary:", vonageTtsLang);

// const supportedLang = require('./supported-languages-set-1.cjs');
// console.log ("\nSupported languages dictionary:", supportedLang);

const supportedLang = require('./supported-languages-set-2.cjs');
console.log ("\nComplete list of supported languages dictionary - Just FYI - WIP - Not yet functionally used atm:", supportedLang);

// //-- test --

// console.log('Supported languages:', supportedLang);

// const lang1 = 'en-US';
// const lang2 = 'fr-MG';

// if (supportedLang[lang1]) {
//   console.log(`${lang1} is supported`);
// } else {
//   console.log(`${lang1} is not supported`);
// }

// if (supportedLang[lang2]) {
//   console.log(`${lang2} is supported`);
// }  else {
//   console.log(`${lang2} is not supported`);
// }

//--- ASR engine - Deepgram ---
const { createClient, LiveTranscriptionEvents } = require("@deepgram/sdk");
const dgApiKey = process.env.DEEPGRAM_API_KEY;

// //--- Translation engine - DeepL ---
// const deepl = require("deepl-node");
// const dlApiKey = process.env.DEEPL_API_KEY;
// const dlTranslator = new deepl.Translator(dlApiKey);  // see if a unique instance can cope with many concurrent translations

//--- Translation engine - Language IO ---
const lioApiKey = process.env.LANGUAGEIO_API_KEY;
const lioTranslateUrl = process.env.LANGUAGEIO_TRANSLATE_URL;
const lioLocaleUrl = process.env.LANGUAGEIO_LOCALE_URL;

//--- Record calls ---
const recordCalls = process.env.RECORD_CALLS?.toLowerCase() === 'true';

//--- User experience parameters ----
const maxSilenceDuration = Number(process.env.MAX_SILENCE_DURATION);

//--------------------------------------------------------------

app.use(bodyParser.json());

//----------------------------

let confLang = {}; // languages in each conference

//--

function addToConfLang(confName, languageCode) {

  if (confLang[confName] == undefined) {
    confLang[confName] = {};
    confLang[confName][languageCode] = 1;
  } else {  
    if (confLang[confName][languageCode] == undefined) {
      confLang[confName][languageCode] = 1;
    } else {
      confLang[confName][languageCode]++; 
    }
  };

  console.log ("\nconfLang dictionary:", confLang); 
}

//--

function removeFromConfLang(confName, languageCode) {
  
  confLang[confName][languageCode]--;
  if (confLang[confName][languageCode] == 0) {
    confLang[confName][languageCode] = undefined;
  }

  console.log ("\nconfLang dictionary:", confLang);

  let deleteConfLang = true;

  //-- iterate through all languages in conference --
  for (const key in confLang[confName]) {
      if (confLang[confName].hasOwnProperty(key)) {
          if (confLang[confName][key] != undefined) {
            deleteConfLang = false;
          }
      }
  }

  //-- delete conference info as all call legs terminated --
  if (deleteConfLang) {
    delete confLang[confName];
    console.log ("\nconfLang dictionary:", confLang);
  }

}

//==========================================================

async function translateText(srcText, srcLanguage, dstLanguage) {  

  //-- this section to be improved to suppport multiple translation engines at once
  
  let dstText = "";

  //-- srcLanguage and dstLanguage are ISO 639 language codes --
  const sourceLanguage = languageioTranslationLang[srcLanguage]["srcTranslationLanguage"];
  const destLanguage = languageioTranslationLang[dstLanguage]["dstTranslationLanguage"];

  // const jsonDstText = await dlTranslator.translateText(srcText, null, destLanguage);
  // console.log(">>> translation payload:\n", jsonDstText)
  // dstText = jsonDstText.text;

  const body = {
    "sourceContent": srcText,
    "sourceLocale": sourceLanguage,
    "targetLocale": destLanguage,
    "contentTypeName": "api",
    "translationType": "machine",
    "textType": "text"
   };
  // console.log("body:", JSON.stringify(body));

  try {
    const output = await axios.post(lioTranslateUrl, JSON.stringify(body),
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'x-api-key': lioApiKey
        }
      });

    // console.log(">>> translation output payload:\n", output.data)
    dstText = output.data.translatedText;
    // console.log("HTTP POST status:", status);
  } 
  catch (err) {
    console.log("HTTP POST error", lioTranslateUrl, body, err);
  }

  console.log("\n>>> translated text:", dstText);
  return(dstText);
}

//-----------  

async function sendTranslation(text, languageCode, uuid, callerNumber, webhookUrl, userName, userId, confName, customParams) {  
  
  // console.log(">>> in sendTranslation function - languageCode:", languageCode);

  if (text != '') {   

    const chunkUuid = uuidv4(); // map original speech transcript with corresponding translations

    const result = {
      'vapiUuid': uuid,
      'chunkUuid': chunkUuid,
      'transcript': text,
      'sourceLanguageCode': languageCode,
      'userName': userName,
      'userId': userId,
      'confName': confName
    };

    // return custom properties

    const cParameters1 = JSON.parse(customParams);
    // console.log('cParameters:', cParameters1);

    for (let key in cParameters1) {
      if (cParameters1.hasOwnProperty(key)) {
          // console.log(key + " -> " + cParameters1[key]);
          result[key] =  cParameters1[key];
      }
    }     

    // console.log("result:", JSON.stringify(result));

    try {
      const status = await axios.post(webhookUrl, JSON.stringify(result),
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
      // console.log("HTTP POST status:", status);
    } 
    catch (err) {
      console.log("HTTP POST  error: ", err);
    }

    //-- cycle through each confLang (target language)

    console.log('confLang[confName]:', confLang[confName]);

    for (const targetLanguageCode in confLang[confName]) {

      // console.log("targetLanguageCode:", targetLanguageCode);
      // console.log("confLang[confName][targetLanguageCode]:", confLang[confName][targetLanguageCode]);

      if (confLang[confName][targetLanguageCode] != undefined) {

        let translation = '';
      
        // need to have the following as an external function so translations are done in parallel
        // for multi-party use case
        // but it may reach max concurrent translation limits of translation engine
        // this is good for 1-to-1 call

        // this needs to be updated to use ISO 639 languade codes, and compare what is before a possible '-'
        if (targetLanguageCode != languageCode) {  // translate only if target is a different language from original speech language

          try {

            // console.log('src text before translation:', text);

            translation = await translateText (text, languageCode, targetLanguageCode);

            // console.log('translated text:', translation);

          } catch(err) {
            console.error("Error translating:", err)
          }

          // console.log('\n>>> Translation from ' + srcLanguage + ' to ' + targetLanguage + ": " + translation);

          //-- map corresponding Vonage Voice API TTS language code
          const voiceApiLanguageCode = vonageTtsLang[targetLanguageCode]["ttsLanguageCode"];

          const result = {
            'vapiUuid': uuid,
            'chunkUuid': chunkUuid,
            'translation': translation,
            // 'targetLanguageCode': targetLanguageCode,
            'targetLanguageCode': voiceApiLanguageCode,
            'userName': userName,
            'userId': userId,
            'confName': confName
          };

          // return custom properties

          const cParameters2 = JSON.parse(customParams);
          // console.log('cParameters:', cParameters2);

          for (let key in cParameters2) {
            if (cParameters2.hasOwnProperty(key)) {
                // console.log(key + " -> " + cParameters2[key]);
                result[key] =  cParameters2[key];
            }
          } 
        
          console.log("\nresult:", JSON.stringify(result));

          try {
            const status = await axios.post(webhookUrl, JSON.stringify(result),
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                }
              });
            // console.log("HTTP POST status:", status);
          } 
          catch (err) {
            console.log("HTTP POST  error: ", err);
          }

        };  

      };  

    };

  };

}

//===========================================================================

//--- Deepgram ASR - DeepL Translation - Vonage API TTS ----
//--- See supported-languages-set-1.cjs file ---

app.ws('/socket', async (ws, req) => {

  // const originalUuid = req.query.original_uuid; 
  const peerUuid = req.query.peer_uuid;
  const languageCode = req.query.language_code;  // requested ISO 639 language code or "auto"

  //-- if call recording enabled ---
  let audioFileName;

  if (recordCalls) {
    // audioFileName = './recordings/rec_' + peerUuid + '_' + moment(Date.now()).format('YYYY_MM_DD_HH_mm_ss_SSS') + '.raw'; // using local time
    audioFileName = './recordings/rec_' + peerUuid + '_' + moment(Date.now()).format('YYYY_MM_DD_HH_mm_ss') + '.raw'; // using local time

    let file;
    try {
      file = await fsp.writeFile(audioFileName, '');
    } catch(e) {
      console.log("Error creating file:", audioFileName, e);
    }


  }

  let interimUtterance = "";
  let completeUtterance = "";
  let vadTimer;

  //-- future - select ASR engine here on a per languageCode basis --

  //-- Deepgram as ASR engine case ---

  // debug - temporary
  // const asrlanguageCode = deepgramAsrLang[languageCode]["sttLanguageCode"];
  let asrlanguageCode = deepgramAsrLang[languageCode]["sttLanguageCode"];

  //-- for nova-3 - debug - test
  // if (asrlanguageCode != 'en-US') {
  //   asrlanguageCode = 'multi';
  // }

  // WIP - close connection if requested language code is not supported -
  // if (!supportedLang[languageCode]) { // requested language code is not supported
  //   console.log(`>>> ${languageCode} is an unsupported language code, closing WebSocket`)
  //   ws.close(1003, `${languageCode} is an unsupported language code`);
  // }

  let vadFeedback = false;
  if (req.query.vad_feedback == 'true') { vadFeedback = true}; // barge-in support

  console.log('>>> vadFeedback:', vadFeedback);

  console.log('>>> websocket connected with');
  // console.log('original call uuid:', originalUuid);
  console.log('peer uuid:', peerUuid);
  console.log('VAD feedback for barge-in:', vadFeedback);

  //-- whole logic of ASR/Translation/TTS language code needs to be improved --
  //-- each section should care only about its core function --
  const srcLanguageCode = languageCode;

  const webhookUrl = req.query.webhook_url;
  console.log('>>> webhookUrl:', webhookUrl);

  const userName = req.query.user_name;
  const userId = req.query.user_id;
  const confName = req.query.conference_name;

  let xCustomFields = [];
  let customQueryParams = '';

  for (const queryParameter in req.query){    
    if (`${queryParameter}`.substring(0, 2) == 'x_') {
      xCustomFields.push(`"${queryParameter}": "${req.query[`${queryParameter}`]}"`);
    }
  };

  customQueryParams = "{" + xCustomFields.join(", ") + "}";
  console.log('>>> websocket custom query parameters:', customQueryParams);

  //-- add language to list of target languages for this conf call --
  addToConfLang(confName, languageCode); 

  //-- DG client --

  console.log('Opening client connection to DeepGram');
  const deepgramClient = createClient(dgApiKey);

  let deepgram = deepgramClient.listen.live({       
    model: "nova-2",     
    language: asrlanguageCode,
    // language: "multi",
    encoding: "linear16", // NEVER CHANGE
    sample_rate: 16000,  // NEVER CHANGE
    interim_results: true, // NEVER CHANGE
    smart_format: true,
    punctuate: true
  });

  deepgram.addListener(LiveTranscriptionEvents.Open, async () => {
    console.log("deepgram: connected");

    deepgram.addListener(LiveTranscriptionEvents.Transcript, async (data) => {
      
      // console.log('\n' + JSON.stringify(data));
      
      const transcript = data.channel.alternatives[0].transcript;

      if (transcript != '') {

        // if (maxVadTimer) {
        //   clearTimeout(maxVadTimer); // reset timer if not yet expired
        // }

        // if (minVadTimer) {
        //   clearTimeout(minVadTimer); // reset timer if not yet expired
        // }

        // clear VAD timer for both partial transctipts and final transcripts
        if (vadTimer) {
          clearTimeout(vadTimer); // reset timer if not yet expired
        }

        if (data.is_final) {

          interimUtterance = interimUtterance + " " + transcript; // concatenate new transcript
          console.log('\n>>> partial transcript:', interimUtterance, '\n');

          vadTimer = setTimeout( () => {

            console.log('\n>>> Max VAD timer trigerred');

            completeUtterance = interimUtterance;
            interimUtterance = "";

            console.log('\n>>> complete transcript:', completeUtterance, '\n');

            const callerNumber = '12995550101'; // dummy value for tests

            // submit transcript of original speech for translation processing
            // sendTranslation(completeUtterance, languageCode, originalUuid, callerNumber, webhookUrl, userName, userId, confName, customQueryParams);
            sendTranslation(completeUtterance, languageCode, peerUuid, callerNumber, webhookUrl, userName, userId, confName, customQueryParams);
          

          }, maxSilenceDuration);

        }

      }   

    });

    deepgram.addListener(LiveTranscriptionEvents.Close, async () => {
      console.log("\ndeepgram: disconnected");
      console.log("participant:", userName);
      // clearInterval(keepAlive); // will be used later
      deepgram.finish();
    });

    deepgram.addListener(LiveTranscriptionEvents.Error, async (error) => {
      console.log("\ndeepgram: error received");
      console.error(error);
    });

    deepgram.addListener(LiveTranscriptionEvents.Warning, async (warning) => {
      console.log("\ndeepgram: warning received");
      console.warn(warning);
    });

    deepgram.addListener(LiveTranscriptionEvents.Metadata, (data) => {
      console.log("\ndeepgram: metadata received");
      console.log(JSON.stringify({ metadata: data }));
      // console.log("ws: metadata sent to client");
      // ws.send(JSON.stringify({ metadata: data }));
    });

  }); 
  
  //--

  ws.on('message', async (msg) => {
    
    if (typeof msg === "string") {
    
      console.log("\n>>> Websocket settings:", msg);

      // const wsconfig = JSON.parse(msg);

    
    } else {

      if (deepgram.getReadyState() === 1 /* OPEN */) {
        deepgram.send(msg);

        if (recordCalls) {
          // record what has been sent to DG
          fsp.appendFile(audioFileName, msg, 'binary')
          .then(res => null)
          .catch(err => console.log("error writing to file", audioFileName, err))
        }

      } else if (deepgram.getReadyState() >= 2 /* 2 = CLOSING, 3 = CLOSED */) {
        // console.log("ws: data couldn't be sent to deepgram");
        null
      } else {
        // console.log("ws: data couldn't be sent to deepgram");
        null
      }

    }

  });

  //--

  ws.on('close', async () => {

    // remove language from list of target languages for this conf call
    removeFromConfLang(confName, languageCode);

    // \/ \/ \/ \/ \/
    // TBD delete dictionary entry if last leg in the corresponding conference
    // retrieve corresponding confLang[confId]
    // delete confLang[confId] if no entries

    console.log("socket closed");

  });

});

//==================================================

// app.post('/translate', async (req, res) => {

//   console.log('>>> /translate:');
//   console.log(req.body);

//   // const translatedText = await translateText(req.body.srcText, req.body.srcLanguage, req.body.dstLanguage);

//   let translatedText;

//   try {
//     translatedText = await translateText (req.body.srcText, req.body.srcLanguage, req.body.dstLanguage);
//     console.log('Translated text:', translatedText);
//     res.status(200).json({ "translation": translatedText });
//   } catch(err) {
//     console.error("Error translating:", err)
//     res.status(500).json({ "translation": "", "error": err});
//   }

// });

//=== If this application is hosted on VCR (Vonage Cloud Runtime) serverless infrastructure ===

app.get('/_/health', async(req, res) => {

  res.status(200).send('Ok');

});

//==================================================

const port = process.env.VCR_PORT || process.env.PORT || 6000;

app.listen(port, () => console.log(`\nReal-Time Interpretation - Connector server code running on port ${port}.`));

//------------
