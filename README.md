# Pokedex-React-App
![Title](https://user-images.githubusercontent.com/20692907/78142386-d6a7dc00-7467-11ea-81ca-c21b6b77d823.png)

Let's talk about Pokemons with **NodeJS** and **React**.

## Utilisation (step by step) 

**To start**:

###### In shell, open the server folder.
> Then, run the command below:
```shell
$ npm install
```

###### In a second shell, open the client folder.
> Then, run the command below:
```shell
$ npm install
```

###### To seed the database :
> In the server folder, run the command below:
```shell
$ npm run seed
```

###### To start the server, open the server folder.
> Then, run the command below:
```shell
$ npm run server <port>
```

###### To start the client, open the client folder.
> Then, run the command below:
```shell
$ npm run client
```
> :warning: **If you have an error like:** ***Module not found: Can't resolve 'react-router-dom'***. 
> run the command below in your client folder: 
```shell 
npm install -S react-router-dom
```

## Routes utilisation

|Method	|Route	|Description|
|-------|------|-----------|
|GET	| /pokemons | this should respond with a list of all pokemons.|
|GET	| /pokemons/:id	| this route should display a single pokemon's found on the daily pokedex.json|
|POST	| /pokemons/:nom | this route should add a new pokemon on the pokedex.|
|DELETE	| /pokemons/:id	| this route should allow you to delete a specific pokemon|
