// aki esta pegando dendo da page home o main e o A
const buttonSearch = document.querySelector("#page-home main a")
// quando se clicar na modal ira abrir a modal 
const modal = document.querySelector("#modal")
// quando clicar no a iria fechar a modal
const close = document.querySelector("#modal .header a")
buttonSearch.addEventListener("click", () => {
  //removendo a classe hide da modal
  modal.classList.remove("hide")
})

//Aqui esta adicionando a modal a classe hide a modal novamente
close.addEventListener("click", () => {
  modal.classList.add("hide")
})