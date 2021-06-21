const express = require("express");
const app = express();
const path = require("path");
const port = 80;
const fs = require("fs");
const { TIMEOUT } = require("dns");


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Fitness-and-freak', {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


const ContactSchema = new mongoose.Schema({
  name: String,
  email : String,
  Feedback   : String
});


const Contact = mongoose.model('Contact', ContactSchema);





// For serving static files
// Here in " express.static('static') " 'static' inside the paranthesis is a directory name and the other one is the one which appears in the url bar

app.use("/static", express.static("static"));
app.use(express.urlencoded());

// set the template engine as pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// pug endpoint


app.get("/", (req, res) => {
  res.render("index");
});
app.post("/",  (req, res) => {
  const form = req.body;

  const myData = new Contact(form);

  myData.save((err)=> {
    if (err) {
      res.status(400).send("Feedback not received");
    }
  })

  fs.writeFileSync(
    `./Feedback/${req.body.name}.txt`,
    `Name : ${form.name}\nemail id : ${form.email} \nFeedback : ${form.Feedback}`
  );
  setTimeout(myFunc, 3000, "funky");
  function myFunc() {
    res.render("");
  }

});
app.get("/paypage",(req,res)=> {
  res.render("paypage");
})


app.listen(port, () => {
  console.log(`Website running on port no. ${port}`);
});
