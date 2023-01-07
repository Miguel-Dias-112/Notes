
import chama_registro from "./frame_registrar.js"
 function frame_dialog_html(logar,cancelar,registrar,) {
        console.log('entrei aqui')
    
        let dialog={
            dialogLogin_div :document.createElement('div'),
            div_inputs :document.createElement('div'),
            div_input1 :document.createElement('div'),
            
            texts1 :document.createElement('span'),
            input1 :document.createElement('input'),
            div_input2 :document.createElement('div'),
            texts2 :document.createElement('span'),
            input2 :document.createElement('input'),
            div_icone :document.createElement('div'),
            icone :document.createElement('img'),
            div_manterlogado : document.createElement('div'),
            checkbox: document.createElement('input'),
            label : document.createElement('label'),
            div_buttons :document.createElement('div'),
            botao1 :document.createElement('button'),
            botao2 :document.createElement('button'),
            registra :document.createElement('span'),

            logar:logar,
            cancelar:cancelar,
            registrar:registrar,
        }
        
        main : document.getElementById('main'),
    
        dialog['dialogLogin_div'].id='dialog_login'
        dialog['texts1'].innerText='senha'
        dialog['texts2'].innerText='email:'
        dialog['input1'].type='password'
        dialog['checkbox'].type='checkbox'
        dialog['label'].innerText='manter logado'
        dialog['label'].innerText='manter logado'
        dialog['div_manterlogado'].className='dialogLogin_div_Manterlogado'
        dialog['div_manterlogado'].appendChild(dialog['checkbox'])
        dialog['div_manterlogado'].appendChild(dialog['label'])
        dialog['div_inputs'].appendChild(dialog['div_manterlogado'])
    
        /// html
        main.style.filter="blur(4px)"
        
    
        dialog['dialogLogin_div'].appendChild(dialog['div_inputs'])
        dialog['dialogLogin_div'].appendChild(dialog['div_buttons'])
        dialog['div_inputs'].appendChild(dialog['div_input1'])
        dialog['div_inputs'].appendChild(dialog['div_input2'])
    
        dialog['div_input1'].style.gridRow=3
        dialog['div_input1'].appendChild(dialog['texts1'])
        dialog['div_input1'].appendChild(dialog['input1'])
        
        dialog['div_input2'].appendChild(dialog['texts2'])
        dialog['div_input2'].appendChild(dialog['input2'])
    
        
        dialog['div_buttons'].appendChild(dialog['botao1'])
        dialog['div_buttons'].appendChild(dialog['botao2'])
        dialog['botao2'].style.gridRow=3
        dialog['div_buttons'].appendChild(dialog['registra'])
        // csss
        dialog['dialogLogin_div'].className='dialogLogin_div'
        dialog['div_inputs'].className='dialogLogin_div_inputs'
    
        dialog['div_input1'].className='dialogLogin_div_input'
        dialog['texts1'].className='dialogLogin_texts'
        dialog['input1'].className='dialogLogin_input'
        dialog['div_input2'].className='dialogLogin_div_input'
        dialog['texts2'].className='dialogLogin_texts'
        dialog ['input2'].className='dialogLogin_input'
        console.log("funciona")
    
        dialog['div_buttons'].className='dialogLogin_div_buttons'
        dialog['div_icone'].className='dialogLogin_div_icone'
        dialog['icone'].className='dialogLogin_icone'
        dialog['botao1'].className='dialogLogin_botoes'
        dialog['botao2'].className='dialogLogin_botoes'
        dialog['registra'].className='registrese'

        dialog['botao1'].innerText='logar'
        dialog['botao2'].innerText='cancelar'
        dialog['registra'].id='registra'
        dialog['registra'].innerText='registra-se'

        
        dialog['botao2'].onclick=cancelar
        dialog['botao1'].onclick=logar
        dialog['registra'].onclick=registrar
        console.log('entrei aqui')
    
        body.appendChild(dialog['dialogLogin_div'])
        return dialog
    
    }
export   default function chama_login(params) {


    function logar(){
        let email= dialog['input2'].value
        let senha= dialog['input1'].value
        console.log(dialog['checkbox'].checked)
        deixar_logado=dialog['checkbox'].checked
        const lista= document.getElementById("lista")
        lista.innerHTML=''
        login(email,senha)
    }
    function cancelar(){
       if(email_logado!='0'){ let body = document.getElementById('body')
            let  dialog_login = document.getElementById("dialog_login")
            body.removeChild(dialog_login)
            main.style.filter="blur(0px)"
        }
    }
    function registrar(){
        body.removeChild(dialog['dialogLogin_div'])
        chama_registro()
    }
    function auto_configurar(){
        dialog['dialogLogin_div'].style.borderColor=cores['cor_suplementar']
        dialog['input1'].style.borderColor=cores['cor_principal']
        dialog['input2'].style.borderColor=cores['cor_principal']
        dialog['botao1'].style.backgroundColor=cores['cor_principal']
        dialog['botao2'].style.backgroundColor=cores['cor_principal']
        dialog['registra'].style.backgroundColor=cores['cor_principal']

    }

    let dialog = frame_dialog_html(logar,cancelar,registrar)
    auto_configurar()
    
}



let botao = document.getElementById('usuario')
botao.onclick=chama_login