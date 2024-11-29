// Code your solutions in this file

function writeCards( array, event,) {
    const messages = []
  for(let i = 0; i < array.length; i++) {
    console.log(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    messages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
  }
  return messages
}

writeCards(["Guadalupe", "Ollie", "Aki"], "birthday");

function countDown(number) {

    while(number >= 0){
        console.log(number--)
    }
}