const express = require('express');
const path = require('path');


const passport = require("./Google.Routes")

require("dotenv").config()

const postRouter = express.Router()

postRouter.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', "email"] }));

postRouter.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: `/auth/google/success`,
    failureRedirect: '/google/failure',
    session: false
  })
);


postRouter.get('/auth/google/success', (req, res) => {
  res.redirect("#");
});



module.exports = postRouter