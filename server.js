const express = require("express");
const app = express();
const data = require('./public/data_four.json')
//var config = require('./config');

app.use(express.static(__dirname+'/public'));
const hostname = 'localhost'
const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`Listening on port http://${hostname}:${port}/`))


app.get('/', (req, res) => {
    res.sendFile();
});

app.get('/economy', (req, res) => {
    let year = Object.values(req.query);
    //console.log(data['seasonTop10EconomicBowlers'][year]);
    res.json(data['seasonTop10EconomicBowlers'][year]);
    
});


