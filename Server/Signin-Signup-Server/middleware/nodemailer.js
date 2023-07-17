const nodemailer=require("nodemailer");

let transporter= nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"sambhajisd4@gmail.com",
        pass:"ljgctjcbcfgqaetf"
    }

});

module.exports={transporter};