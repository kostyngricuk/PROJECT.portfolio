import express from 'express'
import path from 'path'

import {FirstMiddleWare} from './middlewares.js'

const __dirname = path.resolve()
const PORT = process.env.PORT?process.env.PORT:3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use('/404', FirstMiddleWare)
app.use(express.static(path.resolve(__dirname, 'public')))



app.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Kanstantsin H.'
    })
});

app.get('/404', (req, res) => {
    res.render('pages/404', {
        title: 'Page Not Found'
    })
    req.FirstMiddleWare
});


app.use((req, res) => {
    res.status(404).render('pages/404', {
        title: 'Page Not Found'
    })
})

app.listen(PORT, () => {
    console.log(`Express has been started on port ${PORT} ...`)
    console.log(`http://localhost:${PORT}`)
})