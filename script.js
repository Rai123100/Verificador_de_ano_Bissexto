function bissexto() {

let ano = parseInt(document.getElementById('ano').value)

if ( ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
    alert("O seu ano é Bissexto :D") }
else {
    alert ("O seu ano não é Bissexto >:(")
}
}
