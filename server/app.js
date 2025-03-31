const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose =require('mongoose')
const app = express();
const cors=require('cors')
const uri = "mongodb+srv://malekimam:malek123@cluster0.yp4hj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(cors());
mongoose.connect(uri, {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 30000,
  ssl: true
})
.then(() => console.log(' connected ssuccesful'))
.catch(err => {
  console.error('❌  desconneccted', err.message);
 
});
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Server is running on port 4000');
}); 