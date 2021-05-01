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
    const translation = await translate("comment sa vas", { to: "en" });
    //console.log(" res.text ========>>>>>>>>(/=> I speak English", res.text);
    //=> I speak English
    //console.log(
    //   "res.from.language.iso (//=> nl)=============>>>>>>>>>>>",
    //   res.from.language.iso
    // );
    //=> nl

    console.log(translation);
    res.send(translation.text);
  } catch (err) {
    next(err);
  }
});
