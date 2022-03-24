require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

/****
 *
 *
 *
 * Other routes here....
 *
 *
 */


//Get request to send words list over
app.get('/words', function (req, res) {
db.word.find().then(results => {
  let wordArray = results
  res.send(wordArray);
});
});

//Post request to /words for adding client input data
app.post('/words', function(req,res) {
  // console.log(req.body);
  // let glossObj = req.body;
  db.word.create(req.bodyj);
  res.status(201).send();
})

//create a default starting glossary seed
let tempGloss = [{word: 'happy', definition: 'the feeling a person gets when their code runs'},
{word: 'sad', definition: 'the feeling that mongo gave me yesterday'},
{word: 'terrified', definition: 'feelings about the upcoming TA'}];

//This is here to clear db if necessary
// db.word.deleteMany({}).exec();

//Block below was used to create default gloss in db

// tempGloss.forEach(w => {
// aWord = new db.word(w);
// aWord.save((err) => {
//   console.log(aWord);
//   if (err) {console.log(err); }
// })
// })

//Block to check default gloss is saved

db.word.find().then(results => {
  console.log(results);
})



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
