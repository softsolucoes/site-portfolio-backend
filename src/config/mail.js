require('dotenv').config()

export default {
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    },
    default: {
        from: "Eduardo Melo"
    }
}