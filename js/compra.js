let imgMaior = document.querySelector("#maior")



function itens(e){

    window.open('compra.html', '_self')

    localStorage.setItem("valor", e.value)

    


}




if (localStorage.getItem('valor') == 0) {
    imgMaior.setAttribute('src','/ASSETS/KILL THEM ALL TEE 1.webp')
} 

if(localStorage.getItem('valor') == 1){

    imgMaior.setAttribute('src','/ASSETS/Shape de skate/GIRLS END LOGO SKATEBOARD DECK/GIRLS END LOGO SKATEBOARD DECK 1.webp')
}
    


