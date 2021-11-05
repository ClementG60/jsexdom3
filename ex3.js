let e1 = document.getElementById("errorName")

function nameVerification(){
    let n1 = document.getElementById("name").value
    let re1 = /^[a-zA-Z]/
    if (!re1.test(n1)){
        e1.innerText = "Veuillez entrer un nom valide."
        e1.style.color = "red"
    } else e1.innerText = ""
}


let e2 = document.getElementById("errorMail")

function mailVerification(){
    let n2 = document.getElementById("mail").value
    let re2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!re2.test(n2)){
        e2.innerText = "Veuillez entrer une adresse mail valide."
        e2.style.color = "red"
    } else e2.innerText = ""
}

let e3 = document.getElementById("errorAge")

function ageVerification(){
    let n3 = document.getElementById("age").value
    let re3 = /^(100|200|[1-2][1-9][0-9]?)$/
    if (!re3.test(n3)){
        e3.innerText = "Veuillez entrer uniquement des chiffres."
        e3.style.color = "red"
    } else e3.innerText = ""
}