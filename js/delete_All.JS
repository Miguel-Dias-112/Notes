async function lixeira(){
    delete_all().then(()=>{
        let x = document.getElementById('lista')
        x.innerHTML=''
        obj_lista_notas={}
        otarefa('d' ,'s')
        notaid=1
    })
}