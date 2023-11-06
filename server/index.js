// On charge express afinde pouvoir s'en servir dans notre application
const express = require('express');

// ici on met express dans une constante
const app = express();

// Ici in crée une route pour afficher un message
app.get('/api/movie', (req, res) => {
  res.send('Build something amazing! 🚀');
});
        
app.listen(5000, ()=> console.log('Le serveur est lancé sur le port 5000'))