function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
   
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
     if (hora >= 0 && hora < 12){
        img.src = 'man.jpg.jpg'
        document.body.style.background = '#7DA7D1'
     } else if (hora >=12 && hora <= 18){
        img.src = 'tar.jpg'
        document.body.style.background = '#FEB140'
     } else {
        img.src = 'noit.jpg'
        document.body.style.background = '#1B254E'
     }
}

