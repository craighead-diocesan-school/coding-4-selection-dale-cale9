// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert('Welcome to my sports discussion program.')

  let answer = prompt('Do you like running?')

  if (answer == 'yes') {
    let answer2 = prompt(" That's good. - Do you like athletics?")

    if (answer2 == 'yes') {
      alert(' Good luck in your next race.')
    } else {
      alert('Just for fun then')
    }
  }
  let answer3 = prompt('do you watch Olympic athletics? ')

  if (answer3 == 'yes') {
    alert("That's good - it's inspiring.")
  } else {
    alert("It's not for everyone.")
  }

  alert('Goodbye')
}

function age() {
  let name = prompt('Hey! What is your name?')
  let age = prompt('What is your age?')
  age = Number(age)

  if (age > 130) { 
    alert('Age is unvalid')
  } else if (age < 1) {
    alert(' Age is unvalid')
  }  else if (age > 65) {
    alert('you know you can retire now!')
  } else if (age < 5) {
    alert('You need supervision when using a computer. ')
  } else if (age >= 18) {
    alert('Did you know you can now vote! ')
  } else if (age == 15) {
    alert('You are the same age as me.')
  } else if (age != 15) {
    alert('You are not the same age as me.')
  }

}
