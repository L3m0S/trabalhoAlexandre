const bodyParser = require('body-parser')
const app = require('express')()
const cors = require('cors')

//Routas criadas
const internacao = require('./routes/internacao')
const guiaexame = require('./routes/guiaexame')

//Seção de adição de configurações no servidor: Utilização de Json, configuração do cors e utilização das rotas
app.use(cors())
app.use(bodyParser.json())
app.use('/internacao', internacao)
app.use('/guiaexame', guiaexame)


const port = 3333 

app.listen(port || 3333, () => { ''
    console.log(`Server is listening on port ${port}`)
})