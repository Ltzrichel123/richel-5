
//aki é o javascript q seleciona os estados
function populateUfs() {
  const ufSelect = document.querySelector("select[name=uf]")
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then( res => res.json())
  .then( states => {
    for( const state of states) {
      //nessa linha a baixo fica a seleção dos estados
      ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
    }
  })
}
populateUfs()

// essas linhas de codigos abaixo sao as seleção das cidades 
function getCities(event) {
  const citySelect = document.querySelector("select[name=city]")
  const stateInput = document.querySelector("input[name=state]")
  const ufValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  citySelect.innerHTML = "<option value>Selecione a cidade</option>"
  citySelect.disabled = true

  fetch(url)
  .then( res => res.json())
  .then( cities => { 

    for( const city of cities ) {
      //nessa linha a baixo fica a seleção das cidades
      citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
    }

    citySelect.disabled = false
  })
}

document.querySelector("select[name=uf]")
.addEventListener("change", getCities)

//itens de coleta( evento de click e a seleção deles)

const itemsToCollect = document.querySelectorAll(".items-grid li")

//Aqui nesse ponto vem o evento de "click"
for( const item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")
let selectedItems = []
//nesse escopo esta adicionando uma classe no itens de coleta
function handleSelectedItem(event) {
  const itemLi = event.target
  //adicionar ou remover uma classe com javascript
  itemLi.classList.toggle("selected")
  const itemId = itemLi.dataset.id

  
  //verificar se existem items selecionados, se sim
  //pegar os itens selecionados
  const alreadySelected = selectedItems.findIndex( (item) => {
    const itemFound = item == itemId
    return itemFound
  })


  //se ja estiver selecionado, tirar da seleção
  if( alreadySelected >= 0) { 
    //tirar da seleção
    const filteredItems = selectedItems.filter( item => {
      const itemIsDifferent = item != itemId
      return itemIsDifferent
    })

    selectedItems = filteredItems
  } else {
    //se não estiver selecionado, adicionar a seleção
    selectedItems.push(itemId)
  }

  //atualizar o campo escondido com os items selecionados
  collectedItems.value = selectedItems
}