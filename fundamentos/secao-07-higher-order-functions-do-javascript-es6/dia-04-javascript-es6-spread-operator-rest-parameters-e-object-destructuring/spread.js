// Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Banana', 'Kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'Granola', 'Aveia'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const ingredients = [...fruit, ...additional]
  return ingredients
};

console.log(fruitSalad(specialFruit, additionalItens));