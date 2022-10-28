const { urlencoded } = require("express");
const path = require('path');
const express = require("express");
const app = express();
const port = process.env.PORT;
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use("/assets",express.static("public")); 

// //app.use(express.static(path.join(__dirname, 'public')));

// //app.use(express.static('public'));
// // Specific folder example
// app.use('/css', express.static(__dirname + 'public/css'))
// // app.use('/js', express.static(__dirname + 'public/js'))
// // app.use('/img', express.static(__dirname + 'public/images'))

// // Set View's
// app.set('views', './views');

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home');
    console.log("this is end point");
})

app.listen(port,()=>{
    console.log('Running on server https://localhost:8000 ......');
})