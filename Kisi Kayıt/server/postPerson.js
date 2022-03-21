class postPerson{
    constructor(){
        this.fs = require("fs")
        this.personGetClass = require("./getPerson.js")
        this.personGET = new this.personGetClass()
    }
    personPost(object){
            object=JSON.parse(object)
            if(object.name&&object.surname&&object.age&&object.department)
            {
            this.personGET.getPerson()
            .then(cevap=>{
            if(!cevap){
                object.id = 1
                this.fs.writeFile("persons.json","["+JSON.stringify(object)+"]",function(){
                    console.log("Yazma İşlemi Başarılı")
                })
            }
            else{
                cevap = JSON.parse(cevap)
                const array =[]
                cevap.forEach(element => {
                    array.push(element)
                });
                object.id = cevap.length + 1
                array.push(object)
                this.fs.writeFile("persons.json",JSON.stringify(array),function () { 
                    console.log("Kişi Eklendi")
                })
            }
            })
            .catch(error => console.log(error))
        
            }
            else{
                console.log("Nesne Dogru Değil")
            }
            
    }

}
module.exports = postPerson