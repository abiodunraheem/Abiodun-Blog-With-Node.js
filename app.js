const express = require('express');

const app = express();

app.set('view engine', 'ejs')

app.listen(3000)

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Things fall apart', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores illum at rerum alias est!'},
        {title: 'No longer at ease', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores illum at rerum alias est!'},
        {title: 'The man died', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores illum at rerum alias est!'},
        {title: 'The lion and rthe jewel', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores illum at rerum alias est!'},
        {title: 'The lion of bourdillon', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores illum at rerum alias est!'},
        {title: 'A man call Achiebs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores illum at rerum alias est!'}
    ]
    res.render('index', {title: 'Home', blogs})
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create Blog'})
})

app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
})