function filtrar() {

    const textoInicial = document.getElementById("texto").value;
    let texto = textoInicial;
    
    fetch('badWords.json')
        .then(response => response.json())
        .then(function (data) {
                for (let i = 0; i < data.length; i++){
                    let palavra = data[i];
                    let regex = new RegExp(palavra, "gi");
                    texto = texto.replace(regex, "*".repeat(palavra.length))

                    if(texto!=textoInicial){
                        document.getElementById("alerta").innerText = "Seu texto contém palavras ofensivas/xingamentos!";
                        document.getElementById("alerta").className = "alert alert-danger";
                    }else{
                        document.getElementById("alerta").innerText = "Seu texto está OK!";
                        document.getElementById("alerta").className = "alert alert-success";
                    }
                }
            document.getElementById("textoVerificado").innerText = texto;
            document.getElementById("texto").value = " ";
        })
        .catch(error => console.error(error))
}
  
