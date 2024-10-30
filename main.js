const express = require("express");
app = express();

const homeroute = require('./routes/homeroute')


app.set('view engine' , "ejs")
app.use(express.urlencoded({ extended: true }));

app.use(homeroute)


app.listen(3000, () => {
  console.log("You are inside the server");
});
