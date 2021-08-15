const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = new express.Router();
// const cors=require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

// require('./client/src/components/setUpProxy')

// const { mail } = require('./mail');
const mail=require('./mail')


// 
console.log("test")

// // app.post("api/sendMail", (req, res) => {

//     console.log(req.body)
//     console.alert("teskt")
//     //sendEmail(req.body.email, req.body.name, "hello")

// })

router.post("/mail",async (req,res)=>{
    console.log(req.body)
    console.log(req.body.email)
    console.log(req.body.name)
    
    mail(req.body)
    // sendEmail(req.body.email, req.body.name, "hello")

    console.log("mailll")
})

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/',router);
app.use(express.urlencoded({extended: false}))


app.listen(port,()=>{
    console.log(`Server started at ${port}`);
})