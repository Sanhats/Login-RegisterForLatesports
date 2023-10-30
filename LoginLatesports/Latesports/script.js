const express = require('express');
const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;

const app = express();

passport.use(new SteamStrategy({
    returnURL: 'http://127.0.0.1:5500/index.html/auth/steam/return', // Especifica la URL de retorno completa aquí
    realm: 'http://127.0.0.1:5500/index.html',
    apiKey: 'F403DA6D05748B1895EBF046D526CE5B' // Tu clave de API de Steam
}, (identifier, profile, done) => {
    const usuario = {
        id: profile.id,
        nombre: profile.displayName,
        correo: profile.emails[0].value
        
        // ... otros datos que necesites
    };

    passport.serializeUser((usuario, done) => {
        done(null, usuario.id);
    });
    
    done(null, usuario);
}));

app.get('/auth/steam', passport.authenticate('steam'));

app.get('/auth/steam/return',
    passport.authenticate('steam', { failureRedirect: '/' }),
    (req, res) => {
        // Autenticación exitosa, redirige al usuario a la página de inicio
        res.redirect('/index.html');
    }
);
