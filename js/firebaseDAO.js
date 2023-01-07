

const firebase = require("firebase");
var fs = require('fs'); 
const {remote} = require('electron');
const win = remote.getCurrentWindow();


var deixar_logado

const firebaseConfig = {
    apiKey: "AIzaSyAfjSgavztJJQlC4ZXBjm7BqwEMirb4Uk4",
    authDomain: "tarefas-1ff80.firebaseapp.com",
    projectId: "tarefas-1ff80",
    storageBucket: "tarefas-1ff80.appspot.com",
    messagingSenderId: "1048194516164",
    appId: "1:1048194516164:web:caef4b66912c2a9d40b591",
    measurementId: "G-T721ZFNKZK"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
let email_logado = '0'
let notaid=0
let obj_lista_notas = 0
let notas=[]

let vinculação=[]
let obj = 0

console.log(win.getSize())
function write_config_file(width, cor1,cor2,cor3){
    fs.writeFile(__dirname.replace('app.asar','') + '/config.txt', '{"width":"' + width + 
                                                '","cor1":"'+ cor1+  
                                                '","cor2":"'+ cor2+ 
                                                '","cor3":"'+ cor3+
                                                '" }', function(erro) {

        if(erro) {
            throw erro;
        }
        console.log(__dirname + '/autologin.txt')
        console.log("Arquivo salvo");
        
    }); 
}
function resize(x) {


    let width= parseInt(x)
    win.setResizable(true)
    let swidth=  screen.availWidth;
    let sheight= screen.availHeight;
    console.log(sheight)
    win.setSize(width, sheight, true);
    win.setPosition(swidth-width,0)
    win.setResizable(false)

    console.log(win)
}

// resize(40)

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase


async function fazeremail(email, senha) {
    console.log("login "+email)

    let retorno = firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      email_logado= user.uid
      console.log(email_logado)
      // ...
      otarefa(email
        
        
        
        
        
        
        ,senha)
        
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });

    return retorno
}
 async function login(email,password) {
    console.log(email)
    if (typeof window !== 'undefined') {
        var orig = firebase.INTERNAL.node
        delete firebase.INTERNAL.node
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    }
    firebase.auth().signInWithEmailAndPassword(email,password).then(async(data)=>{
        if (deixar_logado){
            
            fs.writeFile(__dirname.replace('app.asar','') + '/autologin.txt', '{"email":"' + email + '","senha":"'+ password+'"}', function(erro) {

                if(erro) {
                    throw erro;
                }
                console.log(__dirname.replace('app.asar','') + '/autologin.txt')
                console.log("Arquivo x");
                
            }); 
            chama_notificação('bem vindo, devolta '+email.slice(0,email.indexOf('@')))

        }else{
            fs.writeFile(__dirname.replace('app.asar','') + '/autologin.txt', '', function(erro) {

                if(erro) {
                    throw erro;
                }
                console.log(__dirname.replace('app.asar','') + '/autologin.txt')
                console.log("Arquivo salvo");
            }); 
            chama_notificação('bem vindo '+email.slice(0,email.indexOf('@')))

        }

        const uid = data.user.uid
        // data.user.sendEmailVerification();
        console.log(uid)
        let doc = await db.doc('tarefas/'+uid).get()
         obj_lista_notas  = doc.data()
        lista_notas = Object.keys(obj_lista_notas)
        email_logado = uid
        let body = document.getElementById('body')
        let  dialog_login = document.getElementById("dialog_login")
        let  main = document.getElementById("main")
        //condição da errp quando inicia pelo preloginS
        try { body.removeChild( dialog_login)} catch (error) {}

        
        main.style.filter="blur(0px)"
        //  notaid =lista_notas.length

        let ids = []
        ids.push(1)
        notaid=1
        console.log(lista_notas)
        for (let i = 0; i < lista_notas.length; i++) {
            const elemento = lista_notas[i];
            const nota = obj_lista_notas[elemento] 
            if( elemento!='nota0'){
                // console.log(nota)
                let  x =elemento.slice(4);
                ids.push(parseInt(x))
                gerar_nota(nota.titulo,
                    nota.dados,
                    nota.data,true,
                    nota['selecionada'])
                .then(function(data){
                    vinculação.push([elemento,data])
                    // console.log(elemento)
                    // console.log(vinculação)

                })

            }
            
        }
         
        notaid= Math.max.apply(null, ids)+1;
        // console.log(ids)

        // console.log(notaid)



    }).catch((error)=>{
        chama_notificação(error)
        console.error(error)
    })

}
//função que bota uma tarefa nula no banco de dados pra funcionamento de arrays e afins
async function otarefa( email,senha) {
    
    db.collection("tarefas").doc(email_logado).set(({'nota0':{"dados":"", "data" : '', "titulo" : ""}} ))
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        obj_lista_notas['nota0']={"dados":"", "data" : '', "titulo" : ""} 
}
async function add_tarefa(_titulo,_dados,_datas,_selecionada) {
            console.log(_selecionada)
    obj_lista_notas['nota'+notaid]={titulo:_titulo,dados:_dados,data:_datas,selecionada:_selecionada}
    console.log('[firebaseDao] notas criadas')
    console.log( obj_lista_notas)
    return db.collection("tarefas").doc(email_logado).set(obj_lista_notas)
       

}
async function mudar_sel(notax) {
    
    var notasref =db.collection("tarefas").doc(email_logado)
    let doc = await db.doc('tarefas/'+email_logado).get()
    let data = doc.data()
    console.log('[firebaseDAO mudar_sel]')
    console.log(notax)
    console.log(doc.data())

    let _dados = data[notax].dados
    let _data =data[notax].data
    let _titulo =data[notax].titulo

    let _selecionada =data[notax].selecionada
    if(_selecionada){
        obj_lista_notas[notax] = {dados: _dados,data:_data,titulo:_titulo,selecionada: false}
        

    }else{
        obj_lista_notas[notax] = {dados: _dados,data:_data,titulo:_titulo,selecionada: true}

    }


  


    let retorno= notasref.update (obj_lista_notas);

    return retorno
} 
async function editar(notax, novos_valores) {
    
    var notasref =db.collection("tarefas").doc(email_logado)
    let doc = await db.doc('tarefas/'+email_logado).get()
    obj_lista_notas[notax] = novos_valores

    console.log(obj_lista_notas)

    let retorno= notasref.update  (obj_lista_notas);

    return retorno
}
async function deletar(notax) {
    
    var notasref =db.collection("tarefas").doc(email_logado)
    let doc = await db.doc('tarefas/'+email_logado).get()
    obj_lista_notas[notax] = firebase.firestore.FieldValue.delete()

    console.log(obj_lista_notas)

    let retorno= notasref.update  (obj_lista_notas);
    chama_notificação('nota excluida')

    return retorno
}
async function delete_all(){
    var notasref = db.collection("tarefas").doc(email_logado)
    return notasref.delete()
}
console.log(__dirname.replace('app.asar',''))