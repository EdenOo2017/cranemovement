var express = require("express");
var app = express();
const server = require("http").createServer(app);
var io = require("socket.io").listen(server);
emailExistence = require("email-existence");
var bodyParser = require('body-parser');
app.use("/", express.static(__dirname + "/www"));

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("Server is up");
});

io.on("connection", function(socket) {
  socket.on("xmovement", function(dimmerData) {
    io.sockets.emit("movement", "X%" + dimmerData);
  });
  socket.on("xmovement2", function(dimmerData) {
    io.sockets.emit("xmovement2", dimmerData);
  });

  socket.on("ymovement", function(dimmerData) {
    io.sockets.emit("movement", "Y%" + dimmerData);
  });
  socket.on("ymovement2", function(dimmerData) {
    io.sockets.emit("ymovement2", dimmerData);
  });

  socket.on("rmovement", function(dimmerData) {
    io.sockets.emit("movement", "R%" + dimmerData);
  });
  socket.on("rmovement2", function(dimmerData) {
    io.sockets.emit("rmovement2", dimmerData);
  });

  socket.on("bamovement", function(dimmerData) {
    io.sockets.emit("movement", "BA%" + dimmerData);
  });
  socket.on("bamovement2", function(dimmerData) {
    io.sockets.emit("bamovement2", dimmerData);
  });

  socket.on("swmovement", function(dimmerData) {
    io.sockets.emit("movement", "SW%" + dimmerData);
  });
  socket.on("swmovement2", function(dimmerData) {
    io.sockets.emit("swmovement2", dimmerData);
  });

  socket.on("light1", function(lightData) {
    io.sockets.emit("movement", "UJ%" + lightData);    
  });
  socket.on("light1", function(lightData) {
    io.sockets.emit("ujmovement2", lightData);   
  });

  socket.on("light2", function(lightData) {  
    io.sockets.emit("movement", "WD%" + lightData);    
  });
  socket.on("light2", function(lightData) {
    io.sockets.emit("wdmovement2", lightData);   
  });
});

app.use(bodyParser.json({ limit: '50mb' }));

app.put("/emailcheck", function(req, res) {
  var email = req.body.email;
//    console.log("HI")
  emailExistence.check(email, function(error, response) {    
    if(response){
        console.log(email + " / "+ response);
        res.send(response);
    }else{
        res.send(response);
    }
  }); 

});