const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { userQueries } = require('../models/database');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL || "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Check if user exists
        userQueries.findByGoogleId(profile.id, (err, user) => {
            if (err) {
                return done(err);
            }
            
            if (user) {
                // User exists, return user
                return done(null, user);
            } else {
                // User doesn't exist, create new user
                const userData = {
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    name: profile.displayName,
                    role: 'user'
                };
                
                userQueries.create(userData, (err, newUser) => {
                    if (err) {
                        return done(err);
                    }
                    return done(null, newUser);
                });
            }
        });
    } catch (error) {
        return done(error);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    userQueries.findById(id, (err, user) => {
        done(err, user);
    });
});

module.exports = passport;