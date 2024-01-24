let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let formEnviar = document.querySelector('.btn-enviar input');

// Função para redirecionar para o WhatsApp
function enviarParaWhatsApp() {
    var numeroWhatsApp = +5598981454184 ;
    
    var linkWhatsApp = "https://api.whatsapp.com/send?phone=" + +5598981454184;
    
    window.location.href = linkWhatsApp;
}


btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
});


formEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    enviarParaWhatsApp();
});


