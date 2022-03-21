const http = require("http")
const fs = require("fs")

const personGetClass= require("./getPerson.js")
const personGET = new personGetClass()

const personPostClass = require("./postPerson.js")
const personPostt = new personPostClass()

personGET.getPerson()
const server = http.createServer((req,res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DETELE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    console.log(req.url,req.method)
    
    if(req.url === "/" &&req.method === "GET"){
        res.setHeader("Content-Type","application/json")
        res.setHeader("Content-Type","text/html")
        personGET.getPerson()
        .then(data =>{
            res.write(data)
            res.end()
        })
        .catch(error => console.log("Hata"))
    }
    else if(req.url === "/post" && req.method ==="POST"){
        
        req.on("data",function(chunk){
            if(chunk){
                if(JSON.parse(chunk)){
                    personPostt.personPost(chunk)
                    res.write("")
                    res.end()
                }
            }
            else{
                res.write("")
                res.end()
            }
           
        })
        
    }
})
server.listen("3000")