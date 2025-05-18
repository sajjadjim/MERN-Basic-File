const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware
app.use(cors());
app.use(express.json());

// User : simpleDB
// Password : GouG8QS2AFhbOBV5

const uri = "mongodb+srv://simpleDB:GouG8QS2AFhbOBV5@sajjadjim15.ac97xgz.mongodb.net/?retryWrites=true&w=majority&appName=SajjadJim15";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    // Data taken from the user and that add to the database 
    const usersCollection = client.db('usersdb').collection('users')

    app.get('/users' , async(req , res)=>{
        const cursor = usersCollection.find()
        const result = await cursor.toArray();
        res.send(result)
    })

    // New Data has been added on the server side 
    //Data Has been here put on the server side 
    app.post('/users', async (req, res) => {
      console.log("Data in the the server" , req.body)
      const newUser = req.body
      const result = await usersCollection.insertOne(newUser)
      res.send(result);
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");


    // user has been remoive from the DataBase 
    app.delete('/users/:id' , async(req , res)=>{
      const id = req.params.id
      const queryData = {_id : new ObjectId(id)}
      const result = await usersCollection.deleteOne(queryData)
      res.send(result)
    })

      //  specefic user load system 
  // --------------------------------
  // app.get('/user/:id' , async(req , res)=>{
  //   const id = req.params.id
  //   const queryByIdFind = {_id : new ObjectId(id)}
  //   const result = await usersCollection.findOne(queryByIdFind)
  //   res.send(result)
  // })

  app.get('/users/:id' , async(req , res) =>{
      const id =req.params.id
      const query ={_id : new ObjectId(id)}
      const result = await usersCollection.findOne(query)
      res.send(result)
     })

  } 
  finally {

  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port "JIM" ${port}`)
})
