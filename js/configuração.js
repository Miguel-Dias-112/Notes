let cores ={
    // cor_principal:'#ff6961',
    cor_principal:'#ff6961',
    // cor_suplementar:'#ff2015',
    cor_suplementar:'#ff2015',
    cor_complementar:'cornflowerblue',
}

async function configura_painel(){

    // menu de baixo
    console.log('config')
    let float_ctn = document.getElementById('float')
    float_ctn.style.borderColor=cores['cor_suplementar']

    let float_btn = document.getElementById('float_btn')
    let painel_ferramentas = document.getElementById('painel_ferramentas')
    float_btn.style.borderColor=cores['cor_suplementar']
    painel_ferramentas.style.borderColor=cores['cor_suplementar']
    painel_ferramentas.style.backgroundColor=cores['cor_principal']

    let usr = document.getElementById('usuario')
    let lixeira = document.getElementById('lixeira')
    let configuração = document.getElementById('configuração')
    usr.style.borderColor=cores['cor_principal']
    lixeira.style.borderColor=cores['cor_principal']
    configuração.style.borderColor=cores['cor_principal']



    //

}//amrelo azul e verde
async function configura_notas(){
    for (let i = 0; i < notas.length; i++) {
        console.log(cores)
        const nota = notas[i];
        console.log(nota.selecionada)
        nota.auto_configurar(nota,nota.selecionada)
        
    }
}
function carrega_config(params) {
    fs.writeFile(__dirname.replace('app.asar','') + '\config.txt', '', { flag: 'wx' }, function (err) {
        if (err) throw err;
        console.log("It's saved!");
    });
    
    fs.readFile(__dirname.replace('app.asar','')  + '\config.txt','utf8', function(err,data){
        //Enviando para o console o resultado da leitura
        console.log('lendo configurações')
        
        console.log(__dirname.replace('app.asar',''))
        if(data!=''){
            var objeto = JSON.parse(data);
            console.log(objeto);
            deixar_logado=true
            cores['cor_complementar']=objeto['cor3']
            cores['cor_principal']=objeto['cor2']
            cores['cor_suplementar']=objeto['cor1']

            console.log(cores)
            configura_painel()

        }else{
            configura_painel()
            console.log('chamei')
            // frame_dialog_html()
        }
    });
}


carrega_config()
