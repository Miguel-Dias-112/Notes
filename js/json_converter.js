function Json2Nota(json_text) {
    let notes_arr = JSON.parse(json_text)
    for (let i = 0; i < notes_arr.length; i++) {
        const element = notes_arr[i];
        const titulo = element.titulo
        const nota = element.nota
        const data = element.data
        nova_nota(titulo, nota, data)
    }
}
async function Nota2Json(titulo, nota, data) {
    var nota = {
        titulo: titulo,
        nota: nota,
        data: data
    };

    return nota
}