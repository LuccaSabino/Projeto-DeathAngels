let drop = document.getElementById("dropdown")

function dropdown(){


    if(drop.classList.contains('hide')){

        drop.classList.remove('hide')

    }else{
        drop.classList.add('hide')
    }

}



function hamburguer(){

    let menu_responsivo = document.getElementById('menu-responsivo')

    if (menu_responsivo.classList.contains('hide')){

        menu_responsivo.classList.remove('hide')

    }else{
        menu_responsivo.classList.add('hide')
    }

    if(drop.classList.contains('hide')){

    }else{
        drop.classList.add('hide')
    }
}