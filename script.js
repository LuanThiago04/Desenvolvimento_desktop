var txt = document.getElementById("titulo")
var nome = document.getElementById("nome")
var idade = document.getElementById("idade")
var btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    console.log(nome.value);
    console.log(idade.value)
})


console.log(txt)