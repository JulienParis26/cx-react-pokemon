const fs = require('fs')
const path = require('path')
const initDatabase = require('./database')


const pokedexPathName = path.join(process.cwd(), 'data', 'pokedex.json')
const data = fs.readFileSync(pokedexPathName, 'utf-8')
const pokemons = JSON.parse(data)

const attributes = []
pokemons.forEach((current) => {
  Object.keys(current).forEach((key) => {
    const index = attributes.findIndex(attr => attr === key)
    
    if (index === -1) {
      attributes.push(key)
    }
  })
  
})

const db = initDatabase()
const tableName = 'pokemons'

db.schema.dropTableIfExists(tableName).then(() => {
  db.schema.createTable(tableName, (table) => {
    table.increments()
    attributes.forEach(fieldName => {
      if (fieldName === 'attaques') {
        table.json('attaques').nullable()
      } else {
        table.string(fieldName, 500).nullable()
      }
    })
  }).then(() => {

    const formattedPokemons = pokemons.map(current => {
      current.attaques = JSON.stringify(current.attaques)

      return current
    })

    db.batchInsert(tableName, formattedPokemons, 100).then(() => {
      console.log(`Pokemons successfully saved`)
      db.destroy
      process.exit(0)
    })
  })
})


