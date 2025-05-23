const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send", async (req, res) => {
  const name = req.body.name;

  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "OmgivelseSkjema@outlook.com",
      pass: "EuroSign2025"
    }
  });

  await transporter.sendMail({
    from: '"Nettside" <OmgivelseSkjema@outlook.com>',
    to: "OmgivelseSkjema@outlook.com",
    subject: "Ny melding fra nettsiden",
    text: `Navn: ${name}`
  });

  res.send("Takk for meldingen!");
});

app.listen(3000, () => console.log("Server kjører på port 3000"));
