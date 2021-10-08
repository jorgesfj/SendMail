import Queue from '../lib/queue';

export default{
    async sendMail(req,res) {
        const {name, email} = req.body;

        const mail = {
            name,
            email
        };

        //Adicionar job quantityMail na fila
        await Queue.add({mail});
        
        return res.json(mail);
    }
}