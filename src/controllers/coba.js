require("dotenv").config();

const nodemailer = require("nodemailer");
exports.SendMail = function(req, res) {
  const { subject, text, to } = req.body;
  var transporter = nodemailer.createTransport({
    service: "gmail.com",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  });
  var mailOptions = {
    from: `"Chat Application" <$process.env.USER>`,
    to,
    subject,
    text
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.send(err);
      // console.log(err)
    } else {
      // console.log("Message %s sent: %s", info.messageId, info.response);
      res.send("Mail Sent Successfully To : " + to);
    }
  });
};
