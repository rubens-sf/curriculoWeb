document.getElementById("info-nome-pessoa");
function alteraParaInput(event) {
    console.log(event.target.textContent);
    p = event.target;
    var input = document.createElement("input");
    input.setAttribute("value", p.textContent)
    p.append(input);
}