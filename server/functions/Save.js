const fs = require('fs');
const { Module } = require('module');

function Save (movieID)
{
  fs.readFile('../data.json', utf8, (err, data) => {
    if (err) {
      res.status(500).send("Une erreur s'est produite avec le serveur");
    }
  });
}
module.exports = Save;
