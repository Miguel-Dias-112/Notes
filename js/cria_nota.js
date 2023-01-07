const { Target } = require("electron-builder")
const { data } = require("jQuery")
 function nota_html(_titulo,_nota,_data,selecionar,editar,excluir,auto_configurar){

        let nova_nota_html = {
            ctn:document.createElement('div'),
            ctn_titulo_ctn:document.createElement('div'),
            ctn_tarefa_ctn: document.createElement('div'),
            titulo:titulo= document.createElement('h1'),
            data:document.createElement('h1'),
            tarefa:document.createElement('h1'),

            div_buttons:document.createElement('div'),
            botao1: document.createElement('div'),
            botao2: document.createElement('div'),
            botao3: document.createElement('div'),
            img1 : document.createElement('img'),
            img2 : document.createElement('img'),
            img3 : document.createElement('img'),
            selecionada:'',
            selecionar: '',
            editar: '',
            excluir: '',
            auto_configurar:auto_configurar



        }
        const lista= document.getElementById("lista")


        nova_nota_html['img1'].src='./css/target.svg'
        nova_nota_html['img1'].className='img'
        nova_nota_html['img2'].src='./css/editar.svg'
        nova_nota_html['img2'].className='img'
        nova_nota_html['img3'].src='./css/deletar.svg'
        nova_nota_html['img3'].className='img'



        nova_nota_html['botao1'].className='botao'
        nova_nota_html['botao1'].appendChild( nova_nota_html.img1)
        nova_nota_html.div_buttons.appendChild(nova_nota_html['botao1'])
        nova_nota_html['botao2'].className='botao'
        nova_nota_html['botao2'].appendChild(nova_nota_html.img2)
        nova_nota_html.div_buttons.appendChild(nova_nota_html['botao2'])
        nova_nota_html['botao3'].className='botao'
        nova_nota_html['botao3'].appendChild(nova_nota_html.img3)
        nova_nota_html.div_buttons.appendChild(nova_nota_html['botao3'])


        nova_nota_html['ctn'].appendChild(nova_nota_html['ctn_titulo_ctn'])
        nova_nota_html['ctn'].appendChild(nova_nota_html['ctn_tarefa_ctn'])

        nova_nota_html['ctn_titulo_ctn'].appendChild(nova_nota_html['titulo'])
        nova_nota_html['ctn_titulo_ctn'].appendChild(nova_nota_html['data'])
        nova_nota_html['ctn_tarefa_ctn'].appendChild(nova_nota_html['tarefa'])

        nova_nota_html['ctn'].className="tarefas_element_container"
        nova_nota_html['ctn_titulo_ctn'].className="tarefas_element_container_titulo"
        nova_nota_html['titulo'].className="titulo"
        nova_nota_html['data'].className="data"
        nova_nota_html['ctn_tarefa_ctn'].className="tarefas_element_container_tarefa"
        nova_nota_html['tarefa'].className="note"

        nova_nota_html['div_buttons'].className='buttons'

        nova_nota_html['ctn'].appendChild(nova_nota_html['div_buttons'])
        nova_nota_html['titulo'].innerText=_titulo
        nova_nota_html['tarefa'].innerText=_nota
        nova_nota_html['data'].innerText=_data

        nova_nota_html['botao1'].onclick=selecionar
        nova_nota_html['selecionar']=selecionar
        nova_nota_html['botao2'].onclick=editar
        nova_nota_html['editar']=editar
        nova_nota_html['botao3'].onclick=excluir
        nova_nota_html['excluir']=excluir
    
         return nova_nota_html

 }

 async function gerar_nota(_titulo,nota,_data,islogging,selecionada) {
    function selecionar(){
        // deletar('nota2')
        console.log('s')
        for (let i = 0; i < vinculação.length; i++) {
            const element = vinculação[i][1];
            if(element==nota_nova['ctn']){
                console.log('nota identificada')
                console.log(vinculação)
                console.log(vinculação[i][0])
                mudar_sel(vinculação[i][0]).then(()=>{
                    let cor_atual = vinculação[i][1].style.borderColor

                    if(!nota_nova.selecionada){
                        console.log("seila")
                        auto_configurar(nota_nova,true)
                        nota_nova.selecionada=true

                    }else{
                        auto_configurar(nota_nova,false)
                        nota_nova.selecionada=false

                    }
                })
            }
        }
    }
    function editar(){
        console.log(nota_nova)
        let titulo = nota_nova.titulo.innerText
        let data = nota_nova.titulo.innerText
        let tarefa = nota_nova.tarefa.innerText
        chama_dialogo(titulo,tarefa,data,true,nota_nova['ctn'])   
    }
    function excluir(){
        // deletar('nota2')
        for (let i = 0; i < vinculação.length; i++) {
          const element = vinculação[i][1];
          console.log([element, nota_nova['ctn']])
          if(element==nota_nova['ctn']){
            console.log(vinculação[i][0])
            deletar(vinculação[i][0]).then(()=>{
              delete obj_lista_notas[vinculação[i][0]]
              goaway(nota_nova['ctn'])
              window.setTimeout(()=>{
                              lista.removeChild(nota_nova['ctn'].parentElement)

              },700)
            })
          }
        }
    }
    function auto_configurar(nota_html,selecionada){
    
        if(selecionada){
            console.log(nota_html['ctn'])
            nota_html['ctn'].style.borderColor=cores['cor_complementar']
            nota_html['ctn_titulo_ctn'].style.backgroundColor=cores['cor_complementar']
            nota_html['ctn_titulo_ctn'].style.borderColor=cores['cor_complementar']
            nota_html['ctn_titulo_ctn'].style.borderColor=cores['cor_complementar']

          

            
        }else{
            
            nota_html['ctn'].style.borderColor=cores['cor_principal']
            nota_html['ctn_titulo_ctn'].style.backgroundColor=cores['cor_principal']
            nota_html['ctn_titulo_ctn'].style.borderColor=cores['cor_principal']
            nota_html['ctn_titulo_ctn'].style.borderColor=cores['cor_principal']

        }

        nota_html['botao1'].style.borderColor=cores['cor_principal']
        nota_html['botao2'].style.borderColor=cores['cor_principal']
        nota_html['botao3'].style.borderColor=cores['cor_principal']
        nota_html['botao1'].style.borderColor=cores['cor_principal']
        nota_html['botao2'].style.borderColor=cores['cor_principal']
        nota_html['botao3'].style.borderColor=cores['cor_principal']

        nota_html['botao3'].onmouseenter = ()=>{
            this.borderColor=cores['cor_complementar']
        }

    
    }

    let nota_nova = nota_html(_titulo,nota,_data,selecionar,editar,excluir,auto_configurar)
    //verifica se esta acontecendo um login
    if(!islogging){
        //caso negativo ele registrara uma nova nota no banco de daods
        add_tarefa(_titulo,nota,_data,false).then(
        async () => {
                //ocorreu a rquest e a nota foi criada
                console.log("Document successfully written!");
                let li = document.createElement("li")
                li.className="li"
                li.appendChild(nota_nova['ctn'])
                lista.appendChild(li) 
                nota_nova.selecionada=false
                vinculação.push(['nota'+notaid,nota_nova['ctn']])
                console.log(vinculação)


                auto_configurar(nota_nova,false)

                chama_notificação('nota criada')
                notaid+=1
                notas.push(nota_nova)
                // notas.push(nota_nova)

            }) .catch(async (error) => {
                // deu erro e nada acontece
                chama_notificação('error')
                console.error("Error writing document: ", error);
            });
    } else{
            // caso seja um login ira criar o elemento sem registrar novos valores
            if(selecionada){
                nota_nova.selecionada=true

                auto_configurar(nota_nova,true)

            }else{
                nota_nova.selecionada=false

                auto_configurar(nota_nova,false)
            }
            let li = document.createElement("li")
            li.className="li"
            li.appendChild(nota_nova['ctn'])
            lista.appendChild(li) 
            notas.push(nota_nova)

            chama_notificação('notas restauradas')
            
    }
    console.log(notas)
    return nota_nova['ctn']
}


