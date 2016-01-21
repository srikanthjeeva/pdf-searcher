var express = require('express');
var router = express.Router();
var PFParser = require('pdf2json/pdfparser'),
	   fs = require('fs'),
        qs = require('querystring');
var app = express();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

router.post('/upload', function (req, res) {
    console.log(req.files);
    var pdfParser = new PFParser();
    var pdfFilePath = req.files.uploaded_file.path;

    // parser.on('pdfParser_dataReady', function (data) {
    //     var body = '';
    //     var json = {}
    //     console.log("================");
    //
    //     data.PDFJS.pages.forEach(function (page) {
    //         page.Texts.forEach(function (line) {
    //             line.R.forEach(function (text) {
    //                 console.log(text);
    //                 console.log("=====text===========");
    //                 body += qs.unescape(text.T);
    //
    //             });
    //         });
    //     });
    //
    //     res.setHeader('Content-Type', 'application/json');
    //     res.setHeader('Content-Length', body.length);
    //     res.send(body);
    // });
    //
    // parser.on('pdfParser_dataError', function (err) {
    //     console.error(err);
    // });
    //
    // parser.loadPDF(req.files.uploaded_file.path);
    // 
    // or call directly with buffer
    fs.readFile(pdfFilePath, function (err, pdfBuffer) {
      if (!err) {
        pdfParser.parseBuffer(pdfBuffer);
      }
    }) 
});

module.exports = router;
