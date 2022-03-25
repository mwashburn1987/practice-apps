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
app.get('/search', function(req, res) {
  // console.log(req.query);
  db.word.find(req.query)
  .then(results => {
    res.status(200).send(results)
  })
})

//Post request to /words for adding client input data
app.post('/words', function(req,res) {
  // console.log(req.body);
  // let glossObj = req.body;
  db.word.create(req.body);
  res.status(201).send();
});

//Post request for /edit to edit existing words
app.post('/edit', function (req, res) {
  db.word.updateOne({word: req.body.word}, {definition: req.body.definition}).then(results => {
    res.status(200).send();
  })
});

//Delete request
app.delete('/delete', function (req, res) {
db.word.deleteOne({word: req.body.word}).then(results => {
  console.log(req.body);
  res.status(200).send();
})
.catch(error => {
console.log(error);
})
});

//create a default starting glossary seed
// let tempGloss = [{word: 'happy', definition: 'the feeling a person gets when their code runs'},
// {word: 'sad', definition: 'the feeling that mongo gave me yesterday'},
// {word: 'terrified', definition: 'feelings about the upcoming TA'}];

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

// db.word.find({}).then(results => {
//   console.log(results);
// })



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
