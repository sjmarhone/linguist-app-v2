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

//POST /api/translator/
router.post("/", async (req, res, next) => {
  try {
    const { inputText, language } = req.body;
    const translation = await translate(inputText, { to: language });

    //if there was an autocorrect in input text
    const { value, didYouMean } = await translation.from.text;
    if (didYouMean) {
      res.status(400).send(`Did you mean? ${value}`);
      return;
    } else {
      res.send(translation.text);
    }
  } catch (err) {
    next(err);
  }
});
