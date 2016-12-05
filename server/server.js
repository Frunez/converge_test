var express = require("express");
var path = require("path");

var app = express();
app.get('/*', (req,res) => {
   res.sendfile(path.join(__dirname, "../app/dist/index.html"))
 })
app.use(express.static(path.join(__dirname,"../app/dist")));
app.listen(3000,function() {
  console.log("Go to http://localhost:3000/");
});
