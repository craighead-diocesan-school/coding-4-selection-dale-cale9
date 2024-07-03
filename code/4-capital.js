// ####################################
// ######## ----- Capital ----- #######
// ####################################

function capital() {
  let name = prompt ('Hey! what is your name?')
  let answer = prompt ('I have a question for you,' + name + ' What is the capital city of France?')

  if ( answer == 'paris'){
    alert ('You are correct!!! ' + name)
  } else {
    alert ('Try again ' + name)
  }
}