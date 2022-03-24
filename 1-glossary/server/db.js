const mongoose = require("mongoose");
// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// 2. Set up any schema and models needed by the app
const glossarySchema = new mongoose.Schema({
  word: String,
  definition: String
});

const Word = mongoose.model('Word', glossarySchema);
// 3. Export the models
exports.word = Word;
// 4. Import the models into any modules that need them
