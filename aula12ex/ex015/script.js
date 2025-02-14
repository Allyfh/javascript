function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
        genero = 'Homem'
        if (idade >=0 && idade < 10){
            //Criança
            img.setAttribute('src', 'crianca-h.jpg')
        } 
        else if (idade < 21){
           //Jovem
           img.setAttribute('src', 'jovem-h.jpg')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'adult-h.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'idoso-h.jpg')
        }
       } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >=0 && idade < 10){
            //Criança
            img.setAttribute('src', 'crianca-m.jpg')
        } 
        else if (idade < 21){
           //Jovem
           img.setAttribute('src', 'jovem-m.jpg')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'adult-m.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'idoso-m.jpg')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)

    }

}