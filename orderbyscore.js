function orderUsersByScore(users) {
  return users.sort((valor1, valor2)=>valor1.score - valor2.score);
}