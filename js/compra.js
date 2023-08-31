let imgMaior = document.querySelector("#maior")



function itens(){

    window.open('compra.html', '_self')

    imgMaior.setAttribute('src','/ASSETS/KILL THEM ALL TEE 1.webp')

    

}


function opa(){

    switch (localStorage.valor){

        case 3:
            imgMaior.setAttribute('src','/ASSETS/KILL THEM ALL TEE 1.webp')

            break

    }
}