var agora = new Date()
var hora = agora.getHours()
console.log(`agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log('Estamos no período da manhã ')
} else if (hora <= 18) {
    console.log('Estamos no período da tarde')
} else{
    console.log('Estamos no período da noite')
}