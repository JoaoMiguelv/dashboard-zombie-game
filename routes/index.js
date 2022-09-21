var express = require('express');
var router = express.Router();
const axios = require('axios')

const urlDtabase = "https://zombie-b3636-default-rtdb.firebaseio.com"

/* GET home page. */
router.get('/', async function (req, res, next) {
  const { data } = await axios.get(`${urlDtabase}/ranking.json`)
  const newData = Object.entries(data).map(([key, value]) => {
    return {
      name: key,
      score: value
    }
  })
  res.render('index', { player: newData });
  console.log(newData)
});

module.exports = router;
