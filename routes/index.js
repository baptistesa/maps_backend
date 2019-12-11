var express = require('express');
var router = express.Router();

var pos = [
  {
    latitude : 48.399243,
    longitude : -4.406776,
    name : "Mac Donald's",
    description : "Chaine de fast-food"
  },
  {
    latitude : 48.399152,
    longitude : -4.408372,
    name : "Brit Hôtel",
    description : "Hôtel et restaurants"
  },
  {
    latitude : 48.400738,
    longitude : -4.405496,
    name : "mon pin 3",
    description : "Hôtel et restaurants"
  },
  {
    latitude : 48.403532,
    longitude : -4.414816,
    name : "mon pin 4",
    description : "Hôtel et restaurants"
  },
  {
    latitude : 48.398967,
    longitude : -4.41795,
    name : "mon pin 5",
    description : "Hôtel et restaurants"
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getPins', function(req, res, next) {
  res.json(pos)
})

router.post('/addPin', function(req, res, next) {
  pos.push(req.body);
  res.json(pos)
})

module.exports = router;
