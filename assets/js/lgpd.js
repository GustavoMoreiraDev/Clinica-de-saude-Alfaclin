// let lgpdUrl = 'http://alfaclin.com.br/index.html';
let lgpdHtml = `
  <div class="lgpd">
  <div class="lgpd-left">
    Respeitando a LGPD, esse cookie é utilizado para registrar 
    o seu consentimento (Ou a falta dele) sobre o uso de nossos cookies. 
    Sem dados pessoais. <a href="LGPD.html" target="blank">Políticas de Privacidade</a>
  </div>
  <div class="lgpd-right">
    <button>Aceitar</button>
  </div>
</div>
`
let lsContent = localStorage.getItem('lgpd');
  if (!lsContent ) {
    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector('.lgpd');
    let lgpdbutton = lgpdArea.querySelector('button');
    
    lgpdbutton.addEventListener('click', () => {
        
        lgpdArea.remove()
        localStorage.setItem('lgpd', 'Usuario')
    })
  }