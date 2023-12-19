
function verificarCep() {
    var cep = document.getElementById('cep').value

   
    const ajax = new XMLHttpRequest();
    ajax.open('GET', `https://viacep.com.br/ws/${cep}/json/`)
    ajax.send();

    ajax.onload = function () {
    alert(this.responseText)
    }
}
