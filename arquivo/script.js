const btn = document.querySelector(".btn")

const popup = document.querySelector(".pop-up")
const x = document.querySelector(".fechar")
const popupint = document.querySelector(".pop-up-int")
popup.classList.add("sumir")

const popup2 = document.querySelector(".pop-up2")
const x2 = document.querySelector(".fechar2")
const popupint2 = document.querySelector(".pop-up-int2")
popup2.classList.add("sumir")

btn.addEventListener("click", ()=>{
    popup.classList.remove("sumir")
    popup.classList.add("subir")
})
x.addEventListener("click", (e)=>{
    popup.classList.remove("subir")
    popup.classList.add("sumir")
})
x2.addEventListener("click", (e)=>{
    popup2.classList.remove("subir")
    popup2.classList.add("sumir")
})

document.addEventListener("mouseout", (e)=>{
    if(!e.relatedTarget){
        if(popup.classList.contains("subir")){
            popup.classList.remove("subir")
            popup.classList.add("sumir")

            popup2.classList.remove("sumir")
            popup2.classList.add("subir")
        }else{
           popup2.classList.remove("sumir") 
           popup2.classList.add("subir") 
        }
    }
})
