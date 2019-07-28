const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jarrett.lauren@gmail.com',
        subject: 'Welcome to NoteTaking!',
        text: `Welcome to the application ${name}! Let me know how you are getting along with the app!`
    })
}

const sendFarewellEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jarrett.lauren@gmail.com',
        subject: `Sorry you are leaving us`,
        text: `${name} We love feedback, so please let us know if you have suggestions for what we can do better!`
    })
}


module.exports = {
    sendWelcomeEmail, sendFarewellEmail
}