var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${min} minutos.`)
if (hora < 12){
    console.log('Bom dia!')
} else if (hora <= 18){
    console.log('Boa tarde!')
} else if (hora >= 24){
    console.log('Boa madrugada')
}
 else{
    console.log('Boa noite!')
}
