
const express = require('express')
const app = express()
const request = require('request')
const path = require('path')

const Port = 7777

//Serving files
app.use(express.static(path.join(__dirname, `../dist`)))
app.use(express.static(path.join(__dirname, `../node_modules`)))

app.get('/sanity', (req, res) => res.send("I'm alive"))
app.get('/', (req, res) => res.send(`Running on port:${Port}`))

//Routes and data
// Recipe API --> https://recipes-goodness.herokuapp.com/recipes/YOUR_INGREDIENT

app.get('/recipes/:ingredient', (req, res) => {
    const ingredient = req.params.ingredient
    let apiURL = `https://recipes-goodness.herokuapp.com/recipes/${ingredient}`
    request(apiURL, function (error, response, body) {
        let recipeData = JSON.parse(body).results//<-- Se agrega "results" porque API entrega {results:[RECIPES], así se obtiene el array final}
        let data = recipeData.map(r => {
            return {
                title: r.title,
                ingredients: r.ingredients,
                thumbnail: r.thumbnail,
                href: r.href
            }
        })
        res.send(data)
    })
})












app.listen(Port, () => console.log(`Server running on http://localhost:${Port}`))