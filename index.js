var katzDeliLine = []

function takeANumber(katzDeliLine,newPerson){
  katzDeliLine.push(`${newPerson}`)
  return (`Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`)
}
function nowServing(person){
 var i = 0
  while(person.length > i){
    i++
  }
  if (person.length === 0){
    return("There is nobody waiting to be served!")
  }
  else {return `Currently serving ${person.shift()}.`
  
  }
}
function currentLine(katzDeli){
 line =[]
 var i = 0
 for(let i = 0; i < katzDeli.length; i++){
   line.push()
 }
if (line.length === 0) {
  return 'The line is currently empty.'
  
}
  else{
    return `The line is currently: ${line}`
  }
}