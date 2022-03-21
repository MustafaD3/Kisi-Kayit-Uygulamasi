class personGET{
    constructor(){
        this.fs = require("fs")
    }
     getPerson(){
        return new Promise((resolve,reject) =>{
            this.fs.readFile("persons.json","utf-8",function (error,data) {
               if(error){
                    reject(error)
               }
              else{
                  resolve(data)
              }
               
            })
       })
    }
}
module.exports = personGET