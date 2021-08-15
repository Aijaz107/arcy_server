var nodemailer = require('nodemailer');

const mail=(data)=>{

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'upify.tech@gmail.com',
    pass: 'miniproject'
  }
});

var mailOptions = {
  from: 'upify.tech@gmail.com',
  to: 'mohdaijazahmed2000@gmail.com',
  subject: 'Email from Interior Web Site',
  text:  "\"USER_NAME\" : \"" + data.name + "\" , \n \n "
  + "\"USER_EMAIL\" : \"" + data.email + "\", \n \n \"MESSAGE\" : \"" + data.message + "\","
  ,
//   html: '<h1>Hi Smartherd</h1><p></p>'        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

module.exports=mail;