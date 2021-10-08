# Teste CODEBY
Sistema em NodeJs para enviar emails em fila e consumir API.

### 📋 Pré-requisitos
A tarefa foi desenvolvida em JavaScript para servidor (NodeJs)

Foi utilizado o REDIS para salvar os dados em fila:
Pode ser baixado ou via docker ```docker run --name redis -p 6379:6379 -d -t redis:alpine```

Foi utilizado o MAILTRAP para os emails

Foi utilizado o BULL para gerenciar filas


## ⚙️ Executando
Para executar basta estar no diretório do arquivo main no prompt de comando (terminal) e digitar: 

```
yarn dev
```
## ENV
    Trocar o arquivo .env.example para .env e colcar as variáveis de ambientes
    
## Consumindo API
Fazer um
POST localhost:3333/email
Body: {
    "name": "nome",
    "email": "email"
}
## ✒️ Autor
Jorge Soares – jorge.farias@arapiraca.ufal.br

[https://github.com/jorgesfj](https://github.com/jorgesfj)