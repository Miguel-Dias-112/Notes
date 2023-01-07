
const body = document.getElementById('body')
import chama_login from './frames/frame_login.js';

function prelogin(){
    console.log('data')
    fs.writeFile(__dirname.replace('app.asar','') + '/autologin.txt', '', { flag: 'wx' }, function (err) {
        if (err) throw err;
        console.log("It's saved!");
    });
    fs.readFile(__dirname.replace('app.asar','') + '/autologin.txt','utf8', function(err,data){
        //Enviando para o console o resultado da leitura
        console.log(data)
        if(data!=''){
            var objeto = JSON.parse(data);
            console.log(objeto);
            deixar_logado=true
            login(objeto.email,objeto.senha)
        }else{
            console.log('chamei')
            chama_login()
            // frame_dialog_html()
        }
    });
}




prelogin()

