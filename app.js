//using express and mongoDB, initalising them by putting them into a variable
const Express = require("express");
const BodyParser = require("body-parser");
const mongo = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

//connecting our database
const dbName = "INDE402TiltSensor";
const url = "mongodb+srv://admin:Password123@cluster0-ylc3g.mongodb.net/test?retryWrites=true";
var app = Express();
//portnumber used by the program
var port = process.env.PORT || 3000;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(Express.static('www'));

MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
    if (error) throw error;
    database = client.db(dbName);
    collection = database.collection("WaterIntakeData");
    console.log(`Connected to ${dbName}`);
})
//gets data from file www
app.get("/" ,(req,res) => {
    res.sendFile( __dirname + "/www/")
  });

  //adds data to the database
app.post("/addData", (req, res) => {
    res.status(200);
    database.collection("WaterIntakeData").insertOne(req.body, (err, result) => {
        if (err) throw err;
        console.log("Saved");
        res.redirect("/");
    })
})

//getting data from the database
app.get("/getData", (req, res) => {
    res.status(200);
    database.collection("WaterIntakeData").find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//tells us that the code is working
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});