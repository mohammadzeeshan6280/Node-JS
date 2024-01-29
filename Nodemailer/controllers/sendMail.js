const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let lestAccount = await nodemailer.createTestAccount();

    // connect with the smtp
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'margot64@ethereal.email',
            pass: 'PPzff9D8bAQmDk3UMy'
        }
    });

    let info = await transporter.sendMail({
        from: '"MOHAMMAD ZEESHAN 👻" <ansari@gmail.com>', // sender address
        to: "m2zinfo347@gmail.com", // list of receivers
        subject: "Hello Zeeshan Ji ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
      
    console.log("Message sent: %s", info.messageId);
    // res.send("I am sending mail ")
    res.json("info");
};

module.exports = sendMail;