//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const users = [];

router.post('/addUser', (req, res, next) => {
  users.push({username: req.body.username});
  //console.log(users);
  res.redirect('/ta02/');
});

router.post('/removeUser', (req, res, next) => {
  const remove = req.body.removename;
  const index = users.indexOf(remove);
  if (index !== -1) {
    userArray.splice(index, 1);
  }
  res.redirect('/ta02/');
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users : users
  });
});

module.exports = router;
