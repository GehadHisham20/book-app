import nodemailer from 'nodemailer'

async function vertifyEmail(){
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: 'gehadhisham798@gmail.com', // generated ethereal user
          pass: 'vullrermwuxwbtbq', // generated ethereal password
        },
      });
    
    let info = await transporter.sendMail({
        from: '"Book App" <gehadhisham798@gmail.com', // sender address
        to: "cawaf95149@ekbasia.com", // list of receivers
        subject: "vertification mail", // Subject line
        text: "", // plain text body
        html: `<h1>Vertification Code</h1>
        <p></p>`, // html body
      });
}
export default vertifyEmail;
