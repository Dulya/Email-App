var express=require('express');
var app=express();

//use middlewear body parser to extract data from body of the http request
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//add midlewear to accept cors
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, PUT,OPTIONS');
    next();
});

var nodemailer = require('nodemailer');

//define mail transport  system(SMTP)
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "dulyamurage@gmail.com",
        pass: "dcm@1993"
    }
});

//code for send email
app.post('/api/sendemail', function (req, res) { 
    var mailOptions = {
        from: "storyboard.ifs@gmail.com",
        to: req.body.to,
        subject: req.body.subject,
        html: req.body.text,
        
    }

    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.json({ status: 'error' });
        } else {
            res.json({ status: 'success' });

        };
    });
});

app.listen(3000);

console.log("server is listening");