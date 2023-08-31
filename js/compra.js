let imgMaior = document.querySelector("#maior")
let imgMenor = document.querySelector("#menor1")
let imgMenor2 = document.querySelector("#menor2")
let imgMenor3 = document.querySelector("#menor3")
const item = document.querySelector("#nomeItem")
const preco = document.querySelector("#preço")

const tamanho = document.querySelector("#tamanhos")



function itens(e){

    window.open('compra.html', '_self')

    localStorage.setItem("valor", e.value)

    


}




if (localStorage.getItem('valor') == 0) {
    imgMaior.setAttribute('src','/ASSETS/Acessórios para cabeça/DEATH ANGELS LOW CAP [BLACK]/DEATH ANGELS LOW CAP [BLACK] 1.webp')
    imgMenor.setAttribute('src' , '/ASSETS/Acessórios para cabeça/DEATH ANGELS LOW CAP [BLACK]/DEATH ANGELS LOW CAP [BLACK] 2.webp')
    imgMenor2.setAttribute('src' , '/ASSETS/Acessórios para cabeça/DEATH ANGELS LOW CAP [BLACK]/DEATH ANGELS LOW CAP [BLACK] 3.jpg')
    imgMenor3.setAttribute('src' , '/ASSETS/Acessórios para cabeça/DEATH ANGELS LOW CAP [BLACK]/DEATH ANGELS LOW CAP [BLACK] 4.webp')

    item.innerText = 'DEATH ANGELS LOW CAP'
    preco.innerText = 'R$150,00'

    tamanho.innerHTML = '<li>B</li>'

    
} 

if(localStorage.getItem('valor') == 1){

    imgMaior.setAttribute('src','/ASSETS/Shape de skate/GIRLS END LOGO SKATEBOARD DECK/GIRLS END LOGO SKATEBOARD DECK 1.webp')
    imgMenor.setAttribute('src' , '/ASSETS/Shape de skate/GIRLS END LOGO SKATEBOARD DECK/GIRLS END LOGO SKATEBOARD DECK 2.webp')
    imgMenor2.setAttribute('src' , '/ASSETS/Shape de skate/GIRLS END PINK SKATEBOARD DECK/GIRLS END PINK SKATEBOARD DECK 1.webp')
    imgMenor3.setAttribute('src' , '/ASSETS/Shape de skate/GIRLS END RED SKATEBOARD DECK/GIRLS END RED SKATEBOARD DECK 1.webp')

    item.innerText = 'GIRLS END LOGO SKATEBOARD DECK'
    preco.innerText = 'R$700,00'

    tamanho.innerHTML = '<li>785X200</li>'

}

if(localStorage.getItem('valor') == 2){

    imgMaior.setAttribute('src','/ASSETS/KILL THEM ALL TEE 1.webp')
    imgMenor.setAttribute('src' , '/ASSETS/Camisetas/KILL THEM ALL TEE/KILL THEM ALL TEE 2.webp')
    imgMenor2.setAttribute('src' , '/ASSETS/Camisetas/KILL THEM ALL TEE/KILL THEM ALL TEE 3.jpg')
    imgMenor3.setAttribute('src' , '/ASSETS/Camisetas/KILL THEM ALL TEE/KILL THEM ALL TEE 4.jpg')

    item.innerText = 'KILL THEM ALL TEE'
    preco.innerText = 'R$200,00'

    tamanho.innerHTML = '<li>P</li> <li>M</li> <li>G</li> <li>GG</li> <li>G1</li>'

}
if(localStorage.getItem('valor') == 3){

    imgMaior.setAttribute('src','/ASSETS/Blusa de manga comprida/MEMENTO MORI LS TEE/MEMENTO MORI LS TEE 1.webp')
    imgMenor.setAttribute('src' , '/ASSETS/Blusa de manga comprida/MEMENTO MORI LS TEE/MEMENTO MORI LS TEE 2.webp')
    imgMenor2.setAttribute('src' , '/ASSETS/Blusa de manga comprida/MEMENTO MORI LS TEE/MEMENTO MORI LS TEE 3.webp')
    imgMenor3.setAttribute('src' , '/ASSETS/Blusa de manga comprida/MEMENTO MORI LS TEE/MEMENTO MORI LS TEE 4.webp')

    item.innerText = 'MEMENTO MORI LS TEE [TYPE:A]'
    preco.innerText = 'R$220,00'

    tamanho.innerHTML = '<li>P</li> <li>M</li> <li>G</li> <li>GG</li> <li>G1</li>'

}
if(localStorage.getItem('valor') == 4){

    imgMaior.setAttribute('src','/ASSETS/Moletom/SMILE RED HOODIE/EMPTINESS HOODIE 1.webp')
    imgMenor.setAttribute('src' , '/ASSETS/Moletom/SMILE RED HOODIE/EMPTINESS HOODIE 2.webp')
    imgMenor2.setAttribute('src' , '/ASSETS/Moletom/SMILE RED HOODIE/EMPTINESS HOODIE 3.webp')
    imgMenor3.setAttribute('src' , '/ASSETS/Moletom/SMILE RED HOODIE/EMPTINESS HOODIE 4.webp')

    item.innerText = 'SMILE RED HOODIE'
    preco.innerText = 'R$320,00'

    tamanho.innerHTML = '<li>GG</li>'

}
if(localStorage.getItem('valor') == 5){

    imgMaior.setAttribute('src','/ASSETS/Jaqueta/PSYCHO COACH JKT/PSYCHO COACH JKT 1.webp')
    imgMenor.setAttribute('src' , '/ASSETS/Jaqueta/PSYCHO COACH JKT/PSYCHO COACH JKT 2.webp')
    imgMenor2.setAttribute('src' , '/ASSETS/Jaqueta/PSYCHO COACH JKT/PSYCHO COACH JKT 3.webp')
    imgMenor3.setAttribute('src' , '/ASSETS/Jaqueta/PSYCHO COACH JKT/PSYCHO COACH JKT 4.webp')

    item.innerText = 'PSYCHO COACH JKT'
    preco.innerText = 'R$290,00'

    tamanho.innerHTML = '<li>G</li> <li>GG</li>'

}
if(localStorage.getItem('valor') == 6){

    imgMaior.setAttribute('src','/ASSETS/Art Book/ART BOOK MOMENT/ART BOOK MOMENT 1.webp')
    imgMenor.setAttribute('src' , '/ASSETS/Art Book/ART BOOK MOMENT/ART BOOK MOMENT 2.webp')
    imgMenor2.setAttribute('src' , '/ASSETS/Art Book/ART BOOK MOMENT/ART BOOK MOMENT 3.webp')
    imgMenor3.setAttribute('src' , '/ASSETS/Art Book/ART BOOK MOMENT/ART BOOK MOMENT 4.webp')

    item.innerText = 'ART BOOK MOMENT'
    preco.innerText = 'R$75,00'

}
if(localStorage.getItem('valor') == 7){

    imgMaior.setAttribute('src','/ASSETS/Meias/FxxKING MAID SOX/FxxKING MAID SOX 1.webp')
    imgMenor.setAttribute('src' , '/ASSETS/Meias/FxxKING MAID SOX/FxxKING MAID SOX 2.webp')
    imgMenor2.setAttribute('src' , '/ASSETS/Meias/GIRLS END SOX/GIRLS END SOX 1.webp')
    imgMenor3.setAttribute('src' , '/ASSETS/Meias/GIRLS END SOX/GIRLS END SOX 2.jpg')

    item.innerText = 'FxxKING MAID SOX'
    preco.innerText = 'R$100,00'

    tamanho.innerHTML = '<li>35-42</li> <li>43-46</li>'


}
if(localStorage.getItem('valor') == 8){

    imgMaior.setAttribute('src','/ASSETS/Bolsa/GIRLS END TOTE BAG/GIRLS END TOTE BAG 1.webp')
    imgMenor.setAttribute('src' , '/ASSETS/Bolsa/GIRLS END TOTE BAG/GIRLS END TOTE BAG 2.jpg')
    imgMenor2.setAttribute('src' , '/ASSETS/Bolsa/MEGANE GIRLS PVC BAG/MEGANE GIRLS PVC BAG 1.webp')
    imgMenor3.setAttribute('src' , '/ASSETS/Bolsa/MEGANE GIRLS PVC BAG/MEGANE GIRLS PVC BAG 2.webp')

    item.innerText = 'GIRLS END LOGO SKATEBOARD DECK'
    preco.innerText = 'R$135,00'

    tamanho.innerHTML = '<li>36x37cm</li>'


}
    


