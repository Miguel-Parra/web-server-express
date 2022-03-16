const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const puerto = process.env.PORT

//Handlebars
hbs.registerPartials(__dirname + '/views/partials', (err) => { console.log(err) });
app.set('view engine', 'hbs'); //para que utilice hbs al renderizar usando app.render

app.use(express.static('./public')); // Servir contenido estático 

app.get('/', (req, res) => { //este es mi controlador en handlebars
    res.render('home', {
        nombre: 'Miguel',
        titulo: 'Curso de node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Miguel',
        titulo: 'Curso de node'
    })
})
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Miguel',
        titulo: 'Curso de node'
    })
})

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/404.html`)
})

app.listen(puerto, () => {
    console.log(`Example app listening at http://localhost:${puerto}`);
}); 