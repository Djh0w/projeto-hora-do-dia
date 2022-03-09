function carregar() {
    var msg = document.getElementById('msg')
    var cum = document.getElementById('cumprimento')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()    
    
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //bom dia 
        img.src = 'manha.png'  
        document.body.style.background = '#abc7ab' 
        cum.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#dfa672'
        cum.innerHTML = 'Boa tarde!'
    } else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#878fa2'
        cum.innerHTML = 'Boa Noite!'
    }
}


