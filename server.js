const express = require("express");
// const { createServer } = require("http");
const app = express();
const { Server } = require("socket.io");
const port = 8080;

// const server = createServer(app);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/board.html");
});
app.get("/admin", (req, res) => {
  res.sendFile(__dirname + "/public/admin.html");
});



const server = app.listen(port, () => {
  console.log(" server is running......");

  const io = new Server(server);
  io.on('connection',(socket)=>{
    console.log('a user is connectec');

    socket.on('disconnect',()=>{
        console.log(' a user disconnected');
    })

    socket.on('msg',(text)=>{
        console.log(text);
        io.emit('replay',text)
    })

    

})
 
});



