const express = require('express');
const quotes = require('./quotes');

const app = express();

app.get('/quote',(req,res)=>{
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({quote: quotes[randomIndex]});
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}.\n`+
            `Also, this procedure was part of QuoteAPI exercise by Haaga-Helia,\n`+
            `developed by student Kaj Peter Jansson`);
    });
}

module.exports = app;
