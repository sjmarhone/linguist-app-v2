const speech = require("@google-cloud/speech");
const fs = require("fs");

async function main() {
  const client = new speech.SpeechClient();
  const filename = "../../resources/audio.raw";

  const file = fs.readFileSync(filename);
  const auidoBytes = file.toString("base64");

  const audio = {
    content: auidoBytes,
  };

  const config = {
    encoding: "LINEAR16",
    sampleRateHertz: 16000,
    languageCode: "es-ES",
  };

  const [response] = await client.recognize(request);
  const transcription = response.results
    .map((result) => result.alternatives[0].transcript)
    .join("\n");
  console.log(`Transcription: ${transcription}`);
}

main().catch(console.e);
