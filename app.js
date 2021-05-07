const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('requête reçue');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({ message: 'votre requête à bien été reçue'});
    next();
});

app.use((req, res, next) => {
    console.log('réponse envoyée')
});

module.exports = app;