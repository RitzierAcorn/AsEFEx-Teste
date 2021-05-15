const dotenv = require('dotenv');
dotenv.config();
const mailer = require("nodemailer");

const getEmailData = (nome, email, texto) => {
    let data = null;

    // switch (assunto) {
    //     case "Dúvida":
    //         data = {
    //             from: "Fale Conosco <site.asefex@gmail.com>",
    //             to: "luan.dias@imejunior.com.br",
    //             subject: "Fale Conosco: Dúvida",
    //             html: `<p><strong>NOME:</strong> ${nome}</p>
    //                    <p><strong>E-MAIL:</strong> ${email}</p>
    //                    <p><strong>MENSAGEM:</strong> ${texto}</p>`
    //         }
    //         break;
    //     case "Pagamento":
    //         data = {
    //             from: "Fale Conosco <site.asefex@gmail.com>",
    //             to: "luan.dias@imejunior.com.br",
    //             subject: "Fale Conosco: Pagamento",
    //             html: `<p><strong>NOME:</strong> ${nome}</p>
    //             <p><strong>E-MAIL:</strong> ${email}</p>
    //             <p><strong>MENSAGEM:</strong> ${texto}</p>`
    //         }
    //         break;
    //     case "Proposta de Amigo":
    //         data = {
    //             from: "Fale Conosco <site.asefex@gmail.com>",
    //             to: "luan.dias@imejunior.com.br",
    //             subject: "Fale Conosco: Proposta de Amigo",
    //             html: `<p><strong>NOME:</strong> ${nome}</p>
    //             <p><strong>E-MAIL:</strong> ${email}</p>
    //             <p><strong>MENSAGEM:</strong> ${texto}</p>`
    //         }
    //         break;
    //     default:
    //         data;
    // }
    // return data;

    data = {
        from: "Fale Conosco site AsEFEx <site.asefex@gmail.com>",
        to: "flaviogfp@hotmail.com, asefex1990@gmail.com",
        subject: `Mensagem de ${nome}`,
        html: `<p><strong>NOME:</strong> ${nome}</p>
                       <p><strong>E-MAIL:</strong> ${email}</p>
                       <p><strong>MENSAGEM:</strong> ${texto}</p>`
    }

    return data;

}

const sendEmail = (nome, email, texto) => {

    const smtpTransport = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mail = getEmailData(nome, email, texto)

    smtpTransport.sendMail(mail, function (error, response) {
        if (error) {
            console.log("Erro", error)
        }
        else {
            console.log("Mensagem enviada!")
        }
        smtpTransport.close();
    })

}

module.exports = { sendEmail }