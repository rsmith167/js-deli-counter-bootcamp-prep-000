function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var welcomeMessage =  `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  return welcomeMessage
  
}