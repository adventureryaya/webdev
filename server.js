const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cron = require('node-cron');
const https = require('https');
app.use(bodyParser.json());

var options = {
    host: 'www.reddit.com',
    port: 80,
    path: '/r/selfhosted/comments/8013ge/website_monitoring_for_changes/'
}
cron.schedule("*/10 * * * * *", function() {
    console.log("Testing");
    https.get('https://www.reddit.com/r/selfhosted/comments/8013ge/website_monitoring_for_changes/', function(res){
        console.log('Status: ' + res.statusCode);
        let rawData = "";
        res.on('data', (chunk) => {
            rawData += chunk;
        })
        res.on('end', () => {
            let parsedData = rawData.toString();
            console.log(parsedData);
        })
    }).on('error', function(e){
        console.log(e.message);
    })
});
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`))