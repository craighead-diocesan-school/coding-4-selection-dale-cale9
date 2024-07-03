// ####################################
// ###### ----- More Than 2 ----- #####
// ####################################

function moreThanTwo() {

  let number = 0
  while (number != 'stop') {

    number = prompt('What number to you want to compare to 2?')
  }

  if (Number > 2) {
    alert(Number + ' is more then 2')
  } else if (Number < 2) {
    alert(Number + ' is not more then 2')
  } else if (number == 2) {
    alert(Number + ' is the same as  2')
  } else if (number == 'stop'){
    alert ('fine you win')
  }

}