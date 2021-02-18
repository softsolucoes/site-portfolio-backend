import Mail from '../../lib/Mail';

class MailController {
    async store(req, res){
        console.log('to aqui')
        const {FNAME, EMAIL, PROJETO, MENSAGEM} = req.body;
        await Mail.sendMail({
            to: `${FNAME} <${EMAIL}>`,
            subject: PROJETO,
            template: "helloMail",
            context: {
                provider: FNAME,
                message: MENSAGEM
            }
        })
    }
}

export default new MailController();