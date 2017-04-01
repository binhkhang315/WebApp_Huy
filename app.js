var express = require('express');
var app = express();
var serverIP = require('./serverIPAddress');
var bodyParser = require('body-parser');
var query  = require('url');

app.use(bodyParser.json());
// bodyParser.raw();
app.use(bodyParser.urlencoded({
     extended: false
}));

var ipAddress = serverIP.getIP();

app.get('/', function(req, res){
    res.send({success: true})
})

app.set('port', (process.env.PORT || 3210));
var server = app.listen(app.get('port'), ipAddress, function() {
     console.log('Listening to:  ' + ipAddress +':'+app.get('port'));
});
