  

async function chama_notificação(texto){


    let barra_de_notificação = document.getElementById('barra_de_notificação')
    barra_de_notificação.innerText=texto
    window.setTimeout(()=>{


        let barra_de_notificação = document.getElementById('barra_de_notificação')
      
            barra_de_notificação.className='x'
        },1500)

        barra_de_notificação.style.backgroundColor=cores.cor_principal


    barra_de_notificação.className='barra_notificação'


}

async function wigle(ctn){
    ctn.style.animationName='wiggle'
    ctn.style.animationDuration='1.5s'
     console.log(ctn)
    window.setTimeout(()=>{
        ctn.style.animationName=''
        ctn.style.animationDuration=''

    },1500)


}       
  
async function goaway(ctn){
    ctn.style.animationName='goaway'
    ctn.style.animationDuration='1.5s'
     console.log(ctn)
    window.setTimeout(()=>{
        ctn.style.animationName=''
        ctn.style.animationDuration=''

    },1500)


}       
 function offline(){
    console.log('conexao perdida')
    let main = document.getElementById('main')
    let offline_simbol = document.createElement('img')
    main.appendChild(offline_simbol)
    offline_simbol.className='offline_simbol'
    offline_simbol.src='https://t4.ftcdn.net/jpg/04/22/75/29/360_F_422752986_G2rcdouVNxn1lroFCYxuOhVyBuRpOyMU.jpg'
    
    let float_btn = document.getElementById('float_btn')
    float_btn.onclick=()=>{
        chama_notificação('sem internet')
    }
}

window.addEventListener('online', offline)
console.log(window.offline)

       