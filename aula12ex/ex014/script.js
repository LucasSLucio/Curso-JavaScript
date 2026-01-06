function carregar() {
    var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //Bom Dia!
    img.src = 'imagens/manha-certa.png'
    document.body.style.background = "#473415"
} else if (hora >= 12 && hora <18) {
    //Boa Tarde!
    img.src = 'imagens/tarde-certa.png'
    document.body.style.background = "#7d421a"
} else {
    // Boa Noite!
    img.src = 'imagens/noite-certa.png'
    document.body.style.background = "#1b1d29"
}
}
// manhã  #473415
// tarde  #7d421a
// noite #1b1d29