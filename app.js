
const nodemailer = require('nodemailer')

const html = `<H1>Hello world</h1>`

const sender = '@gmail.com'
const receiver = '@gmail.com'
const password = ''

async function main(){
    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        logger:true,
        debug:true,
        secureConnection:false,
        service:'gmail',
        auth:{
            user: sender,
            pass:password
              },
        tls:{
            rejectUnauthorized:true
        }

    })

    const info = transporter.sendMail({
        from:'Anushka Isuru <anushka8.ai@gmail.com>',
        to:receiver,
        subject:'Testing',
        html:html,

    })

    console.info("sent" + (await info).messageId)
}

main()
.catch(e => console.log(e));