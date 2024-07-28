// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  let amount = prompt('How much money do you have?')
  let price = prompt('What is the price of the item?')
  let discount = prompt('What is the discount percentage?')

  answer = price / 100 * discount
  finalePrice = price - answer

  if (finalePrice > amount) {
    alert('You do not have enough money to buy that product.')
  }
  else if (finalePrice <= amount) {
    alert('YAYYY you have enough money to buy that product.')
  } else {
    alert ('error')
  }


}
