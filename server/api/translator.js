const router = require("express").Router();
const translate = require("@vitalets/google-translate-api");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    console.log("the get route in the translator folder is working!");

    res.json("the get route in the translator folder is working!");
  } catch (err) {
    next(err);
  }
});

// translate("Ik spreek Engels", { to: "en" })
//   .then((res) => {
//     console.log(res.text);
//     //=> I speak English
//     console.log(res.from.language.iso);
//     //=> nl
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//POST /api/translate/
router.post("/", async (req, res, next) => {
  try {
    const { inputText, language } = req.body;
    const translation = await translate(inputText, { to: language });
    const { value, didYouMean } = await translation.from.text;

    //if there was an autocorrect in input text
    if (didYouMean) {
      console.log(
        "translation.text, value ------->>>>>>>",
        translation.text,
        value
      );
      res.status(400).send(`Did you mean? ${value}`);
      return;
    } else {
      console.log(
        "ttranslation.text =================33333>",
        translation.text
      );
      res.send(translation.text);
    }
    ç;
  } catch (err) {
    next(err);
  }
});
