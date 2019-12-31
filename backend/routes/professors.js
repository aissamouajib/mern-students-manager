const router = require('express').Router();
let Professor = require('../models/professor.model');

router.route('/').get((req, res) => {
    Professor.find().then(profs => res.json(profs)).catch(err => res.json("Error finding Professors: "+ err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const birthday = Date.parse(req.body.birthday);
  const email = req.body.email;
  const phone = req.body.phone;

  const newProf = new Professor({name, birthday, email, phone});

  newProf.save().then(() => res.json('Professor added!')).catch(err => res.status(400).json('Error adding the Professor: ' + err));
});

module.exports = router;