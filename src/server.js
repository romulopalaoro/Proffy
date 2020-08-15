//Servidor
const express = require('express')
const server=express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', { express: server, noCache: true,})
//Inicio e configuração do servidor
server
//recebcer os dados do req.body
.use(express.urlencoded({extended:true}))
// configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// Start do servidor
.listen(5500)