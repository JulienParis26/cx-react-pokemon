const express = require('express')
const cors = require('cors')
const initDatabase = require('./database')

function run(port) {
  const app = express()
  const db = initDatabase()

  // cross origin request 
  app.use(cors())

  app.get('/', (req, res) => {
    res.json({
      hello: 'From Pokedex API'
    })
  })

  app.get('/pokemons', (req, res) => {
    db.select('*')
        .from('pokemons')
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            console.log(err)
        })
  })

  app.get('/pokemons/:id', (req, res) => {
    const pokeId = req.params.id;

    db.select('*')
        .from('pokemons')
        .where('pokemons.id', '=', pokeId)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            console.log(err)
        })
  })

  app.post('/pokemons/:nom', (req, res) => {
    db('pokedex')
        .from('pokemons')
        .insert({
            nom: req.params.nom,
        })
        .then(() => {
            console.log('Pokemon Added');
            return res.redirect('http://localhost:4242/pokemons');
        })
        .catch((err) => {
            console.log(err);
        });
  })

  app.delete('/pokemons/:id', (req, res) => {
    const pokeId = req.params.id;

    db.select('*')
        .from('pokemons')
        .where('pokemons.id', '=', pokeId)
        .del()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            console.log(err)
        })
  })


  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
  })
}

const args = process.argv.slice(2)
if (args.length !== 1) {
  console.log("Usage: node src/main.js <port>")
  process.exit(0)
}

const port = args[0]
run(parseInt(port, 10))
