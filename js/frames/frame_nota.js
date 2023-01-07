const { dialog } = require("electron/main")

var List_Elements_html=[]
var List_Elements=[]
function dialog_html(_titulo,_nota,_data,ja_existo,ctn){
    let  dialog={

        div:document.createElement('div'),
        div_ipts:document.createElement('div'),
        titulo_ipt:document.createElement('input'),
        nota_ipt:document.createElement('textarea'),
        data_ipt:document.createElement('input'),

        titulo_span:document.createElement('span'),
        nota_span:document.createElement('span'),
        data_span:document.createElement('span'),

        div_btns: document.createElement('div'),
        btnOK: document.createElement('button'),
        btnCancel: document.createElement('button'),

        auto_configurar:0,
        registra_nota:0,
        fecha_dialogo:0,


    }

    dialog['div'].className='dialog_div'
    dialog['div_btns'].className='dialog_btns_div'
    dialog['btnOK'].className='btn1'
    dialog['btnOK'].innerText='ok'
    dialog['btnCancel'].className='btn2'
    dialog['btnCancel'].innerText='cancelar'

    dialog['div_ipts'].className='dialog_ipts_div'
    dialog['titulo_ipt'].className='titulo_ipt'
    dialog['nota_ipt'].className='nota_ipt'
    dialog['data_ipt'].className='data_ipt'
    dialog['data_ipt'].type='date'


    dialog['titulo_span'].className='titulo_span'
    dialog['nota_span'].className='nota_span'
    dialog['data_span'].className='data_span'
    dialog['nota_span'].innerText="nota"
    dialog['data_span'].innerText="data"

    
    dialog['titulo_ipt'].value=_titulo
    dialog['nota_ipt'].value=_nota
    dialog['data_ipt'].value=_data


    const body = document.getElementById('body')
    const main = document.getElementById('main')
    main.style.filter="blur(4px)"


    dialog['div'].appendChild( dialog['div_btns'])
    dialog['div'].appendChild( dialog['div_ipts'])

    dialog['div_btns'].appendChild(dialog['btnOK'])
    dialog['div_btns'].appendChild(dialog['btnCancel'])

    dialog['div_ipts'].appendChild(dialog['titulo_ipt'])
    dialog['div_ipts'].appendChild(dialog['data_ipt'])
    dialog['div_ipts'].appendChild(dialog['nota_ipt'])
    // dialog['div_ipts'].appendChild(dialog['titulo_span'])
    // dialog['div_ipts'].appendChild(dialog['data_span'])
    // dialog['div_ipts'].appendChild(dialog['nota_span'])


    body.appendChild(dialog['div'])
    console.log(dialog['div'])
    console.log('sucesso')
    return dialog

}
function add_func(dialog,ja_existo,ctn){
    function fecha_dialogo(){
        const body = document.getElementById('body')
        body.removeChild(dialog['div'])
        main.style.filter="blur(0px)"
    }
    
     function auto_configurar(){
        
        dialog['div'].style.borderColor=cores['cor_suplementar']
        dialog['titulo_ipt'].style.borderColor=cores['cor_principal']
        dialog['nota_ipt'].style.borderColor=cores['cor_principal']
        dialog['data_ipt'].style.borderColor=cores['cor_principal']
        dialog['data_ipt'].style.borderColor=cores['cor_principal']
        dialog['btnOK'].style.backgroundColor=cores['cor_principal']
        dialog['btnCancel'].style.backgroundColor=cores['cor_principal']

        

    }
    function registra_nota(){
       
        let titulo = dialog['titulo_ipt'].value
        let nota = dialog['nota_ipt'].value
        let data = dialog['data_ipt'].value

       if( !ja_existo){
        
        let nota_nova = Nota2Json(titulo,nota,data)

            
             gerar_nota(titulo,nota,data,false,'false')


            // $.post('http://localhost:3000/', {'usuario':List_Elements})
        }
        else{
            for (let i = 0; i < vinculação.length; i++) {
                const element = vinculação[i][1];
                if(element==ctn){
                    console.log(notas)
                    console.log(notas[i])
                    console.log(i   )

                  console.log(notas[i])
                  editar(vinculação[i][0],{titulo:titulo,dados:nota,data:data, selecionada: notas[i].selecionada} ).then(()=>{
                        let _titulo = ctn.children[0].children[0]
                        let _data = ctn.children[0].children[1]
                    
                        let _dados = ctn.children[1].children[0]
                        _titulo.innerText=titulo
                        _dados.innerText=nota
                        _data.innerText=data
                        chama_notificação('nota editada')
                        wigle(ctn)

                        console.log([titulo,data,nota])

                    
                  })
                  .catch((error)=>{
                      chama_notificação('error')
                  })
        
                }
              } 
        }
        fecha_dialogo()
    }

    
    dialog['btnOK'].addEventListener('click',registra_nota)
    dialog['btnCancel'].addEventListener('click',fecha_dialogo)

    dialog['auto_configurar']=auto_configurar
    dialog['registra_nota']=registra_nota
    dialog['fecha_dialogo']=fecha_dialogo
}
  async function chama_dialogo(_titulo,_nota,_data,ja_existo,ctn) {
    let dialog = dialog_html(_titulo,_nota,_data,ja_existo,ctn)
    add_func(dialog,ja_existo,ctn)
    dialog['auto_configurar']()
}

let botão = document.getElementById('float_btn')
botão.addEventListener("click", ()=>chama_dialogo('','','',false));


