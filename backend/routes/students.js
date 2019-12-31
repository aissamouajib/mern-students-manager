  const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
    Student.find().then(students => res.json(students)).catch(err => res.json("Error finding Students: "+ err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const birthday = Date.parse(req.body.birthday);
  const email = req.body.email;
  const phone = req.body.phone;
  const major = req.body.major;

  const newStudent = new Student({name, birthday, email, phone, major});

  newStudent.save().then(() => res.json('Student added!')).catch(err => res.status(400).json('Error adding the Student: ' + err));
});

module.exports = router;