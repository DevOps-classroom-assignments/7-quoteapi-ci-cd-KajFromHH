const express = require('express');
const quotes = require('./quotes');

const app = express();

app.get('/quote',(req,res)=>{
  const randomIndex = Math.floor(Math.random() * quotes.length);
  // Add "Day's quote: " here
  res.json({quote: "Day's quote: " + quotes[randomIndex]});
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}.\n`+
            `Also, this procedure was part of QuoteAPI exercise by Haaga-Helia,\n`
            +`developed by Juha Hinkkula and Teemu Havulinna.\n`
            +`The exercise was then completed by Kaj Jansson.`);
    });
}

module.exports = app;
