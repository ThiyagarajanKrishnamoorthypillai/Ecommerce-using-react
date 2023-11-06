var MongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var connectionString = "mongodb://127.0.0.1:27017/";
var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

app.get("/users",(request,response)=>{
    MongoClient.connect(connectionString).then((clientObject)=>{
        var database = clientObject.db("shopper");
        database.collection("user").find({}).toArray().then((documents)=>{
            response.send(documents);
          
        })
    })
})

app.post("/registeruser", (request,response)=>{
    var register = {
        "UserId":request.body.UserId,
        "UserName": request.body.UserName,
        "Mobile": request.body.Mobile,
        "Age": parseInt(request.body.Age),
        "Email":request.body.Email,
        "Password": request.body.Password
    }
    MongoClient.connect(connectionString).then((clientObject=>{
        var database = clientObject.db("shopper");
        database.collection("user").insertOne(register).then(result=>{
            console.log("Record Inserted");
            response.redirect("/users");
        })
    }))
})
app.listen(8080);
console.log("server Started: http://localhost:8080");