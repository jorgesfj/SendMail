import Mail from '../lib/mail';

export default {
    key: 'quantityMail',
    async handle({data}) {

        const { mail } = data;
        const response = await axios.get('https://apiexamples.vtexcommercestable.com.br/api/catalog_system/pub/products/search');
        const quantity = response.data.length;

        await Mail.sendMail({
            from: 'Codeby Test <test@test.com.br>',
            to: `${mail.name} <${mail.email}>`,
            subject: 'Quantidade de produtos disponíveis na loja',
            html: `Olá, ${mail.name}, a quantidade de produtos disponíveis na loja é: ${quantity}`
        });
    }
}