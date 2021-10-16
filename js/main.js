
function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    
}

function redirecionar(){
    //abre em uma nova aba
    window.open("https://www.google.com/")
    //abre na mesma aba
    window.location.href = "https://www.google.com/"
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "passe o mouse aqui";

}

function load(){
    alert("pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value);   
}

/* var d = new Date();
alert(d.getMonth()+1); */


/* for (var count = 0; count<=5 ; count++){
    console.log(count);
}
 */

/* var count = 0;
while (count <= 5 ){
    console.log(count);
    count++;
} */


/* var idade = prompt("Qual sua idade ?")
//var idade = 18;
if (idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
} */



/* var frutas = [{nome:"laranja", cor:"azul"},{nome:"uva",cor:"roxa"}]
console.log(frutas); */

/* var nome = "Danrley Galdino";
var idade = 24;
var lista = ["maça", "pera", "uva"]; */

// alert(nome + " tem "+ idade + " anos!");
//console.log(nome.replace("Danrley","Joaquim"));

/* lista.push("laranja")

console.log(lista.length);
console.log(lista);
console.log(lista.reverse());
console.log(lista.toString());
 */


//alert(lista[0]);

