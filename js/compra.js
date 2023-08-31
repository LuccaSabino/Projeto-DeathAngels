let imgMaior = document.querySelector("#maior")



function itens(e){

    window.open('compra.html', '_self')

    localStorage.setItem("valor", value)

    opa()
    

}


function opa(){

    switch (localStorage.valor){

        case 0:
            imgMaior.setAttribute('src','/ASSETS/KILL THEM ALL TEE 1.webp')

            break

    }
}