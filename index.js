function botao ( ){
    let gasolina = document.getElementById("gasolina").value;
    let etanol = document.getElementById('etanol').value;
   
    let resultado = etanol / gasolina;
    
    console.log(etanol)
    if (resultado < 0.7){
        document.getElementById("resultado").value ="etanol e melhor";

    }
    if (resultado > 0.7){
        document.getElementById("resultado").value="gasolina e melhor";
    }
}
