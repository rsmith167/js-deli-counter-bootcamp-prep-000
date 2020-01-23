function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var welcomeMessage =  `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  return welcomeMessage
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0)
  {
    var firstPerson = katzDeliLine[0]
    katzDeliLine.unshift()
    return `Currently serving ${katzDeliLine[0]}`
  }else{return "There is nobody waiting to be served!"}
  
}