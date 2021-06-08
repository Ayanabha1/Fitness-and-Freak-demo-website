const express = require("express");
const app = express();
const path = require("path");
const port = 80;
const fs = require("fs");
const { TIMEOUT } = require("dns");

// let st_ct = 1;
// let pr_ct = 1;
// let el_ct = 1;


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
app.post("/", (req, res) => {
  const form = req.body;
  fs.writeFileSync(
    `./Feedback/${req.body.name}.txt`,
    `Name : ${form.name}\nemail id : ${form.email} \nFeedback : ${form.Contact_review}`
  );
  setTimeout(myFunc, 3000, "funky");
  function myFunc() {
    res.render("");
  }
  // res.send("done");
});
app.get("/paypage",(req,res)=> {
  res.render("paypage");
})
// app.post("/paypage/#st",(req,res)=> {
//   console.log(req.body);
// })
// app.post("/paypage",(req,res)=> {
//   res.render("paypage");
// })
// app.post("/paypage",(req,res)=> {
//   res.render("paypage");
// })
app.listen(port, () => {
  console.log(`Website running on port no. ${port}`);
});
