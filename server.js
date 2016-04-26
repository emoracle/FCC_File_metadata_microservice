'use strict';

var
port = process.env.PORT || 8080,
express = require('express'),
multer = require('multer'),
app = express(),
upload = multer({
    dest : 'uploads/'   
  }); 


app.get('/', function (req, res) {
  /*
   * When we enter the site, we serve the html-page
   */
  res.sendFile(process.cwd() + '/public/index.html');
});

/*
 * See: https://www.npmjs.com/package/multer
 * If whe submitted the page without ajax, the nam shoud be the name of the input 
 * (theFileName), but because we submitted by Ajax (without contentType) the 
 * name is the key whe appended to the FormData
 * Now multer appends a req.file to the req-object.
 */
app.post('/api/fileanalyse/', upload.single('file_0'), function (req, res) {
  res.send({
    fileSize : req.file.size
  });
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
