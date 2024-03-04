require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/babe", (req, res) => {
  res.send("Hello World 2!");
});

app.get("/babe1", (req, res) => {
  res.send("Bazed Gul");
});

app.get("/babe2", (req, res) => {
    res.send("Bazed Gul");
  });

app.get("/demo", (req, res) => {
  res.send("Bazed Gul Here");
});

app.get("/login",(req,res) =>{
    res.send("<h1>Get to Log In Here</h1>")
})

app.get("/youtube",(req,res)=>{
    res.send("Hello Youtube")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
