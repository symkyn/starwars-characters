const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config({
    path: __dirname + '/../.env',
});

const app = express();

const characters = [
    {
        name: 'Anakin Skywalker',
        title: 'Darth Vader',
        homePlanet: 'Tattooine',
        affilliation: 'Galactic Empire',
    },
    {
        name: 'Han Solo',
        title: 'Smuggler',
        homePlanet: 'Correlia',
        affilliation: 'Rebellion',
    },
];

const user = {
    name: 'Simon Blake',
    userName: 'symkyn',
    imageURL: 'https://cf.geekdo-images.com/medium/img/z5IAbtNAO5Fu175pttC-mFWaidQ=/fit-in/500x500/filters:no_upscale()/pic3469216.jpg',
    phoneNumber: '801-368-5484',
    email: 'everett.blake@gmail.com',
    about: 'I like board games'
}

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
    
//     next();
// });
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../build'));

app.get('/user', (req,res) => {
    res.send(user);
});

app.patch('/user/url', (req,res) => {
    console.log(req);
    user.imageURL = req.body.imageURL;
    res.send(user);
})

app.get('/characters', (req, res) => {
    const characterList = characters.filter(character => {
        const search = req.query.search.toLowerCase();
        return character.name.toLowerCase().includes(search) ||
            character.title.toLowerCase().includes(search) ||
            character.homePlanet.toLowerCase().includes(search) ||
            character.affilliation.toLowerCase().includes(search);
    });
    res.send(characterList);
});

app.get('/characters/:id', (req, res) => {
    const { id } = req.params;
    const character = characters[id];
    
    if (!character) {
        return res.status(404).send({
            message: 'No character found with id ' + id,
        });
    }
    
    res.send(character);
});

app.post('/characters', (req, res) => {
    const newCharacter = req.body;
    
    characters.push(newCharacter);
    
    res.send(newCharacter);
});

app.patch('/characters/:id', (req, res) => { // or PUT
    const { id } = req.params;
    const character = req.body;
    
    characters[id] = character;
    
    res.send(character);
});

app.delete('/characters/:id', (req, res) => {
    const { id } = req.params;
    
    const removedCharacter = characters.splice(id, 1)[0];
    
    res.sendStatus(204);
});

const port = process.env.SERVER_PORT || 3002;

app.listen(port, () => {
    console.log(`Server listening at localhost:${port}`);
});











// ---------------------------- OLD ------------------------------------

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req.method + ' to ' + req.url);
    
//     if (req.method == 'GET') {
//         if (req.url == '/characters') {
//             // do something
//         }
//     }
    
//     res.end(JSON.stringify({ message: 'blah!' }));
// });

// server.listen(3002);

// console.log('Server listening at port 3002');