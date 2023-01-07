function tela_html(){
    let  main = document.getElementById('main')
    let tela={
        div_main:document.createElement('div'),

        div_tela:document.createElement('div'),
        tamanho_tela_span:document.createElement('span'),
        input_tela:document.createElement('input'),


        div_cores:document.createElement('div'),

        div_paletas:document.createElement('div'),
        cores_paleta_span:document.createElement('span'),
        
        input_paleta1:document.createElement('input'),
        pressetA:document.createElement('button'),
        pressetB:document.createElement('button'),


        input_paleta2:document.createElement('input'),
        pressetC:document.createElement('button'),
        pressetD:document.createElement('button'),

        input_paleta3:document.createElement('input'),
        pressetE:document.createElement('button'),
        pressetF:document.createElement('button'),


        div_buttons:document.createElement('div'),
        buttonConfirmar:document.createElement('button'),
        buttonCancelar:document.createElement('button'),

    
        
    }
        
    tela.div_main.appendChild(tela['div_cores'])

    tela.div_cores.appendChild(tela.div_paletas)
    tela.div_cores.appendChild(tela.cores_paleta_span)
    tela.cores_paleta_span.innerText='cores:'
    tela.div_cores.className='div_cores'
    // tela.div_paletas.appendChild(tela['cores_paleta_span'])

    tela.div_paletas.appendChild(tela['pressetA'])
    tela.div_paletas.appendChild(tela['pressetB'])
    tela.div_paletas.appendChild(tela['pressetC'])
    tela.div_paletas.appendChild(tela['pressetD'])
    tela.div_paletas.appendChild(tela['pressetE'])
    tela.div_paletas.appendChild(tela['pressetF'])
    // tela.div_paletas.appendChild(tela['input_paleta1'])
    // tela.div_paletas.appendChild(tela['input_paleta2'])
    // tela.div_paletas.appendChild(tela['input_paleta3'])



    tela.div_main.appendChild(tela['div_tela'])
    tela.div_tela.appendChild(tela['tamanho_tela_span'])
    tela.div_tela.appendChild(tela['input_tela'])


    tela.div_main.appendChild(tela['div_buttons'])
    tela.div_buttons.appendChild(tela['buttonConfirmar'])
    tela.div_buttons.appendChild(tela['buttonCancelar'])

    main.appendChild(tela['div_main'])

    tela.input_tela.type='range'
    tela.input_tela.min='300'
    tela.input_tela .max='400'

    tela.input_paleta1.type='color'
    tela.pressetA.innerText=''
    tela.input_paleta2.type='color'
    tela.pressetC.innerText=''
    tela.input_paleta3.type='color'
    tela.pressetF.innerText=''


    tela.div_main.className='div_main'
    tela.div_tela.className='div_tela'
    // tela.cores_paleta_span.innerText='cores :'

    tela.tamanho_tela_span.innerText='tamanho x da tela:'

    tela.input_tela.className='input_tela'

    tela.div_paletas.className='div_paletas'
    tela.pressetA.className='presset'

    tela.pressetB.className='presset'
    tela.pressetD.className='presset'
    tela.pressetE.className='presset'
    tela.pressetC.className='presset'
    tela.pressetF.className='presset'
    tela.input_paleta1.className='presset'
    tela.input_paleta2.className='presset'
    tela.input_paleta3.className='presset'

    tela.pressetA.style.background='linear-gradient(90deg, rgba(255,32,21,1) 33%, rgba(255,105,97,1) 33%, rgba(255,105,97,1) 66%, rgba(21,173,255,1) 66%)'
    tela.pressetB.style.background='linear-gradient(90deg, rgba(141,73,37,1) 33%, rgba(197,125,86,1) 33%, rgba(197,125,86,1) 66%, rgba(86,158,197,1) 66%)'
    tela.pressetC.style.background='  linear-gradient(90deg, rgba(126,82,142,1) 33%, rgba(184,171,212,1) 33%, rgba(184,171,212,1) 66%, rgba(199,212,171,1) 66%)'
    tela.pressetD.style.background='linear-gradient(90deg, rgba(236,171,15,1) 33%, rgba(247,213,71,1) 33%, rgba(247,213,71,1) 66%,rgba(71,105,247,1) 66%'
    tela.pressetE.style.background='linear-gradient(90deg,  rgba(0,84,153,1) 33%, rgba(108,133,189,1) 33%, rgba(108,133,189,1) 66%, rgba(127,0,178,1) 66%)'
    tela.pressetF.style.background=' linear-gradient(90deg, rgba(117,139,66,1) 33%, rgba(177,188,89,1) 33%, rgba(177,188,89,1) 66%,  66%, rgba(111,99,209,1) 66%)'


    tela.div_buttons.className='div_buttons'
    tela.buttonConfirmar.className='button'
    tela.buttonConfirmar.innerText='confirmar'
    tela.buttonCancelar.innerText='cancelar'

    tela.buttonCancelar.className='button'

    return tela
}


let width_inicial=window.screen.width*(20/100)
let cor_inicial=cores
if(width_inicial<300){
    width_inicial=300
}
resize(width_inicial)

function chama_tela_configuração(){
    // tela.input_paleta1.onchange=()=>{
    //     cores['cor_complementar'] = tela.input_paleta1.value 
    //     configura_notas()   
    // }
    // tela.input_paleta2.onchange=()=>{
    //     cores['cor_principal'] = tela.input_paleta2.value 
    //     configura_notas()   
    // }
    // tela.input_paleta3.onchange=()=>{
    //     cores['cor_suplementar'] = tela.input_paleta2.value 
    //     configura_notas()   
        
    // }
    let cor_antiga = [cores['cor_suplementar'],cores['cor_principal'], cores['cor_complementar]']]

    let tela = tela_html()
    function autoconfigurar(params) {
        tela.div_main.style.borderColor=cores['cor_suplementar']
        tela.buttonCancelar.style.backgroundColor=cores['cor_principal']
        tela.buttonConfirmar.style.backgroundColor=cores['cor_principal']

    }
    function presset(params) {
        let back = this.style.background

        let pos1A = back.indexOf('rgb',0)
        let pos1B = back.indexOf(')',pos1A+1)
        let pos2A = back.indexOf('rgb',pos1B)
        let pos2B = back.indexOf(')',pos2A+1)
        let pos3A = back.indexOf('rgb',pos2B+1)
        let pos3B = back.indexOf(')',pos3A)
        let pos4A = back.indexOf('rgb',pos3B+1)
        let pos4B = back.indexOf(')',pos4A)
        let cor1= back.slice(pos1A,pos1B+1)
        let cor2= back.slice(pos2A,pos2B+1)
        let cor3 = back.slice(pos3A,pos3B+1)
        let cor4 = back.slice(pos4A,pos4B+1)

        let presset= [cor1,cor2,cor3,cor4]

        cores['cor_suplementar'] = cor1
        cores['cor_principal'] = cor2
        cores['cor_complementar'] = cor4

        autoconfigurar()
        configura_painel()
        configura_notas()
        console.log(cores)
        console.log(back)

    }
    tela.input_tela.onchange=()=>{
        width_inicial=tela.input_tela.value

        resize(width_inicial)
    }
    tela.pressetA.onclick=presset
    tela.pressetB.onclick=presset
    tela.pressetC.onclick=presset
    tela.pressetD.onclick=presset
    tela.pressetE.onclick=presset
    tela.pressetF.onclick=presset


    tela.buttonConfirmar.onclick=()=>{
        main.removeChild(tela.div_main)
        write_config_file(width_inicial,cores['cor_suplementar'], cores['cor_principal'], cores['cor_complementar'])
        
    }
    tela.buttonCancelar.onclick=()=>{
        main.removeChild(tela.div_main)
        console.log(cor_antiga)

        console.log(cores)

        
        cores['cor_suplementar']= cor_antiga[0]
        cores['cor_principal']= cor_antiga[1]
        cores['cor_complementar']= cor_antiga[2]

        autoconfigurar()
        configura_painel()
        configura_notas()
        
    }

    tela.input_tela.value=width_inicial
    autoconfigurar()
}
let configuração = document.getElementById('configuração')
configuração.onclick=chama_tela_configuração

