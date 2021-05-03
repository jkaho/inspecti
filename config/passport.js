const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bycrypt = require("bcryptjs");
const db = require("../models");

// Use a local strategy to sign user in with email & password
passport.use(
  new LocalStrategy(
    // Set signin field to email
    { usernameField: "email" },
    (email, password, done) => {
      // Check db for user email
      db.user
        .findOne({
          where: {
            email: email
          }
        })
        .then(dbUser => {
          // If the email doesn't exist in the db
          if (!dbUser) {
            return done(null, false, {
              message: "Incorrect email"
            });
          }

          const hash = dbUser.password.toString();

          // If the email exists, validate password
          bycrypt.compare(password, hash, (err, result) => {
            if (result === true) {
              return done(null, dbUser);
            }

            // If password is incorrect
            return done(null, false, {
              message: "Incorrect password"
            });
          });
        });
    }
  )
);

// Sequelize serialisation and deserialisation to keep authentication 
//    state across HTTP requests
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});
