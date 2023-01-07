import chama_login from "./frame_login.js"
 function frame_registrar_dialog_html(registrar,fechar,) {
    let dialog={
         divmain : document.createElement("div"),
         divtop : document.createElement("div"),
         divbottom : document.createElement("div"),
         inputdiv_email :document.createElement('div'),
         inputdiv_senha :document.createElement('div'),
         registrar:document.createElement("button"),
         cancelar : document.createElement("button"),
         email : document.createElement("input"),
         senha : document.createElement("input"),
         span_senha : document.createElement("span"),
         span_email : document.createElement("span"),

         registro:registrar,
         fechar:fechar,
    
    }
    
    dialog['divmain'].className="dialogRegistro_mandiv"
    dialog['divtop'].className="dialogRegistro_topdiv"
    dialog['divbottom'].className="dialogRegistro_bottomdiv"
    dialog['inputdiv_email'].className='input_div'
    dialog['inputdiv_senha'].className='input_div'
    dialog['registrar'].innerText="registrar"
    dialog['registrar'].className='dialogRegistro_registrarbtn'
    dialog['cancelar'].innerText="cancelar"
    dialog['cancelar'].onclick=fechar
    dialog['registrar'].onclick = registrar

    dialog['cancelar'].className='dialogRegistro_cancelarbtn'
    dialog['email'].innerText="registrar"
    dialog['email'].className='dialogRegistro_email_inp'
    dialog['senha'].innerText="cancelar"
    dialog['senha'].className='dialogRegistro_senha_inp'
    dialog['senha'].type='password'
    dialog['span_email'].className='span_email'
    dialog['span_email'].innerText="email:"
    dialog['span_senha'].className='span_senha'
    dialog['span_senha'].innerText='senha'

    dialog['inputdiv_email'].appendChild(dialog['span_email'])
    dialog['inputdiv_email'].appendChild(dialog['email'])
    dialog['inputdiv_senha'].appendChild(dialog['span_senha'])
    dialog['inputdiv_senha'].appendChild(dialog['senha'])
    dialog['divbottom'].appendChild(dialog['registrar'])
    dialog['divbottom'].appendChild(dialog['cancelar'])
    dialog['divtop'].appendChild(dialog['inputdiv_email'])
    dialog['divtop'].appendChild(dialog['inputdiv_senha'])

    dialog['divmain'].appendChild(dialog['divtop'])
    dialog['divmain'].appendChild(dialog['divbottom'])
    let body  = document.getElementById('body')

    body.appendChild(dialog['divmain'])
    return dialog
}

export default  function chama_registro(params) {
    // let divmain = document.createElement("div")
    // let divtop = document.createElement("div")
    // let divbottom = document.createElement("div")

    // divmain.className="dialogRegistro_mandiv"
    // divtop.className="dialogRegistro_topdiv"
    // divbottom.className="dialogRegistro_bottomdiv"

    
    // let inputdiv_email =document.createElement('div')
    // inputdiv_email.className='input_div'

    // let inputdiv_senha =document.createElement('div')
    // inputdiv_senha.className='input_div'


    // // inputs
    // let registrar = document.createElement("button")
    // registrar.innerText="registrar"
    // registrar.className='dialogRegistro_registrarbtn'

    // let cancelar = document.createElement("button")
    // cancelar.innerText="cancelar"
    // cancelar.onclick=fechar
    // cancelar.className='dialogRegistro_cancelarbtn'

    // let email = document.createElement("input")
    // email.innerText="registrar"
    // email.className='dialogRegistro_email_inp'
    // let senha = document.createElement("input")
    // senha.innerText="cancelar"
    // senha.className='dialogRegistro_senha_inp'
    // senha.type='password'


    // // textos 
    
    // let span_senha = document.createElement("span")
    // let span_email = document.createElement("span")

    // span_email.className='span_email'
    // span_email.innerText="email:"
    // span_senha.className='span_senha'
    // span_senha.innerText='senha'

    // inputdiv_email.appendChild(span_email)
    // inputdiv_email.appendChild(email)

    // inputdiv_senha.appendChild(span_senha)
    // inputdiv_senha.appendChild(senha)

    // divbottom.appendChild(registrar)
    // divbottom.appendChild(cancelar)


    // divtop.appendChild(inputdiv_email)

    // divtop.appendChild(inputdiv_senha)

    let body  = document.getElementById('body')
    let main  = document.getElementById('main')

    console.log('s')
     function registrar(){
        let _email = dialog['email'].value
        let _senha = dialog['senha'].value
         fazeremail(_email, _senha).then(()=>{
            body.removeChild( dialog['divmain'])
            main.style.filter="blur(0px)"
            chama_login()

         })
         
    }
    function fechar(){
      console.log(dialog)

         body.removeChild(  dialog['divmain'])
         main.style.filter="blur(0px)"
         console.log('dddddd')
         chama_login()
     }
     function auto_configurar(){
        dialog.divmain.style.borderColor=cores['cor_suplementar']
        dialog.registrar.style.backgroundColor=cores['cor_principal']

        dialog.cancelar.style.backgroundColor=cores['cor_principal']
        dialog.senha.style.borderColor=cores['cor_principal']
        dialog.email.style.borderColor=cores['cor_principal']


     }

     let dialog = frame_registrar_dialog_html(registrar,fechar)
     auto_configurar()



}   

