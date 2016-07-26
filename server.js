var express = require('express');
var path    = require('path');

var app = express();
app.use(express.static(path.join(__dirname, '/app')));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
  console.log('Express server now listening to port ' + 
    app.get('port'));
});
