// Code your solutions in this file
const names = ['Charlie', 'Samip', 'Ali']

function writeCards(names, event) {
  let messages = []
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return messages
}

writeCards(names)

function countDown(x) {
  while (x >= 0) {
    console.log(x)
    x--
  }
}
