const express = require('express');
const app = express();


const posts = require('./routes/posts');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use('/posts', posts);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`))


/*
const cron = require('node-cron');
const https = require('https');
var options = {
    host: 'www.reddit.com',
    port: 80,
    path: '/r/selfhosted/comments/8013ge/website_monitoring_for_changes/'
}*/
/*cron.schedule("* * * * * *", function() {
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
});*/