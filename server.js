const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json())
app.use(cors());

const welcomeMessage = {
  id: 0,
  from: "Bart",
  text: "Welcome to CYF chat system!",
};

//This array is our "data store".
//We will start with one message in the array.
//Note: messages will be lost when Glitch restarts our server.
const messages = [welcomeMessage];

// app.get("/", function (request, response) {
//   response.sendFile(__dirname + "/index.html");
// });

app.get("/", function (request, response) {
  response.send("Welcome to iMessage");
});

app.get("/messages", (request, response) => {
  response.send(messages);
})

app.post("/messages", (request, response) => {
  const newMessage = request.body;
  messages.push(newMessage);
  console.log(request.body);
  response.send(newMessage);
  
}); 

app.listen(3075, () => console.log("Your app is listening on port 3075"));
