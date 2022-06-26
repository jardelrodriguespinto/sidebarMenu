//Variáveis do botão esquerdo
const sidebarAesquerda = document.getElementById('sidebarAesquerda');
const esquerdaBtn = document.getElementById('esquerda-btn');
const fecharBtn1 = document.getElementById('fechar-btn1');
//Variáveis do botão direito
const sidebarAdireita = document.getElementById('sidebarAdireita');
const direitaBtn = document.getElementById('direita-btn');
const fecharBtn2 = document.getElementById('fechar-btn2');

//Funcionalidade do botão esquerdo
esquerdaBtn.addEventListener('click',() => {
    sidebarAesquerda.style.width = '250px';
    esquerdaBtn.style.backgroundColor = "rgba(0,0,0,0.6)";
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
})

fecharBtn1.addEventListener('click',() => {
    sidebarAesquerda.style.width = '0';
    document.body.style.backgroundColor = "white";
    esquerdaBtn.style.backgroundColor = "white";
    

})
//Funcionalidade do botão direito
direitaBtn.addEventListener('click',() => {
    sidebarAdireita.style.width = '250px';
    direitaBtn.style.backgroundColor = "rgba(0,0,0,0.6)";
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
})

fecharBtn2.addEventListener('click',() => {
    sidebarAdireita.style.width = '0';
    document.body.style.backgroundColor = "white";
    direitaBtn.style.backgroundColor = "white";

})
