export default class person{
    
    
       personPost(object){
        const xmr = new XMLHttpRequest()
        xmr.withCredentials = true
        xmr.open("POST","http://localhost:3000/post")
        xmr.addEventListener("readystatechange",()=>{
            if(this.readyState === 4) {
                console.log(this.responseText);
            }
        })
        xmr.send(JSON.stringify(object))
    }

    personGET(){
        return new Promise((resolve,reject)=>{
            const xmr = new XMLHttpRequest()
            xmr.open("GET","http://localhost:3000/")
            xmr.addEventListener("readystatechange",()=>{
                if(xmr.readyState == 4 && xmr.status == 200) {
                    resolve(JSON.parse(xmr.response))
                }
                else if(xmr.readyState == 4){
                    reject("Hata")
                }
            })
            xmr.send()
        })
    }
}