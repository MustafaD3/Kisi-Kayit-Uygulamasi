
/* Yapı  
                    
    */
import person from "./person.js"
const personClass = new person()
const tbody = document.getElementById("tbody")
const postButton = document.getElementById("postButton")
postButton.addEventListener("click",personAdd)

function personAdd(e){
    e.preventDefault()
    const object = new Object()
    const name = document.getElementById("name").value
    if(name){
        object.name = name
        const surname = document.getElementById("surname").value
        if(surname){
            object.surname = surname
            const age = document.getElementById("age").value
            if(age){
               if(age >= 18){
                object.age = age
                const radioButon = document.querySelector("input[type='radio']:checked")
                let radioButonText = radioButon.parentElement.innerText
                radioButonText = radioButonText.slice(0,radioButonText.length-2)
                object.department = radioButonText
                personClass.personPost(object)
               }
               else{
                   alert("Yaş 18'den Büyük Veya Eşit Olmalı")
               }
            }
            else{
                alert("Yaş Giriniz")
            }
        }
        else{
            alert("Soyisim Giriniz")
        }
    }
    else{
        alert("İsim Giriniz")
    }
}

const getButton = document.getElementById("getButton")
getButton.addEventListener("click",personGet)
function personGet(e){
    e.preventDefault()
    personClass.personGET()
    .then(data => {
        tbody.innerHTML =""
        data.forEach(element => {
            const tr = document.createElement("tr")
            const string = `<th class="border-white">${element.name}</th>
            <th class="border-white">${element.surname}</th>
            <th class="border-white">${element.age}</th>
            <th class="border-white">${element.id}</th>`
            tr.innerHTML = string
            console.log(tr)
            tbody.append(tr)
        })
    })
    .catch(error =>console.log(error))
}